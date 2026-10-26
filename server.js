
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

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

