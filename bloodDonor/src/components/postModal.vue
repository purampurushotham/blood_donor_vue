<template>
  <div class="modal-mask" @click="close" v-show="post" transition="modal">
    <div class="modal-container"  @click.stop>
      <div class="modal-header">
        <h3>Seeker Contact Information</h3>
      </div>

      <div class="modal-body">
        <form id="myForm" @submit = postARequest()>
          <div class="row">
            <div class="col-md-12 ">
              <div class="form-group row" :class="{error: validation.hasError('postRequest.firstName')}">
                <label for="firstName" class="col-md-4 col-form-label">First Name</label>
                <div class="col-md-6 content">
                  <input type="text" class="form-control form-control-lg" id="firstName" placeholder="First Name" v-model="postRequest.firstName">
                  <span class="message text-danger">{{ validation.firstError('postRequest.firstName') }}</span>
                </div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('postRequest.lastName')}">
                <label for="lastName" class="col-md-4 col-form-label col-form-label-lg">Last Name</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="lastName" placeholder="lastName" v-model="postRequest.lastName">
                  <span class="message text-danger">{{ validation.firstError('postRequest.lastName') }}</span>
                </div>
              </div>
              <!-- <div class="form-group row">
                 <label for="dob" class="col-md-4 col-form-label col-form-label-lg">Date Of Birth</label>
                 <div class="col-md-6">
                   <input type="text" class="form-control form-control-lg" id="dob" placeholder="Date Of Birth" v-model="postRequest.dob">
                 </div>
               </div> -->
              <div class="form-group row" :class="{error: validation.hasError('postRequest.bloodGroup')}">
                <label for="bloodGroup" class="col-md-4 col-form-label col-form-label-lg">Blood Group</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="bloodGroup" placeholder="Blood Group" v-model="postRequest.bloodGroup">
                  <span class="message text-danger">{{ validation.firstError('postRequest.bloodGroup') }}</span>
                </div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('postRequest.city')}">
                <label for="city" class="col-md-4 col-form-label col-form-label-lg">City</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="city" placeholder="City" v-model="postRequest.city">
                  <span class="message text-danger">{{ validation.firstError('postRequest.city') }}</span>
                </div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('postRequest.phone')}">
                <label for="P_Phone" class="col-md-4 col-form-label col-form-label-lg">Phone</label>
                <div class="col-md-6">
                  <input type="text" class="form-control form-control-lg" id="p_phone" placeholder="phone number" v-model="postRequest.phone">
                  <span class="message text-danger">{{ validation.firstError('postRequest.phone') }}</span>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-success ">Submit</button>
          <button  class="btn btn-warning " @click="close">close</button>
        </form>
        <div class="modal-footer text-right">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Validator } from '../validator'
  let postsList = []
  export default {
    props: ['post'],
    data () {
      return {
        postRequest: {
          id: Date.now(),
          firstName: '',
          lastName: '',
          bloodGroup: '',
          city: '',
          dob: '',
          phone: ''
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
    validators: {
      'postRequest.firstName': function (value) {
        console.log(Validator.value(value))
        return Validator.value(value).required('First Name is required')
      },
      'postRequest.lastName': function (value) {
        return Validator.value(value).required('Last Name is required')
      },
      'postRequest.bloodGroup': function (value) {
        return Validator.value(value).required('Blood Group is required')
      },
      'postRequest.city': function (value) {
        return Validator.value(value).required('City is required')
      },
      'postRequest.phone': function (value) {
        return Validator.value(value).required('phone number is required')
      }
    },
    methods: {
      close () {
        this.post = false
        this.$emit('show-posts', this.post)
      },
      postARequest () {
        console.log('this.post A request')
        console.log(this.postRequest)
        this.$validate().then(success => {
          if (success) {
            this.setter('postsRequests', this.postRequest)
            postsList.push(this.getter('postsRequests'))
            this.setter('postsRequests', postsList)
            console.log(this.getter('postsRequests'))
            this.close()
          }
        })
      }
    }
  }
</script>


