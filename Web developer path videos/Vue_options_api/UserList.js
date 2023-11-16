export default {
  props: {
    users: Array,
  },
  template: `<div class="bg-slate-100 m-6 p-6 rounded-md">
    <h1 class="text-2xl font-bold mb-4">Users List</h1>
    <table v-if="users.length" class="w-full bg-white rounded-md">
      <tr class="text-left text-zinc-500">
        <th class="p-2 font-light">Username</th>
        <th class="p-2 font-light">Email</th>
        <th class="p-2 font-light">Membership</th>
      </tr>
      <tr v-for="(user, index) in users" :key="index" class="h-20 border-b">
        <td class="p-2">{{ user.username }}</td>
        <td class="p-2">{{ user.email }}</td>
        <td
          :class="[
          {'text-purple-500' : user.membership === 'Premium'}, {'text-orange-500' : user.membership === 'VIP'}
          ]"
          class="p-2 text-green-500">{{ user.membership }}</td>
      </tr>
    </table>
    <h1 v-else class="text-lg font-bold mb-4">Please add a user</h1>
  </div>`,
};
