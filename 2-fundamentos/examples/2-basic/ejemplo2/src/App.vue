<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <day-component show="true" day="Lunes"/>
    <day-component show="false" day="Miercoles"/>
    <PromedioComponent show="true" :numeros="[2,3,4,5,6,7]"/>
  </div>
</template>

<script>
import DayComponent from './components/DayComponent.vue'
import PromedioComponent from './components/PromedioComponent'

export default {
  name: 'app',
  components: {
    DayComponent,
    PromedioComponent,
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
