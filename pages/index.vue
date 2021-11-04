<template>
  <Home/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
// カラー変数
$mc01: #e9ebf2;
$mc02: #d2dae6;
$mc03: #1f2e40;
$mc04: #526a81;

$sp: 768px; // スマホ
$pc: 769px; // PC

@mixin pc {
    @media (min-width: ($pc)) {
        @content;
    }
}

@mixin sp {
    @media (max-width: ($sp)) {
        @content;
    }
}

body {
    box-sizing: border-box;
}

</style>