const card = (img, user, created_at) => {
  return /* HTML */ ` <!-- card -->
    <div class="rounded-lg shadow-lg mb-6 bg-white overflow-hidden">
      <!-- main image -->
      <img
        src="${img}"
        alt="main-image"
        class="w-full object-cover"
      />

      <!-- card footer -->
      <div class="p-4 flex justify-between items-center">
        <!-- profile -->
        <div class="flex items-center gap-2">
          <img
            src="${img}"
            alt="profile-image"
            class="w-10 h-10 rounded-full"
          />
          <div class="text-sm">
            <p class="font-medium">${user}</p>
            <p class="text-zinc-600 text-xs">${created_at}</p>
          </div>
        </div>
        <!-- actions -->
        <div class="flex items-center gap-4">
          <button class="material-icons text-3xl">favorite_outline</button>
          <button class="material-icons text-3xl">chat_bubble_outline</button>
          <button class="material-icons text-3xl">bookmark_border</button>
        </div>
      </div>
    </div>`;
};

export default card;
