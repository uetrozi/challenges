import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const id = req.query.id;

  res.status(200).json(getProductById(id));
}
