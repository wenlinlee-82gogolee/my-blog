<template>
  <div class="home">
    <h1>Welcome to Wen-Lin's Blog!</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
      Loading...
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'HomeView',
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
<style scoped>
h1 {
  color: #fff;
  font-size: 35px;
  position: relative;
}
h1::before {
  content: '';
  display: block;
  position: absolute;
  width: 50%;
  height: 110%;
  background-color: #086e7d;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  bottom: -2px;
  transform: rotateZ(1.8deg);
}
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
