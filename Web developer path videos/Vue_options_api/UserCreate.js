export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        membership: "Guest",
      },
    };
  },
  computed: {
    isFormInvalid() {
      return this.user.username === "" || this.user.email === "";
    },
  },
  methods: {
    addUser() {
        // Emit event
      this.$emit('add', this.user)

      this.user.username = "";
      this.user.email = "";
      this.user.membership = "Guest";
    },
  },
  template: `<div class="bg-slate-100 m-6 p-6 rounded-md">
    <h1 class="text-2xl font-bold mb-4">Create New User</h1>
    <form @submit.prevent="addUser">
      <div>
        <span>Username</span>
        <input
          type="text"
          class="w-full p-2 rounded-md border border-zinc-100 mt-1 shadow-lg focus:outline-blue-500"
          placeholder="Enter your username"
          v-model="user.username"
        />
      </div>
      <div class="mt-4">
        <span>Email</span>
        <input
          type="email"
          class="w-full p-2 rounded-md border border-zinc-100 mt-1 shadow-lg focus:outline-blue-500"
          placeholder="Enter your email"
          v-model="user.email"
        />
      </div>
      <div class="mt-4">
        <span>Membership status</span>
        <div class="flex items-center justify-between gap-4 mt-2">
          <div class="flex items-center">
            <input
              class="w-4 h-4"
              type="radio"
              id="guest"
              value="Guest"
              v-model="user.membership"
            />
            <label for="guest" class="ml-2 font-medium">Guest</label>
          </div>
          <div class="flex items-center">
            <input
              class="w-4 h-4"
              type="radio"
              id="premium"
              value="Premium"
              v-model="user.membership"
            />
            <label for="premium" class="ml-2 font-medium">Premium</label>
          </div>
          <div class="flex items-center">
            <input
              class="w-4 h-4"
              type="radio"
              id="vip"
              value="VIP"
              v-model="user.membership"
            />
            <label for="vip" class="ml-2 font-medium">VIP</label>
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <button
          :disabled="isFormInvalid"
          class="font-medium bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-700 shadow-lg disabled:bg-zinc-300 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </form>
  </div>`,
};
