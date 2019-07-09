<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <login-component url="http://www.openkm.com" name="OpenKM"/>
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue'

export default {
  name: 'app',
  components: {
    LoginComponent
  }
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
