<template>
  <div id="app">
    <vue-particles
     color="#e0bcb0"
              :particleOpacity="0.7"
              linesColor="#d2dae6"
              :particlesNumber="4"
              shapeType="circle"
              :particleSize="100"
              :linesWidth="10"
              :lineLinked="false"
              :lineOpacity="0.4"
              :linesDistance="150"
              :moveSpeed="8"
              retina_detect="true"></vue-particles>
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
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    padding: 120px 0px 120px 120px;
    margin: 0px;
    // background-color: $mc01;


    @include sp {
      flex-direction: column;
      padding: 20px 20px 0px 20px;
    }
}

#particles-js {
    background-image: url("./assets/img/bg.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999;
}
</style>
