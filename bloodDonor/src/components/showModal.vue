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
        <h3>Emergency Details</h3>
        <p>Email : <span>{{data.e_email}}</span></p>
        <p>Phone: <span>{{data.e_phone}}</span></p>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="data.recentDonor.exists" v-on:change="recentDonor($event.target)"> Mark as Recent Donor
          </label>
        </div>
      </div>
      <div>
        <button class="btn btn-primary"  @click="savePost()">Ok</button>
        <button class="btn btn-danger"  @click="close()">cancel</button>
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
          this.getter('donors').map((object, index) => {
            console.log('show Modal')
            console.log(object.id, this.data.id)
            console.log('show Modal')
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
        donorsStatus = donorsStatus.concat(this.getter('donors'))
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
        this.setter('donors', donorsStatus)
        // localStorage.setItem('donors', JSON.stringify(donorsStatus))
        /* console.log('JSON.parse(localStor')
         console.log(JSON.parse(localStorage.getItem('donors')))
         console.log('JSON.parse(localStor')
         */
      }
    }
  }
</script>
<style scoped>

</style>


