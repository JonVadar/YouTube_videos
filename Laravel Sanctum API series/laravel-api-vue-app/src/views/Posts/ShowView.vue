<script setup>
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const { getPost, deletePost } = usePostsStore();
const authStore = useAuthStore();
const post = ref(null);

onMounted(async () => (post.value = await getPost(route.params.id)));
</script>

<template>
  <main>
    <div v-if="post">
      <div class="border-l-4 border-blue-500 pl-4 mt-12">
        <h2 class="font-bold text-3xl">{{ post.title }}</h2>
        <p class="text-xs text-slate-600 mb-4">
          Posted by {{ post.user.name }}
        </p>
        <p>
          {{ post.body }}
        </p>

        <div
          v-if="authStore.user && authStore.user.id === post.user_id"
          class="flex items-center gap-6 mt-6"
        >
          <form @submit.prevent="deletePost(post)">
            <button
              class="text-red-500 font-bold px-2 py-1 border border-red-300"
            >
              Delete
            </button>
          </form>

          <RouterLink
            :to="{ name: 'update', params: { id: post.id } }"
            class="text-green-500 font-bold px-2 py-1 border border-green-300"
            >Update</RouterLink
          >
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="title">Page not found!</h2>
    </div>
  </main>
</template>
