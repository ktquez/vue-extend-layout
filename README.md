# vue-extend-layout
Extend the default layout or create custom layouts for your SPA Vue.js

## Template vue-cli

If you are going to use layouts in your application, you can choose to use a pre-configured template using vue-cli.
- [ktquez/layout](https://github.com/ktquez/layout): A full-featured Webpack + Extend layout + vue-loader setup with hot reload, linting, testing & css extraction
- [ktquez/layout-simple](https://github.com/ktquez/layout-simple): A simple Webpack + Extend layout + + vue-loader setup for quick prototyping

## Usage

**NPM**
```shell
npm install vue-extend-layout --save
```

In your `src/main.js`:
```javascript
import Vue from 'vue'
import router from './router'
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout // Add methods to extend layouts
})

```

**Attention: From now on, `App.vue` will no longer be your primary file**

## Create and Using layouts
You need to create the `src/layouts/default.vue` layout because it will be the main file of your application.
- Create a directory called `layouts/` inside the main directory of your application, usually it will be from `src/layouts/`
- Inside the layout directory create a layout called `default.vue`  

For example:

```vue
<template>
  <div id="app">
    <header />
    <sidebar />
    <div class="container">
      <router-view />
    </div>
    <footer />
  </div>
</template>

<script>
  export default {
    name: 'default' // id of the layout (required)
  }
</script>

<style>
/* your style */
</style>
```

**Note: The name you give to the layout component (`name: 'default'`) will be the key to selecting the layouts in your application.**

> At this point, you can check the default layout working, just run the `npm run dev` command and all the routes (pages) will load inside the default layout.

--

# Custom extend layout
To create a layout you just need to create a component within the layouts directory and name that component.  

For example:
`layouts/MyCustomLayoutLogin.vue`

```vue
<template>
  <div>
    <header-login />
    <div class="container-login">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyCustomLayoutLogin' // id of the layout
  }
</script>

<style>
/* your style */
</style>
```

And to extend this layout in any the desired route, simply include the property `layout: MyCustomLayoutLogin` in meta object of the route.
```javascript
{
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/Login'),
  meta: {
    layout: 'MyCustomLayoutLogin' // name of the layout
  }
}
```

**Attention: The value of the `layout` property must be the same as the name of the `MyCustomLayoutLogin` component.**

# Create a error layout (Optional)
For example:
`layouts/error.vue`

```vue
<template>
  <div>
    <h1>PAGE NOT FOUND</h1>
    <router-view /> <!-- Optional -->
  </div>
</template>

<script>
  export default {
    name: 'error' // id of the layout
  }
</script>

<style>
/* your style */
</style>
```

And in the route add in the 'meta' object the 'layout' property with the name of the layout component, in this case 'error'.
```javascript
{
  path: '*',
  name: 'Error',
  // component: () => import('@/pages/Error') (Optional)
  meta: {
    layout: 'error' // name of the layout
  }
}
```

# Webpack
In your webpack file check for an alias (@) to the main directory of your application, typically.
```javascript
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
  }
}
```

*The 'vue-extend-layout' uses this alias (@), if it does not have or the main path is another, add that alias (@) to the path that contains the 'layouts' directory you created.*

# Articles and Screencast

- In development

# Contributing

- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found.
- Fork repository, make changes, add your name and link in the contributors session readme.md
- Send a pull request

If you want a faster communication, check out my blog [ktquez.com](https://ktquez.com) or find me on Twitter [@ktquez](https://twitter.com/ktquez)

Thank you for using!
