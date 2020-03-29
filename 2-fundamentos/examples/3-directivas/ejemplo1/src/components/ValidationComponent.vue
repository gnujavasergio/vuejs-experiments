<template >
  <div class="hello">
    <h1>{{ title }}</h1>    
    <h2>v-if</h2>
    <template v-if="role.status">
      <p>{{ role.name }}</p>
    </template>

    <h2>v-show</h2>
    <p v-show="role.status">{{ role.name }}</p>

    <h2>v-if else</h2>
    <template v-if="skill.experience >= 6">
      <p>Desarrollador Senior</p>
    </template>
    <template v-else>
        <p>Desarrollador Junior</p>
    </template>

    <template v-if="employee.skills.length > 0">
      <h3>Habilidades</h3>
      <p>{{ employee.firstName + ' ' + employee.lastName}}</p>
      <p>{{ employee.skills[0].name }}</p>
      <p>{{ employee.skills[1].name }}</p>
    </template>
    <template v-else>
      <p>Todabia no tiene habilidades</p>
    </template>

    <footer>
      <a :href="url">{{ name }}</a>
    </footer>
  </div>
</template>

<script>
import Role from "../model/role.model";
import Employee from "../model/employee.model";
import Skill from "../model/skill.model";

export default {
  name: "ValidationComponent",
  data() {
    return {
      title: "Componente de validación",
      employee: null,
      role: null,
      skill: null
    };
  },
  props: {
    name: String,
    url: String
  },
  mounted: function() {
    this.role = new Role("Admin", true);   
    this.skill = new Skill("Java", "ADVANCED", 8);
    let skillTypeScript = new Skill("TypeScript", "ADVANCED", 2);

    this.employee = new Employee(1, "Sergio Antonio", "Ochoa Martinez", "Ing. de Sistemas", 1000);
    this.employee.skills[0] = this.skill;
    this.employee.skills[1] = skillTypeScript;

    this.employee.sk
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
