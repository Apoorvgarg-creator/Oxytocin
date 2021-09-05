const { doc } = require("@firebase/firestore");

class Shop {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

  getRef = (db) => {
    this.ref = doc(db, "shops", this.number);
    return this.ref;
  };

  addProduct = async (product) => {
    const productDoc = doc(db, "shops", [this.number, product.identifier]);
    await product.getOrSetData(productDoc);
    return product;
  };
}

export default Shop;
