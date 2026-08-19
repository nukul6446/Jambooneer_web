require("dotenv").config();

const app = require("./server");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("");
  console.log("══════════════════════════════════════");
  console.log(
    `🚀 Server running at http://localhost:${PORT}`
  );
  console.log("══════════════════════════════════════");
  console.log("");
});