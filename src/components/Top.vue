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
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 80px);
    overflow: hidden;
    margin: 0px;

    @include sp {
      justify-content: center;
      padding: 0;
      height: 100vh;
    }

    .typoWrap {
      padding-left: 100px;

      @include sp {
        padding-left: 0px;
      }
    }
  }
  h1 {
    font-size: 64px;
    font-weight: bold;
    color: $mc02;
    margin-bottom: 15px;

    @include sp {
      font-size: 40px;
    }

    &+p {
      font-size: 32px;
      color: $mc04;
      transition: opacity 1s;
      opacity: 0;

      @include sp {
        text-align: center;
        font-size: 20px;
      }

      span {
        color: $mc03;
      }
    }
  }
</style>
