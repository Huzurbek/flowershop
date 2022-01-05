<template>
 <div class="containercha">
   Kompyutter
 </div>
  <demo :title="topic"/>
</template>

<script>
export default {
  data(){
    return {
      // topic : 'dsds',
    }
  },
components: {
  'demo': require('@/components/example/Demo.vue').default,
}
}
</script>

<style scoped>
.containercha{
  border:1px solid red;
  max-width: 1440px;
  min-width: 1000px;
  width: 90%;
  margin:  0 auto;
  margin-bottom: 25px;
}
</style>