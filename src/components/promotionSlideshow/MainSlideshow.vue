<template>
  <div class="slideshow-container">
    <transition-group name="fade" tag="div" class="wrapper" >
        <div class="promo-notes"><span>PROMO: 50% for {{currentImg.text}} bouquets</span> </div>
      <div  class="slideshow-item" v-for="i in [currentIndex]" :key='i'>
        <img :src="require(`@/assets/${currentImg.image}`)" alt="slider1">
      </div>
    </transition-group>
    <a class="prev" @click="prev">&#10094;</a>
    <a class="next" @click="next">&#10095;</a>
    <div class="slideshow-btn-box">
      <div v-for="i in items.length" :key="i">
        <span class="slideshow-btn" :class="{'active': i === (Math.abs(this.currentIndex) % this.items.length)+1}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          image: 'promotion-slider1.png',
          text: 'Liles'
        },
        {
          id: 2,
          image: 'promotion-slider2.png',
          text: 'Roses'
        },
        {
          id: 3,
          image: 'promotion-slider3.png',
          text: 'White Roses'
        },
        {
          id: 4,
          image: 'promotion-slider4.png',
          text: 'Other'
        }
      ],
      timer: null,
      currentIndex: 0,
    }
  },
  mounted: function () {
    // this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },
    next: function() {
      if(this.currentIndex === 100){
        this.currentIndex=0
      }else {
        this.currentIndex += 1
      }
    },
    prev: function() {
      if(this.currentIndex === -10){
        this.currentIndex = 0
      }else{
        this.currentIndex -= 1
      }
    }
  },
  computed: {
    currentImg: function() {
      return this.items[Math.abs(this.currentIndex) % this.items.length];
    }
  }
}
</script>
<style scoped>
.fade-enter-active{
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .3s ease;

  /*transition: all .8s cubic-bezier(1.0, 1.0, 1.0, 1.0);*/
  /*transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.slideshow-container {
  position: relative;
  width: max-content;
}
.wrapper {
  width: 1072px;
  height: 370px;
  overflow: hidden;
  display: flex;
}
.slideshow-item {
  background: #D0C4DF;
  max-width: 1072px;
  min-width: 1072px;
  width: 1072px;
  max-height: 370px;
  height: 370px;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.promo-notes {
  position: absolute;
  top: 48px;
  left: 119px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 16px;
}
.promo-notes span {
  font-weight: bold;
  font-size: 33px;
  line-height: 100%;
  align-items: center;
  color: #1A1A1A;
}
.slideshow-item img {
  border-radius: 20px;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 37px;
  height: 37px;
  text-align: center;
  left:19px;
  margin-top: -18px;
  color: #7CB142;
  font-weight: bold;
  font-size: 23px;
  transition: 0.6s ease;
  background: #FBFAF8;
  border-radius: 50%;
  user-select: none;
}

.next {
  left:auto;
  right: 19px;
}
.prev:hover, .next:hover {
  background-color: rgba(212, 207, 207, 0.8);
}
.slideshow-btn-box {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
.slideshow-btn {
  user-select: none;
  width: 50px;
  height: 5px;
  margin: 0 16px;
  border: 1px solid #7CB142;
  border-radius: 12px;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background: #7CB142;
}

</style>