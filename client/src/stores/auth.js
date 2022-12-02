import { defineStore } from "pinia";
import axios from "axios";

const authStore = defineStore("authstore", {
  state: () => ({
    user: {},
  }),
  //Persist State
  persist: {
    storage: sessionStorage,
    paths: ['user'],
  },
  //Creating Getters
  getters: {
    GETUSER: (state) => state.user,
  },
  actions: {
    //Register User
    async REGISTERUSER(user_data) {
      try {
        await axios
          .post("api/user/register", user_data)
          .then((user) => console.log("registration user : ", user))
          .catch((err) => console.log("registration err is ", err));
      } catch (err) {
        console.log("Pinia Register User Error : ", err);
      }
    },
    //Login User
    async LOGINUSER(user_data){
      try {
        await axios
          .post("api/user/login", user_data)
          .then((user) => {
            this.user = user.data.user;
            sessionStorage.setItem('token',user.data.token);
            delete this.user.password;
          })
          .catch((err) => console.log("login err is ", err));
      }catch(err){
        console.log('Error Happen Pinia Login Functions ' ,err);
      }
    }
  },
});

export default authStore;
