<template>
  <div class="modal-mask" @click="close" v-show="comm" transition="modal">
    <div class="modal-container"  @click.stop>
      <div class="modal-header">
        <h3>Add Comments</h3>
      </div>
      <div class="modal-body">
        <form id="myForm" @submit.prevent>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
              <div class="form-group row"  :class="{error: validation.hasError('comment')}">
                <label for="comments" class="col-sm-3 col-form-label col-form-label-lg">Comment</label>
                <div class="col-md-12">
                  <textarea type="text" class="form-control form-control-lg" id="comment" placeholder="Add comments" v-model="comment"></textarea>
                  <span class="message text-danger">{{ validation.firstError('comment') }}</span>
                </div>
              </div>
              <button class="btn btn-primary" @click="addComment">Save</button>
              <button class="btn btn-danger" @click="close">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { Validator } from '../validator'
  let commentList = [{
    id: '',
    comments: []
  }]
  export default {
    props: ['comm', 'postId'],
    data () {
      return {
        comment: ''
      }
    },
    created () {
      console.log('creayed comment modal')
    },
    methods: {
      addComment: function () {
        console.log('add comment')
        this.$validate().then(success => {
          if (success) {
            this.getter('postsRequests').map((eachObject, index) => {
              if (this.postId === eachObject.id) {
                this.setter('comments', this.comment)
                // localStorage.setItem('comments', JSON.stringify(this.comment))
                console.log('add comments in comment modal')
                console.log(commentList.length, index)
                if (!commentList[index]) {
                  commentList.push({id: '', comments: []})
                  console.log('each')
                  console.log(commentList)
                  console.log('each')
                }
                if (commentList[index].id === '') {
                  commentList[index].id = this.postId
                  console.log('setting comment list array id is empty')
                  commentList[index].comments.push(this.getter('comments'))
                } else if (commentList[index].id === this.postId) {
                  console.log('setting comment list array id isnoot empty')
                  commentList[index].comments.push(this.getter('comments'))
                }
                console.log(commentList[index].id)
                this.setter('comments', commentList)
              }
            })
            this.close()
          }
        })
      },
      close: function () {
        console.log('close')
        this.comm = false
        this.$emit('show-comments', this.comm)
      }
    },
    validators: {
      'comment': function (value) {
        return Validator.value(value).required('comment is required')
      }
    }
  }
</script>
