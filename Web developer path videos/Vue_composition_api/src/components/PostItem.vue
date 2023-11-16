<script setup>
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()

defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="header">
      <span>Written by {{ post.author }} on {{ post.created_at }}</span>
      <div>
        <button @click="postStore.deletePost(post.id)" class="del material-icons">delete</button>
        <button @click="postStore.savePost(post.id)" class="save material-icons">
          {{ post.is_saved ? 'bookmark' : 'bookmark_border' }}
        </button>
      </div>
    </div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<style lang="scss" scoped>
.header {
  font-size: 12px;
  background: #0284c7;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 300;
  button {
    border-radius: 30px;
  }
  div .del {
    font-size: 20px;
    padding: 3px;
    background: #fff;
    color: #ef4444;
  }
  div .save {
    font-size: 20px;
    padding: 3px;
    background: #fff;
    color: #22c55e;
    margin-left: 10px;
  }
}
h1 {
  padding: 1rem;
}
p {
  padding: 0 1rem 1rem;
  font-weight: 300;
}
</style>
