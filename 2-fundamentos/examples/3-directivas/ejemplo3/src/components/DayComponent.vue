<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <form id="formDay">
      <label for="day">Introduzca un dia de la semana</label>
      <input type="number" v-model="day" id="day">
    </form>
    <template v-if="day==1">
      <p>Lunes</p>
    </template>
    <template v-else-if="day==2">
      <p>Martes</p>
    </template>
    <template v-else-if="day==3">
      <p>Miercoles</p>
    </template>
    <template v-else-if="day==4">
      <p>Jueves</p>
    </template>
    <template v-else-if="day==5">
      <p>Viernes</p>
    </template>
    <template v-else-if="day==6">
      <p>Sabado</p>
    </template>
    <template v-if="day==7">
      <p>Domingo</p>
    </template>
    <template v-else >
      <p>No es un dia de la semana</p>
    </template>
    <a :href="url">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: 'DayComponent',
  data() {
    return {
      title: 'v-if v-else-if v-else',
      day: 1,
    };
  },
  props: {
    name: String,
    url: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
