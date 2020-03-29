# Directivas
- Las Directivas son pequeños marcadores o atributos que podemos agregar a nuestros elementos HTML que nos sirven para aplicar transformaciones en esos mismos elementos.

## Directivas estructurales
### v-if y v-show
- `v-show`
    - No se puede utilizar con la etiqueta `<template></template>`
    - Utilizarlo cuando hay una interaccion con el usuario de ocultar y visualizar
- `v-if`
    - Se lo puede utitilizar en cualquier etiqueta
    - Si quieres utilizar `v-if` para varios elementos utilizar la etiqueta `<template></template>`
    - Cuando utilizas `v-if` el contenido lo desaparece, lo saca del DOM.
    - Utilizarlo cuando se tiene que ocultar o visualizar al principio de cargargar todo
- `v-if` y `v-else`
- [Ejemplo1](../examples/3-directivas/ejemplo1/README.md)

### v-for
- `v-for`
- [Ejemplo2](../examples/3-directivas/ejemplo1/README.md)

### swicth
- `v-if` `v-else-if` `v-else`
- [Ejemplo3](../examples/3-directivas/ejemplo3/README.md)