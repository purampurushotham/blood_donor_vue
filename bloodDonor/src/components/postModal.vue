<template>
  <div class="modal-mask" @click="close" v-show="post" transition="modal">
    <div class="modal-container"  @click.stop>
      <div class="modal-header">
        <h3>Seeker Contact Information</h3>
      </div>

      <div class="modal-body">
        <form id="myForm" @submit.prevent>
          <div class="row">
            <div class="col-md-12 ">
              <div class="form-group row">
                <label for="firstName" class="col-md-4 col-form-label">First Name</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="firstName" placeholder="First Name" v-model="postRequest.firstName">
                </div>
              </div>
              <div class="form-group row">
                <label for="lastName" class="col-md-4 col-form-label col-form-label-lg">Last Name</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="lastName" placeholder="lastName" v-model="postRequest.lastName">
                </div>
              </div>
              <div class="form-group row">
                <label for="dob" class="col-md-4 col-form-label col-form-label-lg">Date Of Birth</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="dob" placeholder="Date Of Birth" v-model="postRequest.dob">
                </div>
              </div>
              <div class="form-group row">
                <label for="bloodGroup" class="col-md-4 col-form-label col-form-label-lg">Blood Group</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="bloodGroup" placeholder="Blood Group" v-model="postRequest.bloodGroup">
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-md-4 col-form-label col-form-label-lg">City</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="city" placeholder="City" v-model="postRequest.city">
                </div>
              </div>
              <div class="form-group row">
                <label for="P_Phone" class="col-md-4 col-form-label col-form-label-lg">Phone</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="p_phone" placeholder="phone number" v-model="postRequest.p_phone">
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
          id: Date.now(),
          firstName: '',
          lastName: '',
          occupation: '',
          bloodGroup: '',
          city: '',
          dob: '',
          martial_status: '',
          p_phone: '',
          p_email: '',
          e_email: '',
          e_phone: ''
        }
      }
    },
    created () {
      if (this.getter('postsRequests') != null) {
        postsList = postsList.concat(this.getter('postsRequests'))
      }
    },
    destroyed () {
      postsList = []
    },
    methods: {
      close () {
        this.post = false
        this.$emit('show-posts', this.post)
      },
      postARequest () {
        console.log('this.post A request')
        console.log(this.postRequest)
        this.setter('postsRequests', this.postRequest)
        postsList.push(this.getter('postsRequests'))
        this.setter('postsRequests', postsList)
        console.log(this.getter('postsRequests'))
        this.close()
      }
    }
  }
</script>


