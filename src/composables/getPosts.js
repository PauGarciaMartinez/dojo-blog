import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';
import { timestamp } from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection('posts').orderBy('created', 'desc').get();

      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      });

    } catch(e) {
      error.value = e.message;
      console.log(error.value);
    }
  }

  return { posts, error, load }
}

export default getPosts;