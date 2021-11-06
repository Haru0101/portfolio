<template>
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
  <Home/>
</template>

<script lang="ts">
import Vue from 'vue'
const VueParticles = require('vue-particles');

export default Vue.extend({
  setup() {
    
  },
})

</script>