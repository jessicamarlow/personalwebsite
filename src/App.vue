<template>
  <div>
    <div class="wrap">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <router-link class="navbar-brand" to="/">
              Home
            </router-link>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/projects">Adventure</router-link>
            </li>
            <li>
              <router-link to="/fun">Fun</router-link>
            </li>
            <li>
              <a target="_blank" href="static/Jessica_Marlow_Resume.pdf">Resume</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <div class="container text-center">
        <a href="https://github.com/jessicamarlow" target="_blank"><i class="fa fa-github fa-3x"></i></a>
        <p>&copy; Jessica Marlow, {{date}}. All
          rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
<style>

</style>

<script>

export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}



</script>
