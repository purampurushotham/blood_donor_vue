<template>
  <div class = "container">
    <hr />
    <div class="row card">
      <div class="col-md-12 card-block">
        <h1 class="card-title"> Register Donor </h1>
        <hr />
        <form id="myForm" @submit.prevent="validateBeforeSubmit()">
          <div class="row">
            <div class="col-md-6">
              <div class="layout-form">
                <div class="form-group" :class="{error: validation.hasError('firstName')}">
                  <div class="label">Number</div>
                  <div class="content"><input type="text" class="form-control" v-model="donor.firstName" placeholder="only accept odd number"/></div>
                  <div class="message">{{ validation.firstError('firstName') }}</div>
                </div>
              </div>
              <!--
             <div class="form-group row"  :class="{error: validation.hasError('email')}">
                <label for="firstName" class="control-label col-sm-2 col-form-label col-form-label-lg">First Name</label>
                <div class="col-sm-10 content has-icon has-icon-right">
                  <input name="firstName" type="text" class="form-control form-control-lg" placeholder="First Name" v-model="donor.firstName">
                </div>
                <div class="message">{{ validation.firstError('donor.firstName') }}</div>
              </div>

               <div class="form-group row">
                <label for="occupation" class="col-sm-2 col-form-label col-form-label-lg">Occupation</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="occupation" placeholder="occupation" v-model="donor.occupation"
                         v-validate.initial="donor.occupation" data-vv-rules = "required|alpha">
                  <span><p class="text-danger" v-if="errors.has('donor.occupation')">{{ errors.first('donor.occupation') }}</p></span>
                </div>
              </div>
              <div class="form-group row">
                <label for="bloodGroup" class="col-sm-2 col-form-label col-form-label-lg">Blood Group</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="bloodGroup" placeholder="Blood Group" v-model="donor.bloodGroup"
                         v-validate.initial="donor.bloodGroup" data-vv-rules = "required|alpha">
                  <span><p class="text-danger" v-if="errors.has('donor.bloodGroup')">{{ errors.first('donor.bloodGroup') }}</p></span>
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
                  <input type="text" class="form-control form-control-lg" id="lastName" placeholder="Last Name" v-model="donor.lastName"
                         v-validate.initial="donor.lastName" data-vv-rules = "required|alpha">
                  <span><p class="text-danger" v-if="errors.has('donor.lastName')">{{ errors.first('donor.lastName') }}</p></span>
                </div>
              </div>
              <div class="form-group dd row">
                <label for="dob" class="col-sm-2 col-form-label col-form-label-lg">Date Of Birth</label>
                <div class="col-sm-10">
                  <datepicker class="date-picker" input-class="form-control" format="d MMM yyyy"placeholder="Date of Birth" v-model="donor.dob">
                  </datepicker>
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label col-form-label-lg">City</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="city" placeholder="City" v-model="donor.city"
                         v-validate.initial="donor.city" data-vv-rules = "required|alpha">
                  <span><p class="text-danger" v-if="errors.has('donor.city')">{{ errors.first('donor.city') }}</p></span>
                </div>
              </div>
            </div>
              -->

              <hr />
            </div>
            <div class="col-md-12">
              <div class="row">
                <!--<div class="col-md-6">
                  <h3>Personal Contact Details</h3>
                  <hr />
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-lg" id="p_email" placeholder="email" v-model="donor.p_email"
                             v-validate.initial="donor.p_email" data-vv-rules = "required|email">
                      <span><p class="text-danger" v-if="errors.has('donor.p_email')">{{ errors.first('donor.p_email') }}</p></span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control form-control-lg" id="p_phone" placeholder="phone" v-model="donor.p_phone"
                             v-validate.initial="donor.p_phone" data-vv-rules = "required|numeric">
                      <span><p class="text-danger" v-if="errors.has('donor.p_phone')">{{ errors.first('donor.p_phone') }}</p></span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h3 class="card-title">Emergency Contact Details</h3>
                  <hr />
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-lg" id="e_email" placeholder="email" v-model="donor.e_email"
                             v-validate.initial="donor.e_email" data-vv-rules = "required|email">
                      <span><p class="text-danger" v-if="errors.has('donor.e_email')">{{ errors.first('donor.e_email') }}</p></span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control form-control-lg" id="e_phone" placeholder="phone" v-model="donor.e_phone"
                             v-validate.initial="donor.e_phone" data-vv-rules = "required|numeric">
                      <span><p class="text-danger" v-if="errors.has('donor.e_phone')">{{ errors.first('donor.e_phone') }}</p></span>
                    </div>
                  </div>-->
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
  import Vue from 'vue'
  import SimpleVueValidation from 'simple-vue-validator'
  import Datepicker from 'vuejs-datepicker'
  import router from '../router'
  import moment from 'moment'
  let donorsList = []
  Vue.use(SimpleVueValidation)
  let Validator = SimpleVueValidation.Validator
  export default {
    components: {
      Datepicker,
      SimpleVueValidation
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
    validators: {
      'donor.firstName': function (value) {
        console.log('value')
        console.log('')
        console.log(Validator.value(value).required())
        console.log('value')
        return Validator.value(value).required()
        /* 'donor.firstName': function (value) {
         console.log('firsy name')
         return Validator.value(value).required().donor.firstName()
         } */
      }
    },
    created () {
      console.log('created')
      if (this.getter('donors') != null) {
        donorsList = donorsList.concat(this.getter('donors'))
      }
      console.log(donorsList)
    },
    destroyed () {
      donorsList = []
    },
    methods: {
      validateBeforeSubmit (e) {
        console.log('validate All')
        this.$validate().then(function (success) {
          if (success) {
            console.log('register')
            console.log(success)
            // this.registerDonor()
          }
        })
      },
      registerDonor: function () {
        this.donor.id = Date.now()
        this.donor.dob = moment(this.donor.dob, 'YYYY-MM-DD').format('DD/MM/YYYY')
        this.setter('donors', this.donor)
        donorsList.push(this.getter('donors'))
        this.setter('donors', donorsList)
        console.log(localStorage.donors)
        router.push('/search')
      }
    }
  }
</script>
