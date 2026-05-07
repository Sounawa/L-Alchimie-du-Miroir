import { createServer } from "http";
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, extname, posix } from "path";

const PORT = 3000;
const DIST = join(process.cwd(), "..", "..", "out");

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
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

function serveFile(res: import("http").ServerResponse, filePath: string) {
  if (!existsSync(filePath)) {
    // SPA fallback: serve index.html for any unknown path
    const indexPath = join(DIST, "index.html");
    if (existsSync(indexPath)) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(readFileSync(indexPath, "utf8"));
    } else {
      res.writeHead(503, { "Content-Type": "text/html" });
      res.end("<h1>Site en cours de construction...</h1>");
    }
    return;
  }

  const ext = extname(filePath);
  res.writeHead(200, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
  });
  res.end(readFileSync(filePath));
}

const server = createServer((req, res) => {
  const urlPath = req.url?.split("?")[0] || "/";

  // Serve from out/ directory directly (no basePath in dev preview)
  let filePath: string;

  if (urlPath === "/" || urlPath === "") {
    filePath = join(DIST, "index.html");
  } else {
    filePath = join(DIST, urlPath);
  }

  serveFile(res, filePath);
});

// Keep alive with interval
setInterval(() => {}, 10000);

server.listen(PORT, "0.0.0.0", () => {
  console.error(`Static file server on port ${PORT} - serving ${DIST}`);
});
