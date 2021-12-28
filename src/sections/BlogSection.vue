<template>
  <div class="header">
    <div class="header-text"><span>Blog</span></div>
    <div class="header-btn"><span>View all</span></div>
  </div>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <blog-card style="display: inline-flex; margin-right: 32px" v-for="(i, index) in items"
               :key="i"
               :items="items[index]"/>
    </div>
    <div class="prev"  @click="prev">&#10094;</div>
    <div class="next" @click="next">&#10095;</div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          image: "blog1.png",
          text: "Has the EU's vaccine rollout lost Brussels support in poorer nations?",
          day: "20 june 2020",
        },
        {
          image: "blog2.png",
          text: "Hidden in a pandemic: Elderly in nursing homes are dying from isolation",
          day: "20 june 2020",
        },
        {
          image: "blog3.png",
          text: "Brexit red tape: UK ports demand government help for fish exporters",
          day: "20 june 2020",
        },
        {
          image: "blog4.png",
          text: "Small businesses suffer as increased Capitol security takes over Washington",
          day: "20 june 2020",
        },
        {
          image: "blog2.png",
          text: "Hidden in a pandemic: Elderly in nursing homes are dying from isolation",
          day: "20 june 2020",
        },
      ],

      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  components: {
    "blog-card": require("@/components/BlogCard").default,
  },
  mounted () {
    this.setStep()
    this.resetTranslate()
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.items.length
      this.step = `${innerWidth / totalCards}px`

    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.items.shift()
        this.items.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.items.pop()
        this.items.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}
.header-text, .header-btn{
  display: flex;
  align-items: center;
  line-height: 100%;
}
.header-text{
  font-weight: bold;
  font-size: 47px;
  color: #1A1A1A;
}
.header-btn{
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: #7CB142;
}
.header-btn:hover{
  color: #5b7937;
}
.carousel {
  position: relative;
  overflow: hidden;
}
.inner {
  transition: transform 0.5s;
  white-space: nowrap;
}

/* optional */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 37px;
  height: 37px;
  text-align: center;
  left: 9px;
  margin-top: -18px;
  color: red;
  font-weight: bold;
  font-size: 23px;
  transition: 0.6s ease;
  background: #FBFAF8;
  border-radius: 50%;
  user-select: none;
}
.next {
  left:auto;
  right: 9px;
}
.prev:hover, .next:hover {
  /*background-color: rgba(212, 207, 207, 0.8);*/
}
@media screen and (max-width: 540px) {
  .header{
    margin-bottom: 17px;
  }
  .header-text{
    font-size: 33px;
  }
  .header-btn{

  }
}
</style>