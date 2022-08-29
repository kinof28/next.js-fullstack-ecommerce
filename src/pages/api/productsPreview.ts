import { ProductPreview } from "../../features/products/productsSlice";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const productPreviewHardCoded: ProductPreview[] = [
  {
    id: 1,
    name: "Fat Stash 2",
    title: "Fat Stash 2",
    price: 40,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/399/53101/354617179bedf58dead9b2d26d6cf6a62b282a7a8f1dc6ee7bbaaca91396926c__02626.1661459540.png?c=2",
    models: [
      {
        id: 8236,
        image:
          "https://skdy-assets.s3.amazonaws.com/b4a90d50f702b9aa4859d1abc11e3b73124d4947a3061aa35c94f15539139e3b.png",
      },
      {
        id: 8235,
        image:
          "https://skdy-assets.s3.amazonaws.com/354617179bedf58dead9b2d26d6cf6a62b282a7a8f1dc6ee7bbaaca91396926c.png",
      },
    ],
  },
  {
    id: 2,
    name: "crusher evo wireless headphones",
    title: "Crusher® Evo Sensory Bass Headphones with Personal Sound",
    price: 200,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/326/39491/e01e2892a4261f6255595b79125f7ad3bd2d0de0485296bbc5c4e42bf4426b43__05201.1659642999.jpg?c=2",
    models: [
      {
        id: 8154,
        image:
          "https://cdn11.bigcommerce.com/s-k11cg5mzh9/product_images/attribute_value_images/8154.preview.jpg?t=1655834524",
      },
      {
        id: 8155,
        image:
          "https://cdn11.bigcommerce.com/s-k11cg5mzh9/product_images/attribute_value_images/8155.preview.jpg?t=1655834524",
      },
      {
        id: 8153,
        image:
          "https://cdn11.bigcommerce.com/s-k11cg5mzh9/product_images/attribute_value_images/8153.preview.jpg?t=1655834525",
      },
      {
        id: 8156,
        image:
          "https://cdn11.bigcommerce.com/s-k11cg5mzh9/product_images/attribute_value_images/8156.preview.jpg?t=1655834526",
      },
    ],
  },
  {
    id: 3,
    name: "push active wireless earbuds",
    title: "Push™ Active True Wireless Earbuds",
    price: 80,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/327/52611/df7ce3d9546fdb41d7cd5ca25f8177f4f675cd2584ff03839441f40853993cef__38242.1661384237.jpg?c=2",
    models: [
      {
        id: 8015,
        image:
          "https://skdy-assets.s3.amazonaws.com/a8cc448f8ec5adfda80aa344370f61dbc1860abbd49648478a0cb3ba494fc986.jpg",
      },
      {
        id: 8016,
        image:
          "https://skdy-assets.s3.amazonaws.com/df7ce3d9546fdb41d7cd5ca25f8177f4f675cd2584ff03839441f40853993cef.jpg",
      },
      {
        id: 8014,
        image:
          "https://skdy-assets.s3.amazonaws.com/1a3aac7fa8c821cbb605b86ce36e141cc4591c8125129eca4fafcfc257676664.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "transparency hesh evo wireless headphones",
    title: "Transparency Hesh® Evo Wireless Headphones",
    price: 115,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/395/43393/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c__57550.1659976693.png?c=2",
    models: [
      {
        id: 8184,
        image:
          "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png",
      },
    ],
  },
  {
    id: 5,
    name: "transparency-jib-true-2-wireless-earbuds",
    title: "Transparency Jib™ True 2 Wireless Earbuds",
    price: 50,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/394/48002/ba024c392854a9eb1a9f60f96f2a3a65646fa07bf40816c7dae80651a6209e74__42487.1660768896.png?c=2",
    models: [
      {
        id: 8183,
        image:
          "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/ba024c392854a9eb1a9f60f96f2a3a65646fa07bf40816c7dae80651a6209e74.png",
      },
    ],
  },
  {
    id: 5,
    name: "transparency-jib-true-2-wireless-earbuds",
    title: "Transparency Jib™ True 2 Wireless Earbuds",
    price: 50,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/394/48002/ba024c392854a9eb1a9f60f96f2a3a65646fa07bf40816c7dae80651a6209e74__42487.1660768896.png?c=2",
    models: [
      {
        id: 8183,
        image:
          "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/ba024c392854a9eb1a9f60f96f2a3a65646fa07bf40816c7dae80651a6209e74.png",
      },
    ],
  },

  {
    id: 5,
    name: "transparency-jib-true-2-wireless-earbuds",
    title: "Transparency Jib™ True 2 Wireless Earbuds",
    price: 50,
    mainImag:
      "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/394/48002/ba024c392854a9eb1a9f60f96f2a3a65646fa07bf40816c7dae80651a6209e74__42487.1660768896.png?c=2",
    models: [
      {
        id: 8183,
        image:
          "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/ba024c392854a9eb1a9f60f96f2a3a65646fa07bf40816c7dae80651a6209e74.png",
      },
    ],
  },
];

const productPreviewHandler: NextApiHandler = (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  response.json(productPreviewHardCoded);
};

export default productPreviewHandler;
