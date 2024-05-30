const data = require("./MOCK_DATA");
const express = require("express");
const port = 3000;

const app = express();

function compareValues(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

function sortedElements(array, compareFn) {
  return array.slice().sort(compareFn);
}

function straightSearchEngine(array, sku) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].sku === sku) return array[i];
  }
  return null;
}

function binarySearchEngine(array, sku) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid].sku === sku) return array[mid];
    else if (array[mid].sku < sku) left = mid + 1;
    else right = mid - 1;
  }

  return null;
}

app.use(express.json());

app.get("/data", (req, res) => {
  res.status(200).json(data);
});

app.get("/data/sorted", (req, res) => {
  const sortData = sortedElements(data, (a, b) =>
    compareValues(a.name, b.name)
  );
  res.status(200).json(sortData);
});

app.get("/data/binarySearch/:id", (req, res) => {
  const { id } = req.params;
  const sortData = sortedElements(data, (a, b) => compareValues(a.sku, b.sku));
  try {
    const product = binarySearchEngine(sortData, id);

    if (!product) throw Error(`There is no product with sku: ${id}`);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

app.get("/data/straightSearch/:id", (req, res) => {
  const { id } = req.params;

  try {
    const product = straightSearchEngine(data, id);

    if (!product) throw Error(`There is no product with sku: ${id}`);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
