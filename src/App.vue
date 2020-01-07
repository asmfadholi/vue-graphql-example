<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ApiExample from '@/services/ApiExample'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      try {
        const res = await ApiExample.listExample()
        console.log(res, 'dsadasd')
      } catch(err) {
        throw err
      }
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
