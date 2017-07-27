<template>
  <div id="app">
    <b-navbar toggleable  variant="info">
      <b-link class="navbar-brand" to="/">
        <span>Blood Donor</span>
      </b-link>
      <b-nav is-nav-bar>
        <b-nav-item><router-link to="/search" class="nav-link" activeClass="active" exact>Search</router-link></b-nav-item>
        <b-nav-item><router-link to="/register" class="nav-link" activeClass="active" exact>Register</router-link></b-nav-item>
      </b-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
