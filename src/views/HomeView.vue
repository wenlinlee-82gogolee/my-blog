<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="postStatus" />
    <button @click="postStatus = !postStatus">toggle posts</button>
    <button @click="posts.pop()">remove last post</button>
  </div>
</template>

<script>
import PostList from '../components/PostList';
import { ref } from 'vue';
export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([]);
    let postStatus = ref(true);

    return { posts, postStatus };
  },
};
</script>
