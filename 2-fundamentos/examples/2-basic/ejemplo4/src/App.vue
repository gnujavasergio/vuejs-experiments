<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <register-component url="http://www.openkm.com" name="OpenKM"/>
  </div>
</template>

<script>
import RegisterComponent from './components/RegisterComponent.vue'

export default {
  name: 'app',
  components: {
    RegisterComponent
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
