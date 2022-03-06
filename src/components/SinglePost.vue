<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippetBody }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['post'],
  setup(props) {
    const snippetBody = computed(() => {
      return props.post.body.slice(0, 30) + '...';
    });

    return { snippetBody };
  },
};
</script>

<style></style>
