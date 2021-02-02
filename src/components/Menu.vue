<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" class="active"><span>TOP</span></router-link>
        </li>
        <li>
          <router-link to="/works"><span>WORKS</span></router-link>
        </li>
        <li>
          <router-link to="/about"><span>ABOUT</span></router-link>
        </li>
        <li class="ctaWrap">
          <router-link to="/links"><span>LINKS</span></router-link>
        </li>
      </ul>
    </nav>
</template>
<script>
  export default {}

</script>
<style lang="scss" scoped>
  nav {
    font-family: "Yu Gothic", "游ゴシック", "Work Sans", "YuGothic", "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    opacity: 0.9;
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
        height: 50%;
      }
    }

    a {
      display: flex;
      align-items: center;
      padding: 0 30px;
      height: 100%;
      padding: 30px 0;

      @include sp {
        padding: 0;
        width: 100%;
        justify-content: center;
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
        span {
          color: $mc03;

          &::before {
            width: 100%;
            transition: 0.25s ease-in-out;
          }
        }
      }
    }

  // .ctaBtn {
  //     background-color: $mc03;
  //     color: $mc01 !important;
  //     transition: all 0.2s;
  //     box-sizing: border-box;
  //     border: 6px solid $mc03;
  //     font-weight: bold;

  //     &:hover {
  //         background-color: $mc01;
  //     }

  //     span {
  //         &:before {
  //             content: none;
  //         }
  //     }
  // }

</style>
