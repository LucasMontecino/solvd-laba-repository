const data = require("./MOCK_DATA");
const express = require("express");
const port = 3000;

const app = express();

function searchStraightEngine(array, sku) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].sku === sku) return array[i];
  }
}

app.use(express.json());

app.get("/data", (req, res) => {
  res.status(200).json(data);
});

app.get("/data/:id", (req, res) => {
  const { id } = req.params;

  try {
    const product = searchStraightEngine(data, id);

    if (!product) throw Error(`There is no product with sku: ${id}`);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
