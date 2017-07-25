<template>
  <div class = "container">
    <hr />
    <div class="row">
      <div class="col-md-12">
        <h1> Register Donor </h1>
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
            </div>
            <div class="col-md-6">
              <div class="form-group row">
                <label for="lastName" class="col-sm-2 col-form-label col-form-label-lg">Last Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="lastName" placeholder="Last Name" v-model="donor.lastName">
                </div>
              </div>
              <div class="form-group row">
                <label for="dob" class="col-sm-2 col-form-label col-form-label-lg">DOB</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="dob" placeholder="DOB" v-model="donor.dob">
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label col-form-label-lg">City</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="city" placeholder="City" v-model="donor.city">
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-success btn-lg">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        donor: {
          firstName: '',
          lastName: '',
          occupation: '',
          bloodGroup: '',
          city: '',
          dob: ''

        }
      }
    },
    methods: {
      registerDonor: function () {
        window.donors.push(this.donor)
        console.log(window.donors)
      }

    }
  }
</script>
