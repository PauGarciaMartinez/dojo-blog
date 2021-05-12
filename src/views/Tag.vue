<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="tag">
    <PostList :posts="filteredPosts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from '@/components/Spinner';
import PostList from '@/components/PostList';
import getPosts from '@/composables/getPosts.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Tag',
  components: {
    Spinner,
    PostList
  },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();

    load();

    const filteredPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag));
    })

    return { filteredPosts, posts, error }
  }
}
</script>

<style>

</style>