<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ExpresionComponent msg="Expresiones o String interpolation"/>
  </div>
</template>

<script>
import ExpresionComponent from './components/ExpresionComponent.vue'

export default {
  name: 'app',
  components: {
    ExpresionComponent
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
