<template>
  <div class="modal-mask" @click="close" v-show="comm" transition="modal">
    <div class="modal-container"  @click.stop>

      <div class="modal-header">
        <h3>Add Comments</h3>
      </div>
      <div class="modal-body">
        <form id="myForm">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
              <div class="form-group row">
                <label for="comments" class="col-sm-3 col-form-label col-form-label-lg">Comment</label>
                <div class="col-md-12">
                  <textarea type="text" class="form-control form-control-lg" id="comment" placeholder="Add comments" v-model="comment"></textarea>
                </div>
              </div>
              <button class="btn btn-primary" @click="addComment">Save</button>
              <button class="btn btn-danger" @click="close">Cancel</button>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer text-right">
      </div>
    </div>
  </div>
</template>
<script>
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
      console.log('creayed')
      console.log(this)
    },
    methods: {
      addComment: function () {
        console.log('add')
        JSON.parse(localStorage.getItem('postsRequests')).map((eachObject, index) => {
          if (this.postId === eachObject.id) {
            console.log(this.postId, eachObject.id)
            localStorage.setItem('comments', JSON.stringify(this.comment))
            console.log(eachObject)
            console.log(commentList)
            console.log(commentList.length)
            if (!commentList[index]) {
              commentList.push({id: '', comments: []})
              console.log('each')
              console.log(commentList)
              console.log('each')
            }
            if (commentList[index].id === '') {
              commentList[index].id = this.postId
              commentList[index].comments.push(JSON.parse(localStorage.getItem('comments')))
            } else if (commentList[index].id === this.postId) {
              commentList[index].comments.push(JSON.parse(localStorage.getItem('comments')))
            }
            localStorage.setItem('comments', JSON.stringify(commentList))
          }
        })
        this.close()
      },
      close: function () {
        console.log('close')
        this.comm = false
        this.$emit('show-comments', this.comm)
      }
    }
  }
</script>
