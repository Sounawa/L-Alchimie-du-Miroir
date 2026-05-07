import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";

const PORT = 3000;
const DIST = "/home/z/my-project/out";

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
};

const server = createServer((req, res) => {
  let urlPath = req.url?.split("?")[0] || "/";
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = join(DIST, urlPath);
  const ext = extname(filePath);

  if (!existsSync(filePath)) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(readFileSync(join(DIST, "index.html"), "utf8"));
    return;
  }

  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  res.end(readFileSync(filePath));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serving static site on http://0.0.0.0:${PORT}`);
});
