import { defineStore } from "pinia";

import axios from "axios";
import { slotFlagsText } from "@vue/shared";

const categoryStore = defineStore("categoryStore", {
  state: () => ({
    category: new Set(),
    products: [],
    brands: new Set(),
  }),
  getters: {
    GETCATEGORY: (state) => state.category,
    GETPRODUCTS: (state) => state.products,
  },
  actions: {
    //Fetch All Catalog For
    async FETCHCATALOG() {
      try {
        await axios
          .get("/api/catalog")
          .then(async (respond) => {
            for (let i of respond.data.data) {
              this.category.add(i.category);
            }
            return this.category;
          })
          .catch((err) => {
            console.log("error catalog fetching is : ", err);
          });
      } catch (err) {
        console.log("Fetch Catalog Error ",err);
      }
    },
    //Fetch All Catalog For
    async FETCHCATEGORY(category_name) {
      try {
        await axios
          .get(`/api/catalog/${category_name}`)
          .then(async (respond) => {
            this.products = respond.data;
            return this.products;
          })
          .catch((err) => {
            console.log("error category fetching is : ", err);
          });
      } catch (err) {
        console.log("Fetch Category ",err);
      }
    },
    //Fetch Marks
    async FETCHBRANDS(category_name) {
      try {
        await axios
          .get(`/api/catalog/${category_name}`)
          .then(async (respond) => {
            for (let i of respond.data) {
              this.brands.add(i.brand);
            }
          })
          .catch((err) => {
            console.log("error category fetching is : ", err);
          });
      } catch (err) {
        console.log("Fetch Category ",err);
      }
    }
  },
});

export default categoryStore;
