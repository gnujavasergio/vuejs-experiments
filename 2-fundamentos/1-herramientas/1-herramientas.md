
# Instalar

## Instalar nodejs
- [https://nodejs.org/en/](https://nodejs.org/en/)

- Verificar si se instalo bien
```
node -v
npm -v 
```

## vue-devtools
- Muy util para desarrollar en vue.
- [https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)

## vue-cli legacy
- Instalar 
```bash
npm install -g @vue/cli-init

# Crear un proyecto 
vue init webpack my-project
vue init webpack-simple my-project

# Ejecutar
cd ejemplo1
npm install
npm run dev
```
- [Ejemplo1](../examples/1-herramientas/ejemplo1/README.md)

## vue-cli
- [https://cli.vuejs.org/guide/installation.html](https://cli.vuejs.org/guide/installation.html)

- vue 1.x y vue 2.x
```bash
npm install -g vue-cli
vue --version
```
- vue 3.x

```bash
# desintalar vue-cli solo para vue1.x y vue 2.x 
npm uninstall vue-cli -g
# o
yarn global remove vue-cli

# Instalar vue 3.x
npm install -g @vue/cli
# OR
yarn global add @vue/cli
# Check Vue
vue --version

# Crear un proyecto
vue create hello-world

# Crear un proyecto con interfaz web
vue ui

# Ejecutar
npm run serve
```
- [Ejemplo2](../examples/1-herramientas/ejemplo2/README.md)

## Webpack
- **entry:** 
    - Se declara aqui el archivo de entrada
- **output** 
    - Genera el archivo de salida
    - Utiliza el modulo path de node para saber donde exportara.
- **resolve**
    - Nos indica los archivos que tiene que compilar
- **devServer**
    -  Nos permite servir nuestra aplicacion en un servidor basado en webpack
    - **noinfo**
        - Sirve para mostrar mas informacion de lo que esta 
- **performance**
    - Nos muestra pistas para programar mejor.
- **devtool**
    - Nos indica para poder debuguerlo

## Babel
- [https://babeljs.io/](https://babeljs.io/)
- Babel saca cada año una nueva versión
- Babel es un transpilador de codigo que nos permita utilizar todas las nuevas funcionalidades de ECMAScript para luego convertirlo a javascript que entiendan todos los navegadores.

## ESLint
- Nos sirve para definir el estilo de codigo que utilizaremos.
- Todo se maneja a traves de reglas.
- Integraciones de ESLint para editores de codigo e IDEs
    - [https://eslint.org/docs/user-guide/integrations](https://eslint.org/docs/user-guide/integrations)
- [https://eslint.org](https://eslint.org)
- [https://standardjs.com/](https://standardjs.com/)
    - [https://github.com/standard/eslint-config-standard](https://github.com/standard/eslint-config-standard)

### ESLint en vue legacy 
```bash
# Instalar eslint solo valido para vue-legacy
npm install eslint --save-dev
# o
npm i -D eslint

# Instalar standardjs
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

# Instalar el eslint-loader para webpack
npm i -D eslint-loader
npm i -D eslint-plugin-html
```

## Configurar 
- Crear el archivo .eslintrc
```json
{
    "extends": "standard"
}
```

## CSS

### Stylus
- [http://stylus-lang.com/](http://stylus-lang.com/)
- Conversor de css a stylus [http://beautifytools.com/css-to-stylus-converter.php](http://beautifytools.com/css-to-stylus-converter.php)
```
npm install --save-dev stylus stylus-loader
```
- **Nota:** stylus-loader es para que reconozca webpack la libreria

### Sass
- [https://sass-lang.com/](https://sass-lang.com/)
## Framework CSS
- [https://bulma.io/](https://bulma.io/)
```bash
# Metodo 1
npm install --save bulma
# Metodo 2
npm i -S bulma
```


## HTML
### pug
- [https://pugjs.org/api/getting-started.html](https://pugjs.org/api/getting-started.html)
- Conversor de html a pug(antes jade)
    - [https://html2jade.org/](https://html2jade.org/)
```bash
# Metodo largo
npm install --save-dev pug pug-loader
# Metodo corto
npm i -D pug pug-loader
```





