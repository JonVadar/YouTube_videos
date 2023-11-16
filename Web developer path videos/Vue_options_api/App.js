import UserList from "./UserList.js";
import UserCreate from "./UserCreate.js";
import TheWatcher from "./TheWatcher.js";

const { createApp } = Vue;

createApp({
  components: { UserList, UserCreate, TheWatcher },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    add(user) {
        this.users.push({
            username: user.username,
            email: user.email,
            membership: user.membership,
        })
    }
  },
}).mount("#app");
