<template>
  <div>
    <h1>{{ msg }}</h1>
   <p>{{ 1 * 3}}</p>
   <p>{{ 'Hola' + 'Mundo'}}</p>
   <p>{{ person.firstName }}</p>
   <p>{{ person.firstName.toUpperCase() }}</p>
   <p>{{ JSON.stringify(person)}}</p>
   <p>{{ true ? 'true': 'false' }}</p>
  </div>
</template>

<script>
export default {
  name: 'ExpresionComponent',
  data() {
    return {
      person: {
        firstName: 'Sergio',
        lastName: 'Ochoa'
      },
    }
  },
  props: {
    msg: String,    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
