## Expresiones 
- Nos permite mostrar valores del vue model.
- Se puede realizar operaciones
- Utilizar funciones 
- Tambien podemos utilizar una expresion ternaria.
- [Ejemplo1](../examples/2-basic/ejemplo1/README.md)

## Directivas de control de flujo
- Las Directivas son pequeños marcadores o atributos que podemos agregar a nuestros elementos HTML que nos sirven para aplicar transformaciones en esos mismos elementos.
- `v-show`
    - No se puede utilizar con la etiqueta `<template></template>`
    - Utilizarlo cuando hay una interaccion con el usuario de ocultar y visualizar
- `v-if` 
    - Se lo puede utitilizar en cualquier etiqueta
    - Si quieres utilizar `v-if` para varios elementos utilizar la etiqueta `<template></template>`
    - Cuando utilizas `v-if` el contenido lo desaparece, lo saca del DOM.
    - Utilizarlo cuando se tiene que ocultar o visualizar al principio de cargargar todo
- `v-else-if`
- `v-else`
- `v-for`
- [Ejemplo2](../examples/2-basic/ejemplo2/README.md)