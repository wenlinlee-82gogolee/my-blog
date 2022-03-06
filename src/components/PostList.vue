<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';
import { computed, onMounted, onUnmounted, onUpdated } from 'vue';
export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log('mounted'));
    onUnmounted(() => console.log('Unmounted'));
    onUpdated(() => console.log('updated'));

    return { onMounted, onUpdated, onUnmounted };
  },
};
</script>

<style></style>
