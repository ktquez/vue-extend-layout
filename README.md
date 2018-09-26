# vue-extend-layout 2.0
A simple extend the default layout or create custom layouts for your SPA Vue.js, using dynamic import component with **support vue-cli v3**  

> For vue-extend-layout version 1.* you can access [this link](https://github.com/ktquez/vue-extend-layout/tree/v1.1.3)

## Install

**NPM**
```shell
npm install vue-extend-layout --save
```

**Yarn**
```shell
yarn add vue-extend-layout
```

## Create and Using layouts

First of all:
- Create a directory called `layouts/` inside the main directory of your application, usually it will be from `src/layouts/`
- Inside the layout directory create a layout called `default.vue`

For example:  
`src/layouts/default.vue`
```vue
<template>
  <div>
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
    name: 'defaultLayout'     // you can enter any name (optional)
  }
</script>

<style>
/* your style */
</style>
```

#### In your `App.vue`

```vue
<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'

export default {
  name: 'App',
  components: { VueExtendLayouts }
}
</script>
```

## Defining the directory path of layouts

Prop       | Data Type  | required  | Description
---------- | ---------- | --------- | -----------
`path`     | String     | false     | The layout directory path without a slash at the end

```vue
<template>
  <div id="app">
    <vue-extend-layouts path="views/wrappers" />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'

export default {
  name: 'App',
  components: { VueExtendLayouts }
}
</script>
```

In this example the layouts will be in `src/views/wrappers`

## Custom extend layout
To create a layout you just need to create a component within the layouts directory and name that component.  

For example:
`src/layouts/auth.vue`

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
    name: 'MyNameComponent'   // you can enter any name (optional)
  }
</script>

<style>
/* your style */
</style>
```

And to extend this layout in any the desired route, simply include the property `layout: auth` in meta object of the route.
```javascript
{
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/Login'),
  meta: {
    layout: 'auth'
  }
}
```

# Create a error layout (Optional)

For example:
`src/layouts/error.vue`

```vue
<template>
  <div>
    <h1>PAGE NOT FOUND</h1>
  </div>
</template>

<script>
  export default {
    name: 'error'       // you can enter any name (optional)
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

# Contributing

- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found.
- Fork repository, make changes, add your name and link in the contributors session readme.md
- Send a pull request

If you want a faster communication, check out my blog [ktquez.com](https://ktquez.com) or find me on Twitter [@ktquez](https://twitter.com/ktquez)

Thank you for using!