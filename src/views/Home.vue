<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
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
    const posts = ref([
      { title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id rutrum dolor, a volutpat nibh. Maecenas sit amet rutrum lorem. Ut eget est non neque blandit tristique. Vivamus aliquet, nunc non tempus elementum, nisl velit porta justo, in ullamcorper neque orci nec est. Phasellus accumsan bibendum finibus. Nullam maximus rhoncus placerat. Duis molestie a nisi vel vehicula. Nulla rhoncus blandit egestas. Sed et congue enim, porta porttitor nunc. Nunc auctor arcu id lectus accumsan, a accumsan ex interdum. Nulla tempus urna et nisi dictum imperdiet. Nam nec efficitur nulla, vitae consequat mi. Nulla volutpat fermentum tortor, et scelerisque justo.', id: 1 },
      { title: 'Top 5 CSS tips', body: 'Maecenas gravida velit metus, a euismod massa rutrum non. Aenean sit amet arcu purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mollis tincidunt dolor, non pharetra magna luctus vitae. Curabitur vitae urna posuere tellus fermentum blandit in eu purus. Proin mattis nibh vitae urna tempor, a pharetra lectus aliquet. Integer eleifend semper mauris, ac molestie magna aliquam a. Donec non quam quis turpis consectetur euismod in at dolor. Nullam euismod, ipsum quis mollis tempus, purus ex lacinia metus, a commodo enim leo convallis diam.', id: 2 }
    ]);

    return { posts }
  }
}
</script>
