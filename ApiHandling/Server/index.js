import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, ProductName: "Laptop", Price: 1000 },
    { id: 2, ProductName: "Mobile", Price: 500 },
    { id: 3, ProductName: "Tablet", Price: 300 },
    { id: 4, ProductName: "Headphone", Price: 30 },
    { id: 5, ProductName: "Keyboard", Price: 20 },
  ];

  if (req.query.search) {
    const search = req.query.search;
    const filteredProducts = products.filter((product) =>
      product.ProductName.toLowerCase().includes(search.toLowerCase())
    );
    res.send(filteredProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
