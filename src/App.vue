<template>
  <div id="app">
    <!-- <Top></Top>
    <Works></Works>
    <About></About>
    <Links></Links>
    <Menu></Menu> -->
    <router-view></router-view>
    <Menu></Menu>
  </div>
</template>
<script>
  import Menu from './components/Menu';
  export default {
    name: 'App',
    components: {
      Menu,
    },
    mounted() {
      document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#app').style.height = `${window.innerHeight}px`
      })

    },
  }

</script>
<style lang="scss">
#app {
  display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    overflow: hidden;
    margin: 0px;

    @include sp {
      flex-direction: column;
    }
}
</style>
