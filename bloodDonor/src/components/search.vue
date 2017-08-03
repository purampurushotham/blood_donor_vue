<template>
  <div class = "container">
    <hr />
    <div class="row card">
      <div class="col-md-12 card-block">
        <h1 class="card-title"> Search Donor </h1>
        <form id="myForm">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 ">
              <div class="form-group row">
                <label for="bloodGroup" class="col-sm-2 col-form-label col-form-label-lg">Blood Group</label>
                <div class="col-sm-10">
                  <model-select :options="bloodGroup_options"
                                v-model="bloodGroup"
                                placeholder="select item2">
                  </model-select>
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label col-form-label-lg">City</label>
                <div class="col-sm-10">
                  <model-select :options="city_options"
                                v-model="city"
                                placeholder="select item2">
                  </model-select>
                </div>
              </div>
            </div>
          </div>
          <button  @click="searchDonor()" class="btn btn-success">Search</button>
          <button type="reset" class="btn btn-warning">Reset</button>
        </form>
      </div>
    </div>
    <hr />
    <div>
      <grid class="grid"
            :data="tableData"
            :columns="headers"
            :rowsPerPage="3"
            @clickRow="rowClick">
      </grid>
    </div>
    <div v-if="show">
      <show-modal :show.sync="show" :data="rowData" v-on:show-details="showDetails"></show-modal>
    </div>
  </div>

</template>
<script>
  import moment from 'moment'
  import grid from 'vue2-bootstrap-table'
  import showModal from './showModal'
  import { ModelSelect } from 'vue-search-select'
  import donorsData from '../donorsData'
  let searchedResults = donorsData.donors
  export default {
    data () {
      return {
        show: false,
        post: false,
        posts: JSON.parse(localStorage.getItem('postsRequests')),
        bloodGroup_options: [],
        city_options: [],
        rowData: {},
        bloodGroup: ' ',
        city: '',
        columns: ['firstName', 'lastName', 'bloodGroup', 'city', 'occupation', 'dob', 'martial_status', 'edit'],
        headers: [
          {
            title: 'First Name',
            path: 'firstName'
          }, {
            title: 'Blood Group',
            path: 'bloodGroup'
          }, {
            title: 'Last Name',
            path: 'lastName'
          }, {
            title: 'Date Of Birth',
            path: 'dob'
          }, {
            title: 'City',
            path: 'city'
          }
        ],
        tableData: searchedResults
      }
    },
    created () {
      console.log('creeated')
      this.checkRecentDonor()
      let options = []
      options = this.getter('donors')
      options.map((eachBloodDonor, key) => {
        console.log('oprtiosn')
        console.log(eachBloodDonor.recentDonor)
        console.log('oprtions')
        this.bloodGroup_options.push({value: eachBloodDonor.bloodGroup, text: eachBloodDonor.bloodGroup})
        this.city_options.push({value: eachBloodDonor.city, text: eachBloodDonor.city})
      })
    },
    methods: {
      showDetails: function (data) {
        console.log('show details')
        console.log(data)
        this.show = data.show
        this.checkRecentDonor()
        console.log('show details')
      },
      rowClick: function (row) {
        this.show = true
        this.rowData = row
      },
      searchDonor () {
        console.log('seatrch donors')
        let searchedDonors = []
        searchedResults.map((object, index) => {
          console.log(object.recentDonor.exists)
          if ((object.bloodGroup === this.bloodGroup && object.city === this.city) && (!object.recentDonor.exists)) {
            searchedDonors.push(object)
            console.log(searchedDonors)
          } else if ((object.bloodGroup === this.bloodGroup && this.city === '')) {
            searchedDonors.push(object)
          } else if ((object.bloodGroup === '' && this.city === object.city)) {
            searchedDonors.push(object)
          }
        })
        if (this.bloodGroup === '' && this.city === '') {
          this.tableData = searchedResults
        } else {
          this.tableData = searchedDonors
        }
      },
      checkRecentDonor () {
        console.log('checkDonor in search')
        searchedResults = []
        this.getter('donors').map((eachBloodDonor, key) => {
          console.log('eachObject')
          console.log(eachBloodDonor.recentDonor)
          console.log('eachObject')
          console.log(moment(new Date(), 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'), eachBloodDonor.recentDonor.reachedTime)
          if (eachBloodDonor.recentDonor.exists) {
            console.log('first Loop')
            if (moment(new Date(), 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss') > eachBloodDonor.recentDonor.reachedTime) {
              eachBloodDonor.recentDonor = {exists: false, recentDonorTime: '', reachedTime: ''}
              console.log('second Loop')
              searchedResults.push(eachBloodDonor)
              console.log('reacted after 20 seconds')
              console.log(searchedResults)
            } else {
              console.log('first else block')
            }
          } else {
            console.log('else')
            searchedResults.push(eachBloodDonor)
          }
        })
        console.log('after mapp')
        console.log(searchedResults)
        console.log('after mapp')
        this.tableData = searchedResults
        console.log('created')
      }
    },
    components: {
      grid: grid,
      showModal,
      ModelSelect
    }
  }
</script>
