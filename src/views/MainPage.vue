<template>
  <div class="main">
<!--    Navbar-->
    <navbar-section/>

    <div class="body">
<!--      Header-->
<!--      <div style=" margin-bottom: 84px">-->
<!--        <header-section/>-->
<!--      </div>-->
<!--      Stories-->
      <div class="spacer">
<!--        <stories-section/>-->
      </div>
<!--      Flower Card-->
      <div class="spacer">
        <flower-cards-section/>
      </div>
<!--      Promotion Sliders-->
      <div class="spacer">
        <promotion-slideshow-section/>
      </div>
<!--          Bestsellers-->
      <div class="spacer">
        <bestsellers-section/>
      </div>
<!--      Subscribe-->
      <div class="spacer">
        <subscribe-section/>
      </div>
<!--     Popular Categories-->
      <div class="spacer">
        <popular-categories-section/>
      </div>
<!--   Roses-->
      <div class="spacer">
        <roses-section/>
      </div>
<!--      Lilies-->
      <div class="spacer">
        <lilies-section/>
      </div>
<!--      Tulips-->
      <div class="spacer">
        <tulips-section/>
      </div>
<!--      Blogs-->
      <div class="spacer">
        <blogs-section/>
      </div>
<!--      Florist-->
      <div class="spacer">
        <florist-section/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "navbar-section": require("@/sections/NavbarSection.vue").default,
    // "header-section": require("@/sections/HeaderSection.vue").default,
    // "stories-section": require("@/sections/StoriesSection.vue").default,
    "flower-cards-section": require("@/sections/FlowerCardsSection.vue").default,
    "promotion-slideshow-section": require("@/sections/PromotionSlideshowSection.vue").default,
    "bestsellers-section": require("@/sections/BestsellerSection.vue").default,
    "subscribe-section": require("@/sections/SubscribeSection.vue").default,
    "popular-categories-section": require("@/sections/PopularCategoriesSection.vue").default,
    "roses-section": require("@/sections/RosesSection.vue").default,
    "lilies-section": require("@/sections/LiliesSection.vue").default,
    "tulips-section": require("@/sections/TulipsSection.vue").default,
    "blogs-section": require("@/sections/BlogSection.vue").default,
    "florist-section": require("@/sections/Florist-section.vue").default,



    // "stories": require("@/components/header/StoriesSection.vue").default,
    // "flower-cards": require("@/components/header/FlowerCards.vue").default,


    // "popular-categories": require("@/components/header/PopularCategories").default,
    // "roses": require("@/components/header/Roses.vue").default,
    // "lilies": require("@/components/header/Lilies.vue").default,
    // "tulips": require("@/components/header/Tulips.vue").default,
    // "blogs": require("@/components/header/Blogs.vue").default,
    // "florist": require("@/components/header/Florist.vue").default,

  },
}
</script>

<style scoped>
.main{
  border: 1px solid red;
  max-width: 1440px;
  /*min-width: 1000px;*/
  width:95%;
  margin:  0 auto;
  margin-bottom: 25px;
}
.spacer{
  margin-bottom: 80px;
  /*border: 1px solid black*/
}

@media screen and (max-width: 570px) {
  .rasm{
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .spacer{
    margin-bottom: 25px;
  }
}






</style>
