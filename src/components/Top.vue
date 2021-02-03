<template>
  <main class="top">
    <div class="typoWrap">
      <h1 id="typing"></h1>
      <p id="sub">I'm a <span>front-end engineer.</span></p>
    </div>
  </main>
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
    padding-left: 100px;
    display: flex;
    align-items: center;
    font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;

    @include sp {
      width: 100%;
      height: calc(100% - 80px);
      padding-left: 0;
      flex-direction: column;
      justify-content: center;
      padding: 0;
    }

    h1 {
      position: static;
      font-size: 64px;
      font-weight: bold;
      color: $mc03;
      margin-bottom: 15px;
      margin-bottom: 0;
      letter-spacing: 0.02em;

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
          padding-right: 5px;
        }

        span {
          color: $mc04;
        }
      }
    }
  }

</style>
