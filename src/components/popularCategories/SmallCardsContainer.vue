<template>
  <div class="container">
    <!--      Small card component-->
    <small-card class="card-style"
        v-for="(i, index) in items.length"
        :key="i"
        :items="items[index]"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[
        {
          text: "Roses",
          image: "small-card1.png",
        },
        {
          text: "Under 50$",
          image: "small-card2.png",
        },
        {
          text: "Large bouquets",
          image: "small-card3.png",
        },
        {
          text: "Gerberas",
          image: "small-card4.png",
        },
        {
          text: "Chamomile",
          image: "small-card5.png",
        },
        {
          text: "Medium bouquets",
          image: "small-card6.png",
        },
        {
          text: "Lilies",
          image: "small-card7.png",
        },
        {
          text: "Small bouquets",
          image: "small-card8.png",
        },
        {
          text: "50$ - 100$",
          image: "small-card9.png",
        },
        {
          text: "Mixed bouquets",
          image: "small-card10.png",
        },
        {
          text: "Roses",
          image: "small-card1.png",
        },
        {
          text: "Under 50$",
          image: "small-card2.png",
        },
        {
          text: "Large bouquets",
          image: "small-card3.png",
        },
        {
          text: "Gerberas",
          image: "small-card4.png",
        },
        {
          text: "Chamomile",
          image: "small-card5.png",
        },

      ],
    }
  },
  components:{
    "small-card": require("@/components/SmallCard.vue").default,
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 888px;
  width: 888px;
  /*max-height: 520px;*/
  /*height: 520px;*/
  border: 1px solid red;
}
@media screen and (max-width: 540px) {
  .container {
    max-width: 343px;
    width: 343px;
  }
  .card-style {
    margin-bottom: 8px;
  }
}
</style>