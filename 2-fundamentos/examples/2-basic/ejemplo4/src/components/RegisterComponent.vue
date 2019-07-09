<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <form action>
      <div>
        <label for="firstName">Nombres</label>
        <input type="text" v-model="firstName" id="firstName" />
      </div>
      <div>
        <label for="LastName">Apellidos</label>
        <input type="text" v-model="lastName" id="lastName" />
      </div>
      <div>
        <label for="email">Correo Electronico</label>
        <input type="text" v-model="email" id="email" />
      </div>
      <div>
        <label for="login">Login</label>
        <input type="text" v-model="login" id="login" />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="text" v-model="password" id="password" />
      </div>
    </form>
    <template v-if="fullName != ''">
      <div >
        <h2>Datos:</h2>
        <p>Nombre completo: {{ fullName }}</p>
        <p>Correo Electronico: {{email}}</p>
        <p>Login: {{login}}</p>
        <p>Contrasela: {{ password}}</p>
      </div>
    </template>    
    <br>  
    <a :href="url">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  props: {
    url: String,
    name: String
  },
  data() {
    return {
      title: "Computed Propertiess",
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: ""
    };
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`;
    } 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
