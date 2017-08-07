<template>
  <div class = "container">
    <hr />
    <div class="row card">
      <div class="col-md-12 card-block">
        <h1 class="card-title"> Register Donor </h1>
        <hr />
        <form id="myForm" @submit.prevent="donorRegistration()">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row" :class="{error: validation.hasError('donor.firstName')}">
                <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
                <div class="content col-sm-10"><input type="text" class="form-control" placeholder="First Name" v-model="donor.firstName"/></div>
                <div class="message text-danger">{{ validation.firstError('donor.firstName') }}</div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('donor.occupation')}">
                <label for="occupation" class="col-sm-2 col-form-label col-form-label-lg">Occupation</label>
                <div class="content col-sm-10"><input type="text" class="form-control" placeholder="Occupation" v-model="donor.occupation"/></div>
                <div class="message text-danger">{{ validation.firstError('donor.occupation') }}</div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('donor.bloodGroup')}">
                <label for="bloodGroup" class="col-sm-2 col-form-label col-form-label-lg">Blood Group</label>
                <div class="content col-sm-10"><input type="text" class="form-control" placeholder="Blood Group" v-model="donor.bloodGroup"/></div>
                <div class="message text-danger">{{ validation.firstError('donor.bloodGroup') }}</div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('donor.martial_status')}">
                <label class="form-check-label col-sm-2 col-form-label-lg">Martial Status</label>
                <div class="col-sm-5 content">
                  <input type="radio" name="options" id="married" autocomplete="off" v-model="donor.martial_status" value= "married"> Married
                  <input type="radio" name="options" id="unmarried" autocomplete="off" v-model="donor.martial_status" value= "unmarried"> Un Married
                </div>
                <div class="message text-danger">{{ validation.firstError('donor.martial_status') }}</div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group row" :class="{error: validation.hasError('donor.lastName')}">
                <label for="lastName" class="col-sm-2 col-form-label col-form-label-lg">Last Name</label>
                <div class="content col-sm-10"><input type="text" class="form-control" placeholder="Last Name" v-model="donor.lastName"/></div>
                <div class="message text-danger">{{ validation.firstError('donor.lastName') }}</div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('donor.dob')}">
                <label for="dob" class="col-sm-2 col-form-label col-form-label-lg">Date Of Birth</label>
                <div class="col-sm-10 content">
                  <datepicker input-class="form-control date-picker" format="d MMM yyyy"placeholder="Date of Birth" v-model="donor.dob">
                  </datepicker>
                </div>
                <div class="message text-danger">{{ validation.firstError('donor.dob') }}</div>
              </div>
              <div class="form-group row" :class="{error: validation.hasError('donor.city')}">
                <label for="city" class="col-sm-2 col-form-label col-form-label-lg">City</label>
                <div class="content col-sm-10"><input type="text" class="form-control" placeholder="City" v-model="donor.city"/></div>
                <div class="message text-danger">{{ validation.firstError('donor.city') }}</div>
              </div>
              <hr />
            </div>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6">
                <h3>Personal Contact Details</h3>
                <hr />
                <div class="form-group row" :class="{error: validation.hasError('donor.p_email')}">
                  <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                  <div class="content col-sm-10"><input type="email" class="form-control" placeholder="Email" v-model="donor.p_email"/></div>
                  <div class="message text-danger">{{ validation.firstError('donor.p_email') }}</div>
                </div>
                <div class="form-group row" :class="{error: validation.hasError('donor.p_phone')}">
                  <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                  <div class="content col-sm-10"><input type="text" class="form-control" placeholder="Phone" v-model="donor.p_phone"/></div>
                  <div class="message text-danger">{{ validation.firstError('donor.p_phone') }}</div>
                </div>
              </div>
              <div class="col-md-6">
                <h3 class="card-title">Emergency Contact Details</h3>
                <hr />
                <div class="form-group row" :class="{error: validation.hasError('donor.e_email')}">
                  <label for="email" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                  <div class="content col-sm-10"><input type="email" class="form-control" placeholder="Email" v-model="donor.e_email"/></div>
                  <div class="message text-danger">{{ validation.firstError('donor.e_email') }}</div>
                </div>
                <div class="form-group row" :class="{error: validation.hasError('donor.e_phone')}">
                  <label for="phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                  <div class="content col-sm-10"><input type="text" class="form-control" placeholder="Phone" v-model="donor.e_phone"/></div>
                  <div class="message text-danger">{{ validation.firstError('donor.e_phone') }}</div>
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
  import { Validator } from '../validator'
  import Datepicker from 'vuejs-datepicker'
  import router from '../router'
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
      console.log('created')
      if (this.getter('donors') != null) {
        donorsList = donorsList.concat(this.getter('donors'))
      }
      console.log(donorsList)
    },
    destroyed () {
      donorsList = []
    },
    validators: {
      'donor.firstName': function (value) {
        console.log(Validator.value(value))
        return Validator.value(value).required('First Name is required')
      },
      'donor.lastName': function (value) {
        return Validator.value(value).required('Last Name is required')
      },
      'donor.occupation': function (value) {
        return Validator.value(value).required('Occupation is required')
      },
      'donor.bloodGroup': function (value) {
        return Validator.value(value).required('Blood Group is required')
      },
      'donor.city': function (value) {
        return Validator.value(value).required('City is required')
      },
      'donor.dob': function (value) {
        return Validator.value(value).required('Date Of Birth is required')
      },
      'donor.martial_status': function (value) {
        return Validator.value(value).required('Martial Status is required')
      },
      'donor.p_email': function (value) {
        return Validator.value(value).required('Email is required').email()
      },
      'donor.p_phone': function (value) {
        return Validator.value(value).required('Phone is required').digit('only digits').length(10)
      },
      'donor.e_email': function (value) {
        return Validator.value(value).required('Email is required').email()
      },
      'donor.e_phone': function (value) {
        return Validator.value(value).required('Phone is required').digit('only digits').length(10)
      }
    },
    methods: {
      donorRegistration () {
        this.$validate().then(success => {
          if (success) {
            this.donor.id = Date.now()
            this.donor.dob = moment(this.donor.dob, 'YYYY-MM-DD').format('DD/MM/YYYY')
            this.setter('donors', this.donor)
            donorsList.push(this.getter('donors'))
            this.setter('donors', donorsList)
            router.push('/search')
          }
        })
      }
    }
  }
</script>
