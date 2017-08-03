<template>
  <div>
    <br/>
    <br/>
    <button class="post-request btn-lg btn-success" @click="openModal">Post A Request</button>
    <br/>
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-9">
          <div v-if="post">
            <post-modal :post.sync="post" v-on:show-posts="showposts"></post-modal>
          </div>
          <div v-if="posts">
            <post-requests :postsData="posts"></post-requests>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import postModal from './postModal'
  import postRequests from './postRequests'
  export default {
    components: {
      postModal,
      postRequests
    },
    data () {
      return {
        posts: this.getter('postsRequests'),
        post: false
      }
    },
    created () {
      if (this.getter('postsRequests') != null) {
        this.posts = this.getter('postsRequests')
        console.log('post modal')
        console.log(JSON.parse(localStorage.getItem('postsRequests')).length)
        console.log('post modal')
      }
    },
    destroyed () {
      this.posts = []
    },
    methods: {
      openModal () {
        this.post = true
      },
      showposts (posts) {
        console.log('show posts')
        this.posts = this.getter('postsRequests')
        console.log(JSON.parse(localStorage.getItem('postsRequests')).length)
        this.post = posts
      }
    }
  }
</script>
