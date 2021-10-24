<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
// 类名常量
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'

export default {
  name: 'Star',
  props: {
    score: Number,
    size: Number
  },
  computed: {
    /*
      3.2: 3 + 0 + 2
      3.5: 3 + 1 + 1  小数部分>=0.5算一个half
    */
    starClasses () {
      // 第一次读取计算属性时已经在解析模板了，组件实例对象生命周期处于created之后，可通过this访问所有属性和方法
      const {score} = this
      const sca = []
      // 向sca中添加n个CLASS_ON
      const scoreInteger = Math.floor(score)
      for(let i = 0; i < scoreInteger; i++){
        sca.push(CLASS_ON)
      }
      // 向sca中添加0/1个CLASS_HALF
      if((score*10 - scoreInteger*10)>=5){
        sca.push(CLASS_HALF)
      }
      // 向sca中添加n个CLASS_OFF
      while(sca.length<5){
        sca.push(CLASS_OFF)
      }

      return sca
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.star //2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('./images/star48_on')
      &.half
        bg-image('./images/star48_half')
      &.off
        bg-image('./images/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star36_on')
      &.half
        bg-image('./images/star36_half')
      &.off
        bg-image('./images/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star24_on')
      &.half
        bg-image('./images/star24_half')
      &.off
        bg-image('./images/star24_off')
</style>
