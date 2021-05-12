<template>
  <div class="tag"> 
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner';
import PostList from '@/components/PostList';
import TagCloud from '@/components/TagCloud';
import getPosts from '@/composables/getPosts.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Tag',
  components: {
    Spinner,
    PostList,
    TagCloud
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
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>