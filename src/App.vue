<template>
  <div id="app">
    <!-- <Top></Top>
    <Works></Works>
    <About></About>
    <Links></Links>
    <Menu></Menu> -->
    <router-view></router-view>
  </div>
</template>
<script>
  import Top from './components/Top';
  import Menu from './components/Menu';
  import Works from './components/Works';
  import About from './components/About';
  import Links from './components/Links';
  export default {
    name: 'App',
    components: {
      Top,
      Menu,
      Works,
      About,
      Links
    },
    mounted() {
      this.typeEffect();

      document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.top').style.height = `${window.innerHeight}px`
      })

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
<style lang="scss">
  .inner {
    padding: 120px 100px;

    @include sp {
      padding: 60px 15px;
    }
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 80px);
    overflow: hidden;
    margin: 0px;
    padding: 80px 0 0 0;

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

    .imgWrap {
      width: 50%;
      height: 100%;

      @include sp {
        display: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
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

  h2 {
    font-size: 48px;
    text-align: center;
    color: $mc04;
    margin-bottom: 40px;
    font-weight: bold;
    letter-spacing: 0.2em;

    @include sp {
      font-size: 34px;
      letter-spacing: 0.15em;
    }

    span {
      display: block;
      font-size: 16px;
      color: $mc07;
      margin-top: 10px;
      font-weight: normal;

      @include sp {
        font-size: 14px;
      }

      &:before,
      &:after {
        content: '―';
        display: inline-block;
        margin-right: 10px;
        margin-left: 10px;
      }
    }

    &+p {
      font-size: 16px;
      color: $mc02;
      text-align: center;
      line-height: 1.7;
      margin-bottom: 40px;
    }
  }

  .inversion {
    background-color: $mc05;

    h2 {
      &+p {
        color: $mc06;
      }
    }
  }

  footer {
    background-color: $mc04;
    padding: 15px 0;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    // font-weight: bold;
    color: $mc01;
  }

  .boxSection {
    display: flex;
  }

  .boxImg {
    height: 250px;
    width: 100%;
    object-fit: cover;

    @include sp {
      height: 100px;
    }
  }

  .blog,
  .contact {
    text-align: center;
  }

  .logoLink {
    box-shadow: 0 0 10px #ccc;
    display: inline-block;
    // margin-top: 100px;
    max-width: 100%;
    transition: all 0.4s;
    background-color: $mc01;
    border-radius: 10px;

    &.zenn {
      padding: 15px 25px;
      width: 160px;
    }

    &:hover {
      box-shadow: 0 0 4px #aaa;
      transform: scale(1.1);
    }
  }

  .logoImg {
    width: 100%;
    vertical-align: bottom;
  }

  .skills {
    h2+p {
      margin-bottom: 20px;
    }
  }

  .skillWrap {
    // border: solid 1px #eee;
    text-align: center;
    // padding: 20px;

    #skillChart {
      display: inline-block !important;
      width: 450px !important;
      height: auto !important;
      max-width: 100%;
    }
  }


  // アニメーション
  .vibration {
    display: inline-block;
    animation: vibration .1s infinite;
  }

  @keyframes vibration {
    0% {
      transform: translate(0px, 0px) rotateZ(0deg)
    }

    25% {
      transform: translate(2px, 2px) rotateZ(1deg)
    }

    50% {
      transform: translate(0px, 2px) rotateZ(0deg)
    }

    75% {
      transform: translate(2px, 0px) rotateZ(-1deg)
    }

    100% {
      transform: translate(0px, 0px) rotateZ(0deg)
    }
  }

  h1 {

    &:after {
      content: '';
      border-right: 1px solid;
      animation: flashing 1.2s linear infinite;
    }
  }

  @keyframes flashing {
    0% {
      opacity: 0;
    }
  }

  // パララックス
  .simpleParallax {
    height: 100%;
  }

  // スクロールスナップ
  .container {
    scroll-snap-type: y mandatory;
  }

  .child {
    scroll-snap-align: start;
  }

  // timeline
  .timelineWrap {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;

    #timeline {
      padding-left: 20px;

      .content {
        font-size: 14px;
        letter-spacing: 0.02em;
        line-height: 1.4;
      }

      .date {
        font-size: 14px;
        left: -80px;
      }

      label {
        font-size: 16px;
        z-index: 1;
      }

      .circle {
        left: -34px;
      }
    }
  }

</style>
