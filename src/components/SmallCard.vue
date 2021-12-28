<template>
  <div class="card">
    <div class="text"><span>{{items.text}}</span></div>
    <img :src="require(`@/assets/${items.image}`)" alt="Small Card">
  </div>
</template>

<script>
export default {
  props:{
    items: Object,
  }
}
</script>

<style scoped>
.card{
  position: relative;
  overflow: hidden;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border: 1px solid rgba(124, 177, 66, 0.15);
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 152px;
  width: 152px;
  max-height: 152px;
  height: 152px;
  align-self: center;
  padding: 16px;
  /*margin-bottom: 32px;*/
}
img{
  position: absolute;
  right: 0;
  bottom: 0;
}
.text{
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #1A1A1A;
}
/*Mobile Version*/
@media screen and (max-width: 540px) {
  .card{
    max-width: 109px;
    width: 109px;
    max-height: 109px;
    height: 109px;
    border-radius: 12px;
    padding: 8px;
  }
  img{
    width: 60px;
    height: 60.54px;
  }
  .text{
    font-size: 14px;
  }
}
</style>