import { ProductPreview } from "../../features/products/productsSlice";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const productPreviewHardCoded: ProductPreview[] = [
  {
    id: 1,
    name: "crusher evo wireless headphones",
    title: "Crusher® Evo Sensory Bass Headphones with Personal Sound",
    price: 200,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/326/39491/e01e2892a4261f6255595b79125f7ad3bd2d0de0485296bbc5c4e42bf4426b43__05201.1659642999.jpg?c=2",
    models: [],
  },
];

const productPreviewHandler: NextApiHandler = (
  request: NextApiRequest,
  response: NextApiResponse
): ProductPreview[] => {
  return productPreviewHardCoded;
};

export default productPreviewHandler;
