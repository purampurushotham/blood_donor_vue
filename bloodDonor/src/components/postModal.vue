<template>
  <div class="modal-mask" @click="close" v-show="post" transition="modal">
    <div class="modal-container"  @click.stop>
      <div class="modal-header">
        <h3>Seeker Contact Information</h3>
      </div>

      <div class="modal-body">
        <form id="myForm">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
              <div class="form-group row">
                <label for="bloodGroup" class="col-sm-2 col-form-label col-form-label-lg">Blood Group</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="bloodGroup" placeholder="Blood Group" v-model="postRequest.bloodGroup">
                </div>
              </div>
              <div class="form-group row">
                <label for="Phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="s_phone" placeholder="phone number" v-model="postRequest.s_phone">
                </div>
              </div>
              <div class="form-group row">
                <label for="comment" class="col-sm-2 col-form-label col-form-label-lg">Comment</label>
                <div class="col-sm-10">
                  <textarea class="form-control form-control-lg" id="comment" placeholder="add comment here" v-model="postRequest.comment"></textarea>
                </div>
              </div>
            </div>
          </div>
          <button @click="postARequest" class="btn btn-success ">Submit</button>
          <button  class="btn btn-warning " @click="close">close</button>
        </form>
        <div class="modal-footer text-right">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let postsList = []
  export default {
    props: ['post'],
    data () {
      return {
        postRequest: {
          id: '',
          bloodGroup: '',
          s_phone: ''
        }
      }
    },
    created () {
      console.log(this)
    },
    methods: {
      close () {
        this.post = false
        this.$emit('show-posts', this.post)
      },
      postARequest () {
        localStorage.counter = Math.random()
        this.postRequest.id = localStorage.counter
        localStorage.setItem('postsRequests', JSON.stringify(this.postRequest))
        postsList.push(JSON.parse(localStorage.getItem('postsRequests')))
        localStorage.setItem('postsRequests', JSON.stringify(postsList))
        /*

         console.log(localStorage.hasOwnProperty('postsRequests'))

         localStorage.setItem('postsRequests', JSON.stringify(this.postRequest))
         postsList.push(JSON.parse(localStorage.getItem('postsRequests')))
         localStorage.setItem('postsRequests', JSON.stringify(postsList))
         console.log('m,gjkdgsjkhgjkd')
         console.log(localStorage.postsRequests)
         console.log('m,gjkdgsjkhgjkd')
         */
        this.close()
      }
    }
  }
</script>


