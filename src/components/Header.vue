<template>
  <div>
    <!-- 顶部导航栏开始 -->
    <div id="nav">
      <el-menu
        :default-active="activePath"
        class="el-menu-demo"
        mode="horizontal"
      >
        <div id="logo">
          <a href="">
            <img src="./assets/logo/lklogo-1.png" alt="" />
          </a>
        </div>

        <el-menu-item v-for="val in nav" :index="val.path" :key="val.id">
          <router-link :to="val.path">{{ val.name }}</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 顶部导航栏结束 -->

    <!-- 中间显示部分 -->
    <router-view></router-view>

    <!-- 底部信息栏开始 -->
    <footer>
      <div class="info">
        <div>
          <img src="src\assets\icon\phone.png" alt="" />
          <div>
            <p>
              <a href="tel:0769-123456789">Tel:0769-123456789</a>
            </p>
            <p>Fax:0769-123456789</p>
          </div>
        </div>
        <div>
          <img src="src\assets\icon\email.png" alt="" />
          <div>
            <p>
              <a href="mailto:123456@qq.com"> 123456789@qq.com </a>
            </p>
          </div>
        </div>
        <div>
          <img src="src\assets\icon\locate.png" alt="" />
          <div>
            <p>Address: 东莞市松山湖东沣科技园6栋</p>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>
          Copyright@2018 Dongguan ZhonghangHuaxun Satellite Technology Co,Ltd
          <a href="javascript:;">版权所有 </a>
          <a href="javascript:;"> 隐私权政策</a> |
          <a href="javascript:;"> 使用条款</a>
        </p>
        <p>
          <a href="javascript:;"> 粤ICP备18016887号-1 </a>
          |本网站直接或间接向消费者推销商品或者服务的商业宣传均属于"广告"（包装及参数、售后保障等商品信息除外）
        </p>
      </div>
    </footer>
    <!-- 底部信息栏结束 -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const nav = [
  { id: 0, name: 'Home', path: '/home' },
  { id: 1, name: 'Product', path: '/product' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Contact', path: '/contact' },
]

const activePath = computed(() => {
  const route = useRoute()
  const { meta, path } = route
  if (meta.activeMenu) return meta.activeMenu
  return path
})
</script>

<style scoped lang="less">
#nav {
  #logo {
    position: absolute;
    left: 111px;
    top: 17px;

    a {
      display: inline-block;
      color: inherit;

      img {
        width: 250px;
      }
    }
  }

  .el-menu {
    display: flex;
    justify-content: flex-end;
    background-color: #eee;

    a {
      color: inherit;
    }

    li {
      padding: 0;

      a {
        display: inline-block;
        padding: 0 17px;
        height: 100%;
        font-size: 16px;
      }
    }
  }

  .el-menu--horizontal {
    .el-menu-item.is-active {
      border-bottom: 2px solid #333;
    }
  }
}
footer {
  width: 100%;
  background-color: #e6e6e6;

  .info {
    display: flex;
    justify-content: center;
    padding: 50px 100px 30px;
    border-bottom: 2px solid #d3d3d3;

    & > div {
      display: flex;
      align-items: center;
      padding: 0px 5%;
      border-right: 2px solid #d3d3d3;

      &:nth-last-child(1) {
        border-right: 0;
      }

      img {
        width: 40px;
      }

      & > div {
        padding-left: 15px;

        p {
          a {
            color: black;
          }
        }
      }
    }
  }

  .copyright {
    padding: 50px 0px 30px 15%;
    color: #a3a3a3;

    a {
      color: #a3a3a3;
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
