<template>
  <div>
    <h3 class="subtitle">{{title}}</h3>
  </div>
</template>

<script>
  export default{
    name:'HolaMundo',
    data(){
      return{
        title:'Hola Mundo desde un componente .vue 🐱'
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3{
      color:tomato;
  }
</style>