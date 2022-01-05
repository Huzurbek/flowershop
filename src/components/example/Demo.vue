<template>
  <h3>Demo Section</h3>
  <p>{{title}}</p>
</template>

<script>
export default {
props : {
  title: {
    type: String,

    default: 'no string'
  }

}
}
</script>
