import fetch from "node-fetch";
import http from "http";

const URL = "https://dokxy-api.onrender.com/";

async function ping() {
  try {
    const response = await fetch(URL);
    const ok = response.status === 200;
    console.log(new Date().toISOString(), "Pinged URL:", URL, "Status OK:", ok);
  } catch (err) {
    console.error(new Date().toISOString(), "Ping failed:", err);
  }
}

(async () => {
  await ping();

  setInterval(async () => {
    await ping();
  }, 10 * 60 * 1000);
})();

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Halo\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
