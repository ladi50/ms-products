const getProducts = async () => {
  try {
    const products = [
      {
        name: "toy",
        type: "toy"
      },
      {
        name: "doll",
        type: "doll"
      }
    ];

    return products;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getProducts;
