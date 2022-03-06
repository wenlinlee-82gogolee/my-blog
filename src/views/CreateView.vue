<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown" />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const title = ref('');
    const body = ref('');
    const tag = ref('');
    const tags = ref([]);

    const router = useRouter();
    // console.log(router);

    const handleKeydown = () => {
      tag.value = tag.value.replace(/\s+/g, '');
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = '';
    };

    const handleSubmit = async () => {
      const post = { title: title.value, body: body.value, tags: tags.value };

      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });

      router.push('/');
    };

    return { title, body, tag, handleKeydown, tags, handleSubmit };
  },
};
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 700;
}
label::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #ffc900;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 50px;
  background: #ffc900;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #f0f0f0;
  padding: 12px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
