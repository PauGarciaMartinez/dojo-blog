<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
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

      } catch(e) {
        error.value = e.message;
        console.log(eror.value);
      }
    }

    return { posts, showPosts }
  }
}
</script>
