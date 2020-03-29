## String interpolation o Text Interpolation 
- Nos permite mostrar valores del vue model.
- Llamada tambien sintaxis Mustache
- Se puede realizar operaciones 
- Utilizar funciones 
- Tambien podemos utilizar una expresion ternaria.
- [Ejemplo1](../examples/2-basic/ejemplo1/README.md)

## Data Binding(Two Way Data Binding in Angular)
- **Data Binding** implica que podamos enlazar nuestra vista a nuestro código y desde nuestro código a nuestra vista en forma bidireccional.
- `v-model`
    - Se utiliza en las etiquetas input para manejo de formularios
- `v-bind` o `:`(Short cut o atajo)
    - Ejemplo `v-bind:href` o `:href`
- [Ejemplo3](../examples/2-basic/ejemplo3/README.md)

## Computed Properties
- Computed son propiedades dinamicas que se generar a traves de las otras propiedades declaradas.
- Las propiedades de computed son funciones
- En la funcion computed las otras propiedades se tienen que llamar con el keyword `this`
```javascript
computed:{
    fullName () {
        return this.firstName + ' ' + this.lastName
    }
}
```
- [Ejemplo4](../examples/2-basic/ejemplo4/README.md)

## Watchers
- Los wahtchers solo se usan en una propiedad
- No se las puede utilizar para en expresiones
- **Uso** se podria utilizar para hacer una llamada a un servicio y hacer una validación del data.
```javascript
watch: {
    fistName (newVal, oldVal) {
        console.log(newVal + ' ' + oldVal);        
    }
}
```
- [Ejemplo5](../examples/2-basic/ejemplo5/README.md)