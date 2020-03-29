<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <day-component name="OpenKM" url="http://www.openkm.com" />
  </div>
</template>

<script>
import DayComponent from './components/DayComponent.vue'

export default {
  name: 'app',
  components: {
    DayComponent
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
