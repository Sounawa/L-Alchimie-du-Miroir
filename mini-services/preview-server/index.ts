import { createServer, IncomingMessage, ServerResponse } from "http";
import { readFileSync, existsSync, readdirSync } from "fs";
import { join, extname } from "path";

const PORT = 3000;
const PROJECT = "/home/z/my-project";

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".map": "application/json",
};

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  try {
    const urlPath = req.url?.split("?")[0] || "/";

    // Route all requests to the main project
    const targetPath = urlPath === "/" ? "/index.html" : urlPath;

    // Try serving from out/ first (static build)
    const outPath = join(PROJECT, "out", targetPath);
    if (existsSync(outPath)) {
      const ext = extname(outPath);
      res.writeHead(200, {
        "Content-Type": MIME[ext] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(readFileSync(outPath));
      return;
    }

    // SPA fallback
    const indexPath = join(PROJECT, "out", "index.html");
    if (existsSync(indexPath)) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(readFileSync(indexPath, "utf8"));
      return;
    }

    res.writeHead(503, { "Content-Type": "text/html" });
    res.end("<h1>En cours de construction...</h1>");
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>Erreur</h1>");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.error(`Preview server running on http://0.0.0.0:${PORT}`);
});
