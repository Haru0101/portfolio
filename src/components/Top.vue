<template>
  <section class="top">
    <div class="typoWrap">
      <h1 id="typing"></h1>
      <p id="sub">I'm a <span>front-end engineer.</span></p>
    </div>
  </section>
</template>
<script>
  export default {
    mounted() {
      this.typeEffect();
    },
    methods: {
      typeEffect() {
        // タイピングエフェクト
        const typing = (element, sentence) => {
          [...sentence].forEach((character, index) => {
            setTimeout(() => {
              document.querySelector(element).textContent += character;
            }, 100 * ++index);
          });
          setTimeout(this.showIntroduction, 1400);
        }

        typing('#typing', 'Haruki Okuda');
      },
      showIntroduction() {
        document.getElementById('sub').style.opacity = 1
      },
    }

  }

</script>
<style lang="scss" scoped>

</style>
