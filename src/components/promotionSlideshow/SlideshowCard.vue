<template>
  <div class="promo-slide-card">
    <transition-group
        name='show'
       class="carousel"
        tag="div">
      <my-slide
          v-for="(item,index) in images"
          :key="item.name"
          :items="images[index]"
          class='slide'
      />
    </transition-group>
    <div class='carousel-controls'>
      <button class='carousel-controls__button' @click="previous">prev</button>
      <button class='carousel-controls__button' @click="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      images: [
        {
          image: "original-pastel.png",
          name: "Pastel Dried",
          price: "$ 120"
        },
        {
          image: "original-red.png",
          name: "Red bouquets",
          price: "$ 150"
        },
        {
          image: "original-blue.png",
          name: "Blue bouquets",
          price: "$ 100"
        },
        {
          image: "original-white-red.png",
          name: "For She",
          price: "$ 180"
        },
        {
          image: "original-blue.png",
          name: "Blue bouquets",
          price: "$ 100"
        },
      ],
    }
  },
  components: {
    "my-slide": require("@/components/SlideCard").default,
  },
  methods: {
    next () {
      const first = this.images.shift()
      this.images = this.images.concat(first)
    },
    previous () {
      const last = this.images.pop()
      this.images = [last].concat(this.images)
    }
  }
}
</script>

<style scoped>
.promo-slide-card{
  border: 1px solid green;
}
.carousel {
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
  width: 342px;

  border: 2px solid red;
  overflow: hidden;
  background-color: #83B4AE;
}

.show-enter-active,
.show-leave-enter {
  transform: translateX(0);
  transition: all .3s linear;
}
.show-enter,
.show-leave-to {
  transform: translateX(100%);
}

.carousel-controls {
  margin: 2em;
}
.carousel-controls__button:hover {
  text-decoration: underline;
  cursor: pointer;
}
.carousel-controls__button:nth-of-type(1):hover {
  animation: underlineToDots 0.5s infinite linear;
}
.carousel-controls__button:nth-of-type(2):hover {
  animation: underlineToDots 0.5s infinite linear;
}
</style>