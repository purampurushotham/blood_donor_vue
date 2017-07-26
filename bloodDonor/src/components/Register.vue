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
                <label for="dob" class="col-sm-2 col-form-label col-form-label-lg">DOB</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control form-control-lg" id="dob" placeholder="DOB" v-model="donor.dob">
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
                      <input type="email" class="form-control form-control-lg" id="p_email" placeholder="City" v-model="donor.p_email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control form-control-lg" id="p_phone" placeholder="City" v-model="donor.p_phone">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h3 class="card-title">Emergency Contact Details</h3>
                  <hr />
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-lg" id="e_email" placeholder="City" v-model="donor.e_email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control form-control-lg" id="e_phone" placeholder="City" v-model="donor.e_phone">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <button type="submit" class="btn btn-success btn-lg">Submit</button>
          </div>

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
          dob: '',
          martial_status: '',
          p_phone: '',
          p_email: '',
          e_email: '',
          e_phone: ''

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
