
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow your website to connect to this backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Price Finder Backend is Running!",
    status: "ok"
  });
});

app.get("/api/search", (req, res) => {
  const query = String(req.query.q || "").trim();

  if (!query) {
    return res.status(400).json({
      error: "Product name is required"
    });
  }

  res.json({
    message: "Backend is working!",
    query: query,
    products: [],
    note: "Real Indian shopping prices are not connected yet."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Price Finder backend running on port " + PORT);
});
