<template>
  <div id="app">
    <Header></Header>
    <section class="top">
      <div class="typoWrap">
        <h1 id="typing"></h1>
        <p id="sub">I'm a <span>front-end engineer.</span></p>
      </div>
      <div class="imgWrap">
        <img class="parallax" src="@/assets/img/img_top.jpg" alt="トップ画像">
      </div>
      <!-- <div class="scrollDown">
            <span></span>
            <span>scroll down</span>
        </div> -->
    </section>
    <main>
      <section id="works" class="works inversion">
        <div class="inner">
          <h2>Works<span>制作物</span></h2>
          <!-- <p>趣味で作ったPWAやサイトなどです。<br>
                    使用言語はJavaScriptと、そのフレームワークが中心です。</p> -->
          <p>準備中</p>
        </div>
      </section>
      <section class="boxSection">
        <img class="boxImg boxImg01 parallax" src="@/assets/img/img_city01.jpg" loading="lazy">
        <img class="boxImg boxImg02 parallax" src="@/assets/img/img_city02.jpg" loading="lazy">
      </section>
      <section id="skills" class="skills">
        <div class="inner">
          <h2>Skills<span>技術</span></h2>
          <p>WEB制作に必要なHTML5, CSS3, JavaScriptをはじめ、<br>
            アプリ開発のためのVue.jsも書きます。</p>
          <!-- <div class="skillWrap">
                    <canvas id="skillChart" width="400" height="400"></canvas>
                </div> -->
        </div>
      </section>
      <section id="blog" class="blog inversion">
        <div class="inner">
          <h2>Blog<span>ブログ</span></h2>
          <p>気になった技術をまとめたり、<br>
            プログラミングスクールで教えている生徒に向けて書いた記事が中心です。</p>
          <a href="//zenn.dev/harryduck" class="logoLink zenn" target="_blank" rel="noopener">
            <img class="logoImg" src="@/assets/img/logo_zenn.png" alt="Zennロゴ">
          </a>
        </div>
      </section>
      <section id="profile" class="profile">
        <div class="inner">
          <h2>Profile<span>人物紹介</span></h2>
          <p>私のライフヒストリーをかんたんにまとめてみました。<br>
            ミニマリストでなんでも効率化しがちです。</p>
          <!-- <p>準備中</p> -->
          <div class="timelineWrap">
            <ul id="timeline">
              <li class="work">
                <input class="radio" id="work5" name="works" type="radio" checked>
                <div class="relative">
                  <label for="work5">大分県で生誕</label>
                  <span class="date">1997</span>
                  <span class="circle"></span>
                </div>
                <div class="content">
                  <p>
                    大分県大分市で生まれたのち、観光地・湯布院で小・中学校時代を過ごす。
                  </p>
                </div>
              </li>
              <li class="work">
                <input class="radio" id="work4" name="works" type="radio">
                <div class="relative">
                  <label for="work4">大分商業高校 卒業</label>
                  <span class="date">2012</span>
                  <span class="circle"></span>
                </div>
                <div class="content">
                  <p>
                    成績上位で大分商業高校を卒業。
                    高校入学当初からの目標であった大分大学経済学部に合格する。
                  </p>
                </div>
              </li>
              <li class="work">
                <input class="radio" id="work3" name="works" type="radio">
                <div class="relative">
                  <label for="work3">大分大学経済学部 入学</label>
                  <span class="date">2016</span>
                  <span class="circle"></span>
                </div>
                <div class="content">
                  <p>
                    商業高校出身ながら、TOEIC645点を取得し、クラス分けテストで最上位のクラスに入る。
                    半額は授業料免除、もう半額は教育ローンの融資を受け、大学生活を送る。
                  </p>
                </div>
              </li>
              <li class="work">
                <input class="radio" id="work2" name="works" type="radio">
                <div class="relative">
                  <label for="work2">大分大学経済学部 卒業</label>
                  <span class="date">2020</span>
                  <span class="circle"></span>
                </div>
                <div class="content">
                  <p>
                    在学中に得たフロントエンドの技術を活かして、
                    地元大分のWEB制作会社に入社。
                  </p>
                </div>
              </li>
              <li class="work">
                <input class="radio" id="work1" name="works" type="radio">
                <div class="relative">
                  <label for="work1">WEB制作会社 在籍</label>
                  <span class="date">NOW</span>
                  <span class="circle"></span>
                </div>
                <div class="content">
                  <p>
                    主にコーポレートサイトのCMS構築や、Vue.jsを用いたWEBアプリケーション開発に従事する。<br>
                    また、副業でプログラミングスクールの講師を始める。
                  </p>
                </div>
              </li>
              <!-- <li class="work">
                            <input class="radio" id="work1" name="works" type="radio">
                            <div class="relative">
                                <label for="work1">広島県での転職を目指し活動中</label>
                                <span class="date">now</span>
                                <span class="circle"></span>
                            </div>
                            <div class="content">
                                <p>
                                    大学在学中から交際している彼女の就職と、自分自身のキャリアアップに伴い、広島県への転職を決意。
                                    自身のマークアップやフロント開発の経験を活かせる会社を探している。
                                </p>
                            </div>
                        </li> -->
            </ul>
          </div>
        </div>
      </section>
      <section id="contact" class="contact inversion">
        <div class="inner">
          <h2>Contact<span>お問い合わせ</span></h2>
          <p>お気軽にお問い合わせください。</p>
          <a href="mailto:haruki.for.01@gmail.com" class="logoLink vibration" target="_blank" rel="noopener">
            <img class="logoImg" src="@/assets/img/logo_gmail.png" alt="Gmailロゴ">
          </a>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from './components/Header';
  import Footer from './components/Footer';
  import "./plugins/simpleParallax.min.js";
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    mounted() {
      this.typeEffect();

      document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.top').style.height = `${window.innerHeight}px`
      })
      let image = document.getElementsByClassName('parallax');
      new simpleParallax(image, {
        scale: 1.8,
      });

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
<style>
  @import "../src/assets/scss/timeline.css";

</style>
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
