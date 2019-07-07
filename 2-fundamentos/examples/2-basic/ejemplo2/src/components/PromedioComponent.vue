<template>
<div>
    <h1 v-show="show">{{ title }}</h1>  
    <p v-for="numero in numeros" v-bind:key="numero">
        {{ numero }}
    </p>    
    <p>Promedio {{ numeros | promedio }}</p>
</div>
</template>
<script>
export default {
    name: 'PromedioComponent',
    data() {
        return {
            title: 'Directiva v-for'
        }        
    },
    props: {
        show: Boolean,
        numeros : {
            type: Array,
            required: true
        }
    },
    filters: {
        promedio: function(numbers){
            let value = 0;
            for (let i = 0; i < numbers.length; i++) {
                const numero = numbers[i];
                value += numero;
            }
           return value/numbers.length;
        }
    }
}
</script>

