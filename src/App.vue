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
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    mounted() {
      document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.top').style.height = `${window.innerHeight}px`
      })
    },
    methods: {
    }
  }

</script>
<style>
  @import "../src/css/timeline.css";
  @import "../src/css/common.css";
</style>
