<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <for-component name="OpenKM" url="http://www.openkm.com"/>
  </div>
</template>

<script>
import ForComponent from './components/ForComponent.vue'

export default {
  name: 'app',
  components: {
    ForComponent
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
