<template>
  <div>
    <div class="panel panel-primary">
      <h3 class="panel-heading">Posts</h3>
      <div class="panel-body">
        <div v-for="post in postsData">
          <div class="container-fluid ">
            <div class="row panel panel-success">
              <div class="col-md-12 panel-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-4">
                        <label>First Name</label>
                      </div>
                      <div class="col-sm-6">
                        {{post.firstName}}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Blood Group</label>
                      </div>
                      <div class="col-sm-6">
                        {{post.bloodGroup}}
                      </div>
                    </div>
                    <!--<div class="row">
                      <div class="col-sm-4">
                        <label>Date Of Birth</label>
                      </div>
                      <div class="col-sm-6">
                        {{post.dob}}
                      </div>
                    </div>-->
                    <div class="row">
                      <div class="col-sm-4">
                        <label>phone</label>
                      </div>
                      <div class="col-sm-6">
                        {{post.p_phone}}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Last Name</label>
                      </div>
                      <div class="col-sm-6">
                        {{post.lastName}}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>City</label>
                      </div>
                      <div class="col-sm-6">
                        {{post.city}}
                      </div>
                    </div>
                    <button class="btn btn-warning pull-right" @click="addComment(post.id)">Add   Comment</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">
                    <h4>Comments: </h4>
                  </div>
                </div>
                <div v-for = "comment in comments" >
                  <div class="panel "v-if='post.id === comment.id'>
                    <div class="row  panel-primary well-sm" v-for = "obj in comment.comments">
                      <div class="col-md-12 ">
                        {{obj}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="comm">
        <p>{{comm}}</p>
        <comment-modal :comm.sync="comm" :postId="post_id" v-on:show-comments="showComments"></comment-modal>
      </div>
    </div>
  </div>
</template>
<script>
  import commentModal from './commentModal'
  export default{
    components: {
      commentModal
    },
    props: ['postsData'],
    data () {
      return {
        comm: false,
        post_id: '',
        comments: []
      }
    },
    created () {
      console.log('cretaef in post requests')
      console.log(this.comments)
    },
    methods: {
      addComment: function (id) {
        this.post_id = id
        console.log('addComment')
        console.log(this.post_id)
        console.log('addComment')
        this.comm = true
      },
      showComments: function (comm) {
        console.log('show comments')
        this.comm = comm
        this.comments = JSON.parse(localStorage.getItem('comments'))
        console.log(this.comments)
      }
    }
  }
</script>
