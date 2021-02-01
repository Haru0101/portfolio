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
  .top {
    width: calc(100% - 200px);
    padding-left: 100px;

    @include sp {
      width: 100%;
      height: calc(100% - 80px);
      padding-left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

     h1 {
    font-size: 64px;
    font-weight: bold;
    color: $mc03;
    margin-bottom: 15px;

    @include sp {
      font-size: 40px;
      text-align: center;
    }

    &+p {
      font-size: 32px;
      color: $mc02;
      transition: opacity 1s;
      opacity: 0;

      @include sp {
        text-align: center;
        font-size: 20px;
      }

      span {
        color: $mc04;
      }
    }
  }
  }

 

</style>
