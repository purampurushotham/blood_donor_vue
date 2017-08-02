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
              <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-lg" id="email" placeholder="Blood Group" v-model="user.userName">
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label col-form-label-lg">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control form-control-lg" id="" placeholder="password" v-model="user.password">
                </div>
              </div>
            </div>
          </div>
          <button @click="loginUser" class="btn btn-success ">Submit</button>
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
    methods: {
      loginUser: function () {
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
      },
      close: function () {
        router.push('/')
        this.show = false
      }
    }

  }
</script>
