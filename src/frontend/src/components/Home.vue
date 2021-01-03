<template>
  <div class="hello">
    <h1>Home Page</h1>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <h2>Posts</h2>
      <div v-for="post in posts" :key="post.id">{{ post.id }} is titled: {{ post.title }}</div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';


export default {
  apollo: {
    posts: gql`
    {
      posts {
        id
        title
      }
    }`
  }
};
</script>
