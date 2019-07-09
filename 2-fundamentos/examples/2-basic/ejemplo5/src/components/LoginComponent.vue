<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <form action="" method="post">
      <div>
        <label for="login">Login</label>
        <input type="text" v-model="login" id="login">
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="text" v-model="password" id="password">
      </div>      
      <button>Ingresar</button>
    </form>
    <p v-if="show">
        <b>Mostrar:</b> {{ login + " " + password }}
    </p>
    <a :href="url">{{ name}}</a> 
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',  
  props: {
    url: String,
    name: String
  },
  data(){
    return {
      title: 'Watchers',
      login: '',
      password: '',
      show: false
    }
  },
  watch : {
    password (newVal, oldVal) {    
      if(newVal.length >= 6){
        this.show = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
