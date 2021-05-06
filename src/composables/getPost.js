import { ref } from 'vue';
import getPosts from './getPosts';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // Simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      })

      let data = await fetch("http://localhost:3000/posts/" + id);
      
      if (!data.ok) {
        throw new Error('Post not available');
      }

      post.value = await data.json();

    } catch(e) {
      error.value = e.message;
      console.log(error.value);
    }
  }

  return { post, error, load }
}

export default getPost;