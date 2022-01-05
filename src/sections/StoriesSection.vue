<template>
  <div class="container">
    <div class="stories">
      <div class="stories-box" v-for="item of items" :key="item.text">
        <div class="circle">
          <img :src="require(`@/assets/${item.image}`)" alt="CircleOne">
        </div>
        <div class="circle-text">
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    items: [
      {
        image: 'Ellipse1.png',
        text: 'Rose'
      },
      {
        image: 'Ellipse2.png',
        text: 'Hits'
      },
      {
        image: 'Ellipse3.png',
        text: 'Sale'
      },
      {
        image: 'Ellipse4.png',
        text: 'Children'
      },
      {
        image: 'Ellipse5.png',
        text: 'Home'
      },
      {
        image: 'Ellipse1.png',
        text: 'Love'
      },
      {
        image: 'Ellipse6.png',
        text: 'Others'
      }
    ]
  }
}
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center
}
.stories{
  max-width: 892px;
  width: 892px;
  display: flex;
  justify-content: space-between;
  /*flex: 1;*/
}
.stories-box{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.circle-text{
  align-self: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  padding-top: 8px
}
.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid #7CB142;
  border-radius: 100px;
}
/*Mobile version*/
@media screen and (max-width: 540px) {
  .stories-box{
    margin-left: 8px;
    margin-right: 8px;
  }
  .circle{
    width: 65px;
    height: 65px;
  }
  img{
    width: 59px;
    height: 59px;
  }
}
</style>