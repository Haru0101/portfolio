<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" class="active"><span>TOP</span></router-link>
        </li>
        <li>
          <router-link to="/about"><span>ABOUT</span></router-link>
        </li>
        <!-- <li>
          <router-link to="/works"><span>WORKS</span></router-link>
        </li> -->
        <li>
          <router-link to="/articles"><span>ARTICLES</span></router-link>
        </li>
        <li class="ctaWrap">
          <router-link to="/links"><span>LINKS</span></router-link>
        </li>
      </ul>
    </nav>
</template>
<style lang="scss" scoped>
  nav {
    font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
    width: 200px;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $mc03;

    @include sp {
      width: 100%;
      height: 80px;
    }
  }


    ul {
      height: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;

      @include sp {
        height: 100%;
        flex-direction: row;
      }
    }

    li {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      color: $mc03;

      @include sp {
        width: calc(100% / 3);
        height: 100%;
      }
    }

    a {
      display: block;
      text-align: center;
      height: 100%;
      padding: 30px 0;
      width: 200px;


      @include sp {
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      span {
        transition: 0.25s ease-in-out;
        position: relative;


        &::before {
          width: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 1px;
          background: $mc03;
          position: absolute;
          bottom: -2px;
          content: "";
        }
      }

      &:hover {
        opacity: 0.4;
        transition: 0.15s opacity;
        span {
          color: $mc03;

          &::before {
            width: 100%;
            transition: 0.25s ease-in-out;
          }
        }
      }
    }
</style>