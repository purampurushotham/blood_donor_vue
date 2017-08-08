<template>
  <div class="modal-mask" v-show='show' @click="close" transition="modal">
    <div class="modal-container"  @click.stop>
      <div class="modal-header">
        <h3 class="text-primary">Blood Donor Application Login</h3>
      </div>

      <div class="modal-body">
        <form>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
              <div class="form-group row" :class="{error: validation.hasError('user.userName')}">
                <label for="email" class="col-sm-3 col-form-label col-form-label-lg">Email</label>
                <div class="content col-sm-9">
                  <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" v-model="user.userName">
                  <span class="message text-danger">{{ validation.firstError('user.userName') }}</span>
                </div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('user.password')}">
                <label for="password" class="col-sm-3 col-form-label col-form-label-lg">Password</label>
                <div class="col-sm-9 content">
                  <input type="password" class="form-control form-control-lg" id="" placeholder="password" v-model="user.password">
                  <span class="message text-danger">{{ validation.firstError('user.password') }}</span>
                </div>
              </div>
            </div>
          </div>
          <button @click="loginUser" class="btn btn-success ">Login</button>
          <button  class="btn btn-warning " @click="close">close</button>
        </form>
        <div class="modal-footer text-right">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { EventBus } from './eventBus'
  import { Validator } from '../validator'
  import router from '../router'
  import usersData from '../data'
  export default {
    created () {
      console.log('login')
      console.log(this.userData)
    },
    data () {
      return {
        show: true,
        user: {
          userName: '',
          password: ''
        },
        userData: usersData.users
      }
    },
    validators: {
      'user.userName': function (value) {
        console.log('gdfhsagjsda')
        console.log(value)
        console.log('gdfhsagjsda')
        return Validator.value(value).required('user name is required').email('Not a valid email  ')
      },
      'user.password': function (value) {
        return Validator.value(value).required('password is required')
      }
    },
    methods: {
      loginUser: function () {
        this.$validate().then(success => {
          if (success) {
            if (this.user.userName && this.user.password) {
              this.userData.map((object, key) => {
                console.log('each object')
                console.log(object.userName, object.password)
                console.log(this.user.userName, this.user.password)
                if (object.userName === this.user.userName && object.password === this.user.password) {
                  EventBus.$emit('loggedIn', true)
                  router.push('/register')
                }
              })
            }
          }
        })
      },
      close: function () {
        router.push('/')
        this.show = false
      }
    }
  }
</script>
