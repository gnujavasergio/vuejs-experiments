<template>
  <div class="hello">
    <h1 v-show="show">{{ title }}</h1>
    <template v-if="day=='Lunes' || day == '1'">
       <p>Lunes primer dia de la semana</p>        
    </template>
    <template v-else-if="day=='Martes'">
        <p>Martes segundo dia de la semana</p>        
    </template>
    <p v-else-if="day=='Miercoles'">
      Mircoles tercer dia de la semana
    </p>
    <p v-else>
      No es un dia valido
    </p>
  </div>
</template>

<script>
export default {
  name: 'DayComponent',  
  data() {
    return {
      title: 'Directivas de control de Flujo'
    }    
  },
  props: {
    show: Boolean,
    day: {
      type: String,
      required: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
