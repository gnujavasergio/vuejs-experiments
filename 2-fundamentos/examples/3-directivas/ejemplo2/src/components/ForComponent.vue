<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="skill in employee.skills" v-bind:key="skill">
        {{ skill.name }}
      </li>
    </ul>
    <a :href="url">{{name}}</a>
  </div>
</template>

<script>
import Employee from '../model/employee.model';
import Skill from '../model/skill.model';

export default {
  name: 'ForComponent',
  data() {
    return {
      title: 'Directiva v-for',
      employee: null,
    };
  },
  props: {
    name: String,
    url: String,
  },
  mounted: function() {
    this.employee = new Employee();
    let skillJava = new Skill("Java", "EXPERT", 10);
    let skillPhp = new Skill("PHP", "EXPERT", 8);
    let skillKotlin = new Skill("Kotlin", "ADVANCED", 2);
    let skillJavaScript = new Skill("JavaScript", "ADVANCED", 4);
    let skillTypeScript = new Skill("TypeScript", "ADVANCED", 2);
    let skillAndroid = new Skill("Android", "EXPERT", 6);

    this.employee = new Employee(1, "Sergio Antonio", "Ochoa Martinez", "Ing. de Sistemas", 1000);
    this.employee.skills[0] = skillJava;
    this.employee.skills[1] = skillJavaScript;
    this.employee.skills[2] = skillPhp;
    this.employee.skills[3] = skillKotlin;
    this.employee.skills[4] = skillTypeScript;
    this.employee.skills[5] = skillAndroid;
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
