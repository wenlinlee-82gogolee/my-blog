<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SingleList :post="post" />
    </div>
  </div>
</template>

<script>
import SingleList from './SingleList.vue';
import { computed, onMounted, onUnmounted, onUpdated } from 'vue';
export default {
  props: ['posts'],
  components: { SingleList },
  setup(props) {
    onMounted(() => console.log('mounted'));
    onUnmounted(() => console.log('Unmounted'));
    onUpdated(() => console.log('updated'));

    return { onMounted, onUpdated, onUnmounted };
  },
};
</script>

<style></style>
