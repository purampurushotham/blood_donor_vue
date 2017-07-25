<template>
  <div class = "container">
    <hr />
    <div class="row">
      <div class="col-md-12">
        <h1> Search Donor </h1>
        <form id="myForm" @submit.prevent="searchDonor()">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
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
      <v-client-table :data="tableData" :columns="columns" :options= "options" ></v-client-table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bloodGroup: '',
        city: '',
        columns: ['firstName', 'lastName', 'bloodGroup', 'city', 'occupation', 'dob', 'martial_status'],
        tableData: window.donors,
        options: {
        }
      }
    },
    created () {
      console.log('tableData')
      console.log(this.tableData[0])
      console.log('tableData')
    },
    methods: {
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
</script>
