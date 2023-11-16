export default {
  data() {
    return {
      password: "",
      isPasswordValid: false,
    };
  },
  watch: {
    password(newPass, oldPass) {
      this.isPasswordValid =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/.test(newPass);
    },
  },
  template: `<div class="bg-slate-100 m-6 p-6 rounded-md">
    <h1 class="text-2xl font-bold mb-4">The Watcher</h1>
      <span>Password</span>
      <input
        v-model="password"
        type="text"
        class="w-full p-2 rounded-md mt-1 shadow-lg"
        :class="isPasswordValid ? 'focus:outline-green-500' : 'focus:outline-red-500'"
        placeholder="Enter your password"
      />
      <small>* Password must contain at least one number and a symbol</small>
    </div>`,
};
