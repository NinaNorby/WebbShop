import { readJSONFile } from '../utilities/fileManager.js';
import { Product } from '../models/products-model.js';

export const listProducts = async (req, res) => {
  try {
    const rawProducts = await readJSONFile('./products.json');
    const products = rawProducts.map(
      (p) =>
        new Product(p.id, p.title, p.description, p.price, p.inStock, p.imageUrl)
    );
    res.status(200).json({ success: true, result: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const rawProducts = await readJSONFile('./products.json');
    const product = rawProducts.find(
      (p) => p.id === parseInt(req.params.id, 10)
    );

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, result: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
