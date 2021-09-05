const { doc, getDoc, setDoc } = require("@firebase/firestore");
const { default: axios } = require("axios");
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { TriggerContext } from "twilio/lib/rest/api/v2010/account/usage/trigger";

class Product {
  constructor({ identifier, name, description, inventory = 0, imageURL }) {
    this.identifier = identifier;
    this.name = name;
    this.description = description;
    this.inventory = inventory;
    this.imageURL = imageURL;
  }

  addProductImage = async () => {
    const response = await axios.get(this.imageURL, {
      responseType: "arraybuffer",
    });

    const buffer = Buffer.from(response.data, "binary").toString("base64");

    const storage = getStorage();
    const storageRef = ref(storage, `images`);
    const link = await uploadString(storageRef, buffer, "base64");
    this.imageURL = await getDownloadURL(link.ref);
    this.setData();
  };

  getOrSetData = async (ref = this.ref) => {
    this.ref = ref;
    const data = await getDoc(ref);
    this.id = data.id;
    if (data.exists()) {
      this.name = data.data().name;
      this.description = data.data().description;
      this.identifier = data.data().identifier;
      this.inventory = data.data().inventory;
      this.imageURL = data.data().imageURL;
      return true;
    } else {
      this.addProductImage();
      this.setData();
    }
    return false;
  };

  setData = () => {
    setDoc(this.ref, {
      name,
      description,
      image: this.imageURL,
      inventory,
      identifier,
    });
  };

  setInventory = (newInventory) => {
    setDoc(this.ref, {
      name,
      description,
      image: this.imageURL,
      inventory: newInventory,
      identifier,
    });
  };
}

export default Product;
