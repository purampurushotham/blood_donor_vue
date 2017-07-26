<template>
  <div class = "container">
    <hr />
    <div class="row card">
      <div class="col-md-12 card-block">
        <h1 class="card-title"> Search Donor </h1>
        <form id="myForm" @submit.prevent="searchDonor()">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
              <div class="form-group row">
                <label for="bloodGroup" class="col-sm-2 col-form-label col-form-label-lg">Blood Group</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="bloodGroup" placeholder="Blood Group" v-model="bloodGroup">
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label col-form-label-lg">City</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="city" placeholder="City" v-model="city">
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-success btn-lg">Submit</button>
        </form>
      </div>
    </div>
    <hr />
    <div>
      <v-client-table :data="tableData" :columns="columns" :options= "options" >
      </v-client-table>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data () {
      return {
        bloodGroup: '',
        city: '',
        columns: ['firstName', 'lastName', 'bloodGroup', 'city', 'occupation', 'dob', 'martial_status', 'edit'],
        tableData: window.donors,
        options: {
          headings: {
            firstName: 'First Name',
            lastName: 'Last Name',
            bloodGroup: 'Blood Group',
            city: 'City',
            occupation: 'Occupation',
            dob: 'Date Of Birth',
            martial_status: 'martial status',
            edit: 'Edit'
          },
          templates: {
            edit: 'show'
          }
        }
      }
    },
    created () {
      console.log('tableData')
      console.log(this.tableData[0])
      console.log('tableData')
    },
    methods: {
      showItem: function (row) {
        console.log(row)
      },
      searchDonor () {
        let searchedDonors = []
        window.donors.map((object, index) => {
          if (object.bloodGroup === this.bloodGroup || object.city === this.city) {
            searchedDonors.push(object)
          }
        })
        if (this.bloodGroup === '' && this.city === '') {
          this.tableData = window.donors
        } else {
          this.tableData = searchedDonors
        }
      }
    }
  }
  Vue.component('show', {
    props: ['data'],
    template: `<button class='btn btn-info' @click='View'>View</button>`,
    methods: {
      View () {
        console.log(this.data)
      }
    }
  })
</script>
