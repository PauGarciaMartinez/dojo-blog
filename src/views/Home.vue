<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '@/components/PostList';

export default {
  name: 'Home',
  components: {
    PostList
  },
  setup() {
    const posts = ref([]);
    const error = ref([]);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        
        if (!data.ok) {
          throw new Error('No data available');
        }

        posts.value = await data.json();

      } catch(e) {
        error.value = e.message;
        console.log(error.value);
      }
    }

    load();

    return { posts, error }
  }
}
</script>
