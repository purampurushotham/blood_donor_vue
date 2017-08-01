<template>
  <div>
    <div class="panel panel-success">
      <h3 class="panel-heading">Blood Seekers</h3>
      <div class="panel-body">
        <div class="panel panel-primary">
          <h4 class="panel-heading"> Posts
          </h4>
          <div class="panel-body">
            <div class="list-group"  v-for="post in postsData">
              <div href="#" class="list-group-item">
                <h3 class="list-group-item-heading">Blood Seeker Info</h3>
                <button class="btn btn-warning glyphicon-align-right glyphicon-comment" @click="addComment(post.id)">Comment</button>
                <div  class="row list-group-item-text">
                  <h4 class="list-group-item-text"><span class="text-primary strong"> Blood Group : </span>{{post.bloodGroup}}</h4>
                  <h4 class="list-group-item-text"><span class="text-danger strong"> Phone: {{post.s_phone}}</span></h4>
                  <div v-if="!comm"v-for = "comment in comments" >
                    <div v-if='post.id === comment.id'>
                      <h4>Comments: </h4>
                      <h5  v-for = "c in comment.comments" class="list-group-item-text"><span>{{c}}</span></h5>
                    </div>
                  </div>
                  <!-- <p class="list-group-item-text"><span class="text-warning strong">Comment: {{post.comment}}</span></p>-->
                </div>
              </div>
              <div v-if="comm">
                <p>{{comm}}</p>
                <comment-modal :comm.sync="comm" :postId="post_id" v-on:show-comments="showComments"></comment-modal>
              </div>
            </div>
          </div>
        </div>
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
        comments: JSON.parse(localStorage.getItem('comments'))
      }
    },
    methods: {
      addComment: function (id) {
        console.log('add')
        console.log(this)
        console.log('add')
        this.post_id = id
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
