import fetch from "node-fetch";
import http from "http";

const URL = "https://dokxy-api.onrender.com/";

async function ping() {
  try {
    const response = await fetch(URL);
    const ok = response.status === 200;
    console.log("Pinged URL:", URL, "Status OK:", ok);
  } catch (err) {
    console.error("Ping failed:", err);
  }
}

(async () => {
  await ping();

  setInterval(async () => {
    await ping();
  }, 5 * 60 * 1000);
})();

const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Ping service is running\n");
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
