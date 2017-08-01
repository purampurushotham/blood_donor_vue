<template>
  <div class = "container">
    <hr />
    <div class="row card">
      <div class="col-md-12 card-block">
        <h1 class="card-title"> Register Donor </h1>
        <hr />
        <form id="myForm" @submit.prevent="registerDonor()">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label for="firstName" class="col-sm-2 col-form-label col-form-label-lg">First Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="firstName" placeholder="First Name" v-model="donor.firstName">
                </div>
              </div>
              <div class="form-group row">
                <label for="occupation" class="col-sm-2 col-form-label col-form-label-lg">Occupation</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="occupation" placeholder="occupation" v-model="donor.occupation">
                </div>
              </div>
              <div class="form-group row">
                <label for="bloodGroup" class="col-sm-2 col-form-label col-form-label-lg">Blood Group</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="bloodGroup" placeholder="Blood Group" v-model="donor.bloodGroup">
                </div>
              </div>
              <div class="form-group row">
                <label class="form-check-label col-sm-2 col-form-label-lg">Martial Status</label>
                <div class="col-sm-5">
                  <input type="radio" name="options" id="married" autocomplete="off" v-model="donor.martial_status" value= "married"> Married
                  <input type="radio" name="options" id="unmarried" autocomplete="off" v-model="donor.martial_status" value= "unmarried"> Un Married
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group row">
                <label for="lastName" class="col-sm-2 col-form-label col-form-label-lg">Last Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="lastName" placeholder="Last Name" v-model="donor.lastName">
                </div>
              </div>
              <div class="form-group row">
                <label for="dob" class="col-sm-2 col-form-label col-form-label-lg">Dob</label>
                <div class="col-sm-10">
                  <div class="form-control form-control-lg">
                    <datepicker  format="d MMM yyyy"placeholder="Date of Birth" v-model="donor.dob"></datepicker>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label col-form-label-lg">City</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="city" placeholder="City" v-model="donor.city">
                </div>
              </div>
            </div>
            <hr />
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <h3>Personal Contact Details</h3>
                  <hr />
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-lg" id="p_email" placeholder="email" v-model="donor.p_email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control form-control-lg" id="p_phone" placeholder="phone" v-model="donor.p_phone">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h3 class="card-title">Emergency Contact Details</h3>
                  <hr />
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-lg" id="e_email" placeholder="email" v-model="donor.e_email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control form-control-lg" id="e_phone" placeholder="phone" v-model="donor.e_phone">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <button type="submit"class="btn btn-success btn-lg">Submit</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import Datepicker from 'vuejs-datepicker'
  import moment from 'moment'
  let donorsList = []
  export default {
    components: {
      Datepicker
    },
    data () {
      return {
        donor: {
          id: '',
          firstName: '',
          lastName: '',
          occupation: '',
          bloodGroup: '',
          city: '',
          dob: '',
          martial_status: '',
          p_phone: '',
          p_email: '',
          e_email: '',
          e_phone: '',
          recentDonor: {
            recentDonorTime: '',
            reachedTime: '',
            exists: false
          }

        }
      }
    },
    created () {
      console.log('dsfsdfs')
      donorsList = (JSON.parse(localStorage.getItem('donors')))
      console.log(JSON.parse(localStorage.getItem('donors')))
      console.log('dsfsdfs')
    },
    methods: {
      registerDonor: function () {
        this.donor.id = Date.now()
        this.donor.dob = moment(this.donor.dob, 'YYYY-MM-DD').format('DD/MM/YYYY')
        localStorage.setItem('donors', JSON.stringify(this.donor))
        donorsList.push(JSON.parse(localStorage.getItem('donors')))
        localStorage.setItem('donors', JSON.stringify(donorsList))
        console.log(localStorage.donors)
      }
    }
  }
</script>
