<template>
  <div id="app">
    <b-navbar toggleable  variant="info">
      <b-link class="navbar-brand" to="/">
        <span>Blood Donor</span>
      </b-link>
      <b-nav is-nav-bar>
        <b-nav-item ><router-link to="/search" class="nav-link" activeClass="active" exact>Search</router-link></b-nav-item>
        <b-nav-item ><router-link to="/register" class="nav-link" activeClass="active" exact>Register</router-link></b-nav-item>
        <b-nav-item ><router-link to="/posts" class="nav-link" activeClass="active" exact>Post A Request</router-link></b-nav-item>
        <b-nav-item v-if = 'logged'><router-link to="/" class="nav-link" activeClass="active" @click.native="logout"exact>Logout</router-link></b-nav-item>
        <b-nav-item  v-if = '!logged'><router-link to="/login" class="login nav-link" activeClass="active" exact>Login</router-link></b-nav-item>
      </b-nav>
    </b-navbar>
    <div class="donor-app">
      <br>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { EventBus } from './components/eventBus'
  export default {
    name: 'app',
    data () {
      return {
        logged: false
      }
    },
    created () {
      EventBus.$on('loggedIn', (logs) => {
        console.log('ogged in')
        console.log(logs)
        this.logged = logs
        console.log('ogged in')
      })
    },
    methods: {
      logout () {
        console.log('logout')
        this.logged = false
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', "Droid Sans Mono Slashed", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
