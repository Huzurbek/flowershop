<template>
  <div>Home Page</div>
  <div class="card">
    <img class="clip-image" src="@/assets/demo.png" alt="Demo">
    <div class="card-text">
      <span>My new project My new project My new project</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
  position: relative;
  max-width: 500px;
  width: 500px;
  max-height: 600px;
  height: 600px;
  overflow: hidden;
  box-sizing: border-box;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border: 1px solid rgba(124, 177, 66, 0.15);
  border-radius: 20px;
  padding: 16px;
  margin: 50px;
}
.clip-image{
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(41% at 27% 37%);
}
</style>