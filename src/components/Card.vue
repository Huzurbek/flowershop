<template>
  <div>
    <div class="card-background">
      <img :src="require(`@/assets/${items.image}`)" alt="BestSellerPic">
      <div class="product-name">
        <div class="name"><span>{{ items.name }}</span></div>
        <div class="point">
          <svg width="19" height="15" style="margin-right: 5px" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z" fill="#FFD647"/>
          </svg>
          <span>4.9</span>
        </div>
      </div>
      <div class="card-footer">
        <div class="day">
          <div><span>Tomorrow</span></div>
          <div><span>9:00 - 12:00</span></div>
        </div>
        <div class="price-btn"><span>{{ items.price }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
  }
}
</script>

<style scoped>
.card-background{
  position: relative;
  max-width: 336px;
  width: 336px;
  max-height: 471px;
  height: 471px;
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border: 1px solid rgba(124, 177, 66, 0.15);
  border-radius: 20px;
  padding: 16px;
}
img{
  position: absolute;
  top: 0;
  left: 0;
}
.product-name{
  display: flex;
  justify-content: space-between;
  margin-top: 330px;
  margin-bottom: 29px;
}
.name{
  display: block;
  max-width: 233px;
  max-height: 38px;
  height: 38px;
  box-sizing: border-box;
  white-space: pre-wrap;
  font-weight: 600;
  font-size: 19px;
  color: #1A1A1A;
}
.point {
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #1A1A1A;
}

.card-footer{
  display: flex;
  justify-content: space-between;
}
.day {
  vertical-align: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #7CB142;
}
.price-btn{
  height: 50px;
  display: flex;
  background: #F9E7E7;
  border-radius: 12px;
  align-items: center;
  padding: 0 48px;
  font-weight: 600;
  font-size: 19px;
  color: #1A1A1A;
}
/*Mobile Version*/
@media screen and (max-width: 540px) {
  .card-background{
    max-width: 167px;
    width: 167px;
    max-height: 317px;
    height: 317px;
    border-radius: 12px;
    padding: 8px;
  }
  img{
    /*top:-5px;*/
    width: 167px;
    height: 167px;
    /*border-radius-topleft: 12px;*/
    /*border-radius-topright: 12px;*/
  }
  .product-name{
    margin-top: 165px;
  }
  .name{
    max-height: 20px;
    height: 20px;
    line-height: 100%;
  }
  .name, .point{
    font-size: 14px;
  }
  svg{
    width: 14px;
    height: 12px;
    margin-right: 2px;
  }
  .card-footer{
    flex-direction: column;
  }
  .day{
    margin-bottom: 6px;
  }

}
</style>