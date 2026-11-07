import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

// The items live in memory: this app lists them, it does not persist them.
const items = [
  { id: 1, text: "Item one" },
  { id: 2, text: "Item two" },
  { id: 3, text: "Item three" },
];

app.get("/api/items", (req, res) => {
  res.json({ items });
});

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use((req, res) => res.status(404).json({ error: "not found" }));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
