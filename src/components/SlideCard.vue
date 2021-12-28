<template>
  <div class="slide-card">
      <img class="clip-image" :src="require(`@/assets/${items.image}`)" alt="PromotionPic">
          <div class="product-name">
            <div class="name" ><span>{{ items.name }}</span></div>
            <div class="points">
              <svg width="19" height="15" style="margin-right: 5px" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z" fill="#FFD647"/>
              </svg>
              <span>4.9</span></div>
          </div>
          <div class="card-footer">
            <div class="day">
              <div><span>Tomorrow</span></div>
              <div><span>9:00 - 12:00</span></div>
            </div>
            <div class="price-btn"><span>{{ items.price }}</span></div>
          </div>
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

.clip-image{
  position: absolute;
  left: -35px;
  top: -20px;
  /*-webkit-clip-path: circle(35% at 27% 31% );*/
  clip-path: circle(49% at 25% 28% );
}

.slide-card{
  position: relative;
  max-width: 336px;
  min-width: 336px;
  width: 336px;
  max-height: 370px;
  min-height: 370px;
  height: 370px;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border: 1px solid rgba(124, 177, 66, 0.15);
  box-sizing: border-box;
  border-radius: 20px;
  padding: 16px;
  overflow: hidden;
}

.slide-card-time span{
  font-weight: 600;
  font-size: 19px;
  line-height: 100%;
  color: #1A1A1A;
}



.product-name{
  display: flex;
  justify-content: space-between;
  margin-top: 243px;
  margin-bottom: 24.5px;
  box-sizing: border-box;
}
.name, .points{
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  /*align-items: center;*/
  color: #1A1A1A;
}
.card-footer{
  display: flex;
  justify-content: space-between;
}
.day, .price-btn{
  height: 50px;
}
.day span{
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #7CB142;
}
.price-btn{
  display: flex;
  align-items: center;
  background: #F9E7E7;
  border-radius: 12px;
  padding: 0 48px;
}
.price-btn span{
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 100%;
  color: #1A1A1A;
}


</style>