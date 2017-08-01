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
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="data.recentDonor.exists" v-on:change="recentDonor($event.target)"> Mark as Recent Donor
        </label>
      </div>
      <div class="modal-footer text-right">
        <button class="modal-default-button" @click="savePost()">
          Ok
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    beforeMount () {
      console.log('before mount')
    },
    created () {
      console.log('bdsajgfjds')
      console.log(this.data)
    },
    props: ['show', 'data'],
    methods: {
      close () {
        this.show = false
        this.$emit('show-details', {show: this.show, recentDonor: this.data.recentDonor.exists})
      },
      savePost: function () {
        console.log('savePost')
        this.show = false
        if (this.data.recentDonor.exists) {
          JSON.parse(localStorage.getItem('donors')).map((object, index) => {
            if (object.id === this.data.id) {
              object.recentDonor.exists = this.data.recentDonor.exists
              this.data.recentDonor.recentDonorTime = moment(new Date(), 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
              this.data.recentDonor.reachedTime = moment().add(2, 'minutes').format('YYYY-MM-DD HH:mm:ss')
            }
          })
        }
        this.checkDonorStatus(this.data)
        this.$emit('show-details', {show: this.show, recentDonor: this.data.recentDonor})
      },
      recentDonor: function (event) {
        console.log('recent donior')
        console.log(event.checked)
        if (event.checked) {
          console.log(this.data)
          this.data.recentDonor.exists = true
        }
        console.log('recent donior')
      },
      checkDonorStatus: function (data) {
        let donorsStatus = []
        donorsStatus = donorsStatus.concat(JSON.parse(localStorage.getItem('donors')))
        console.log('before donor')
        console.log(donorsStatus.length)
        console.log('before donor')
        donorsStatus.map((object, index) => {
          console.log('checkDonorStatus', index)
          if (object.id === data.id) {
            donorsStatus[index].recentDonor = {}
            donorsStatus[index].recentDonor = data.recentDonor
          }
        })
        console.log('donorsStatus')
        console.log(donorsStatus)
        console.log('donorsStatus')
        localStorage.setItem('donors', JSON.stringify(donorsStatus))
        console.log('JSON.parse(localStor')
        console.log(JSON.parse(localStorage.getItem('donors')))
        console.log('JSON.parse(localStor')
      }
    }
  }
</script>
<style scoped>

</style>


