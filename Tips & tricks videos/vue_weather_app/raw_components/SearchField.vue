<script setup></script>

<template>
  <div>
    <!-- search field -->
    <form>
      <div class="bg-white border border-indigo-600/30 rounded-lg shadow-lg flex items-center">
        <i class="fa-solid fa-magnifying-glass p-2 text-indigo-600"></i>
        <input
          type="text"
          placeholder="Search for a place"
          class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
        />
      </div>
    </form>
    <!-- search suggestions -->
    <div class="bg-white my-2 rounded-lg shadow-lg">
      <div>
        <button class="px-3 my-2 hover:text-indigo-600 hover:font-bold w-full text-left"></button>
      </div>
    </div>
  </div>
</template>
