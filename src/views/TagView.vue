<template>
  <div class="tag">Tag Page</div>
  {{ posts }}
</template>

<script>
import Spinner from '../components/Spinner.vue';
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
export default {
  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error, load };
  },
};
</script>

<style></style>
