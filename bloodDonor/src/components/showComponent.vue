<template>
  <button class='btn btn-info' @click='View'>View</button>
</template>
<script>
  export default {
    props: ['data'],
    data () {
      return {

      }
    },
    methods: {
      View () {
        console.log('this.daya')
        console.log(this.data)
        console.log('this.daya')
      }
    }
  }
</script>
