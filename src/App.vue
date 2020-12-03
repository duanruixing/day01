<template>
  <div id="app">
    <!-- <my-addition></my-addition>
    <p>----------------</p>
    <my-subtraction></my-subtraction> -->
    <ul v-test>
      <li>
        <img src="./assets/图片06.jpg" v-lazy />
      </li>
      <li>
        <img src="./assets/图片06.jpg" v-lazy />
      </li>
      <li>
        <img src="./assets/图片06.jpg" v-lazy />
      </li>
    </ul>
  </div>
</template>

<script>
// import Addition from './components/Addition.vue'
// import Subtraction from './components/Subtraction.vue'
import lazy from './directives/lazy/index.js'
import test from './directives/test'

export default {
  // name: 'App',
  // components: {
  //   'my-addition': Addition,
  //   'my-subtraction': Subtraction
  // }
  directives: {
    lazy,
    test
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
