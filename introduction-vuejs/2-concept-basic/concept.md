## Condicionales

- `v-if` 
    - Se lo puede utitilizar en cualquier etiqueta
    - Si quieres utilizar `v-if` para varios elementos utilizar la etiqueta `<template></template>`
    - Cuando utilizas `v-if` el contenido lo desaparece, lo saca del DOM.
    - Utilizarlo cuando se tiene que ocultar o visualizar al principio de cargargar todo
- `v-show`
    - No se puede utilizar con la etiqueta `<template></template>`
    - Utilizarlo cuando hay una interaccion con el usuario de ocultar y visualizar
- [Ejemplo2](../examples/2-concept-basic/ejemplo2/README.md)

## Filtros
- Nos sirve para poder añadir un filtro(Cambiarlo de alguna forma) al valor del modelo que se dio en parametro data 
- Utilizamos `|` para añadirlos los filtros que realizamos
- Se añade el parametro **filters** en el objeto vue
- [Ejemplo3](../examples/2-concept-basic/ejemplo3/README.md)

## Manejo de eventos
- `v-on:click`
- `@click`
- **methods** es el parametro para añadir eventos al objeto Vue
- [Ejemplo4](../examples/2-concept-basic/ejemplo4/README.md)

## Formularios
- `v-model`: para relacionar un input con el modelo de vue
- `v-on:submit.prevent`: prevent sirve para que hacer un submit no realize un refresh en el formulario
- [Ejemplo5](../examples/2-concept-basic/ejemplo5/README.md)

## Ciclos repetitivos
- `v-for`: Para poder interar una lista
- Utilizar la etiqueta template
- [Ejemplo6](../examples/2-concept-basic/ejemplo6/README.md)

## Componentes
- [Ejemplo7](../examples/2-concept-basic/ejemplo7/README.md)