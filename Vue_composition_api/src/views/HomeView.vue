<script setup>
import { ref } from 'vue'
import { usePostsStore } from '@/stores/posts'
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'

const postStore = usePostsStore()
const postFilter = ref('all')

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'saved' : 'all'
}
</script>

<template>
  <!-- Header -->
  <div class="header">
    <div>
      <h3>{{ postFilter === 'all' ? 'All posts' : 'Saved posts' }}</h3>
      <span v-show="postStore.loading" class="material-icons">cached</span>
    </div>
    <button @click="setPostFilter">
      {{ postFilter === 'all' ? 'Show saved posts' : 'Show all posts' }}
    </button>
  </div>

  <!-- Error -->
  <div v-if="postStore.errMsg" class="error">
    {{ postStore.errMsg }}
  </div>

  <div v-if="postFilter === 'all'">
    <div v-for="post in postStore.sorted" :key="post.id">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>

  <div v-if="postFilter === 'saved'">
    <div v-for="post in postStore.saved" :key="post.id">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      animation: spin 1s linear infinite;
    }
  }
  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;
    &:hover {
      background: #0ea5e9;
    }
  }
}

.error {
  margin: 2rem;
  background: #f87171;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
