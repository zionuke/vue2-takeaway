<template>
  <div id="app">
    <router-view></router-view>
    <!-- 当前路由需要展示导航栏才显示 -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from '@/components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  mounted() {
    this.getUserInfo()
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['getUserInfo'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
