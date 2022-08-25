import { ProductPreview } from "./../../features/products/productsSlice";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const productPreviewHardCoded: ProductPreview[] = [];

const productPreviewHandler: NextApiHandler = (
  request: NextApiRequest,
  response: NextApiResponse
): ProductPreview[] => {
  return productPreviewHardCoded;
};

export default productPreviewHandler;
