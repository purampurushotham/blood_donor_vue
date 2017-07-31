<template>
  <div class="modal-mask" @click="close" v-show="show" transition="modal">
    <div class="modal-container"  @click.stop>

      <div class="modal-header">
        <h3>Donor Contact Information</h3>
      </div>

      <div class="modal-body">
        <h3>Personal Details</h3>
        <p>Email : <span>{{data.p_email}}</span></p>
        <p>Phone: <span>{{data.p_phone}}</span></p>
      </div>
      <h3>Emergency Details</h3>
      <p>Email : <span>{{data.e_email}}</span></p>
      <p>Phone: <span>{{data.e_phone}}</span></p>
      <div class="modal-footer text-right">
        <button class="modal-default-button" @click="savePost()">
          Ok
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['show', 'data'],
    methods: {
      close () {
        this.show = false
        this.$emit('show-details', this.show)
      },
      savePost: function () {
        this.show = false
        this.$emit('show-details', this.show)
      }
    }
  }
</script>
<style scoped>

</style>


