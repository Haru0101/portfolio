<template>
  <section class="top">
    <div class="typoWrap">
      <h1 id="typing"></h1>
      <p id="sub">I'm a <span>front-end engineer.</span></p>
    </div>
    <Menu></Menu>
  </section>
</template>
<script>
import Menu from './Menu';
  export default {
    components: {
      Menu
    },
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
    height: 100vh;
    overflow: hidden;
    margin: 0px;

    @include sp {
      flex-direction: column;
    }

    .typoWrap {
      padding-left: 100px;
      width: calc(100% - 200px);

      @include sp {
        width: 100%;
        height: calc(100% - 80px);
        padding-left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
      text-align: center;
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
