<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <first-component msg="Hola Vue.js"/>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'

export default {
  name: 'app',
  components: {
    FirstComponent
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
