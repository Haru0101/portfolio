<template>
  <header>
    <nav>
      <ul>
        <li><a href="#" class="active"><span>Top</span></a>
        </li>
        <li><a href="#works"><span>Works</span></a></li>
        <li><a href="#skills"><span>Skills</span></a></li>
        <li><a href="#blog"><span>Blog</span></a></li>
        <li><a href="#profile"><span>Profile</span></a></li>
        <li class="ctaWrap"><a href="#contact" class=" ctaBtn"><span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
header {
    font-family: "Yu Gothic", "游ゴシック", "Work Sans", "YuGothic", "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    opacity: 0.9;
    display: flex;
    background-color: $mc01;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 80px;
    justify-content: flex-end;
    align-items: center;
    z-index: 2;
    @include sp {
        height: 80px;
        top: unset;
        bottom: 0;
    }
}

nav {
    height: 100%;
    @include sp {
        width: 100%;
    }

    ul {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @include sp {
            flex-wrap: wrap;
        }
    }

    li {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        color: $mc02;
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
                background: $mc04;
                position: absolute;
                bottom: -2px;
                content: "";
            }
        }

        &:hover {
            span {
                color: $mc04;

                &::before {
                    width: 100%;
                    transition: 0.25s ease-in-out;
                }
            }
        }
    }
}

.ctaBtn {
    background-color: $mc03;
    color: $mc01 !important;
    transition: all 0.2s;
    box-sizing: border-box;
    border: 6px solid $mc03;
    font-weight: bold;

    &:hover {
        background-color: $mc01;
    }

    span {
        &:before {
            content: none;
        }
    }
}
</style>