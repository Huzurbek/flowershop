<template>
  <div class="header">
    <div class="header-text"><span>Roses</span></div>
    <div class="header-btn"><span>View all</span></div>
  </div>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <my-card class="card-style" v-for="(i, index) in items"
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
          image: "rose1.png",
          name: "Luxurious",
          price: "$ 120"
        },
        {
          image: "rose2.png",
          name: "101 red roses premium in a basket",
          price: "$ 100"
        },
        {
          image: "rose3.png",
          name: "Good mood",
          price: "$ 120"
        },
        {
          image: "rose4.png",
          name: "For She",
          price: "$ 180"
        },
        {
          image: "rose1.png",
          name: "Good mood",
          price: "$ 100"
        },
        {
          image: "rose2.png",
          name: "Blue bouquets",
          price: "$ 120"
        },
      ],

      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  components: {
    "my-card": require("@/components/Card.vue").default,
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
.card-style {
  display: inline-flex;
  margin-right: 32px
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
  .card-style {
    margin-right: 8px
  }
}
</style>