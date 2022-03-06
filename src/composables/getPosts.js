import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });

      let data = await fetch('http://localhost:3000/posts');
      posts.value = await data.json();
      if (!data.ok) {
        throw Error('no data available...');
      }
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };

  return { posts, error, load };
};

export default getPosts;
