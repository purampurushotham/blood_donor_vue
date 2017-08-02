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
          <button  @click="searchDonor()" class="btn btn-success">Submit</button>
          <button  class="btn btn-warning" @click="rowClick">Post</button>
        </form>
      </div>
    </div>
    <div v-if="post">
      <post-modal :post.sync="post" v-on:show-posts="showposts"></post-modal>
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
    <div  >
      <post-requests :postsData="posts"></post-requests>
    </div>
  </div>

</template>
<script>
  import moment from 'moment'
  import grid from 'vue2-bootstrap-table'
  import showModal from './showModal'
  import { ModelSelect } from 'vue-search-select'
  import postModal from './postModal'
  import postRequests from './postRequests'
  let searchedResults = []
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
          }, {
            title: 'Occupation',
            path: 'occupation'
          }
        ],
        tableData: searchedResults
      }
    },
    created () {
      console.log('creeated')
      console.log('search')
      console.log(JSON.parse(localStorage.getItem('donors')))
      console.log('search')
      this.checkRecentDonor()
      let some = JSON.parse(localStorage.getItem('donors'))
      some.map((eachBloodDonor, key) => {
        console.log('some')
        console.log(eachBloodDonor)
        console.log('some')
        this.bloodGroup_options.push({value: eachBloodDonor.bloodGroup, text: eachBloodDonor.bloodGroup})
        this.city_options.push({value: eachBloodDonor.city, text: eachBloodDonor.city})
      })
    },
    methods: {
      showDetails: function (data) {
        console.log(data)
        this.show = data.show
        this.checkRecentDonor()
      },
      showposts: function (posts) {
        console.log('show posts')
        console.log(JSON.parse(localStorage.getItem('postsRequests')))
        this.posts = JSON.parse(localStorage.getItem('postsRequests'))
        console.log(this.posts)
        this.post = posts
        this.checkRecentDonor()
      },
      rowClick: function (row) {
        console.log('rpw clic')
        console.log(row)
        if (row.srcElement && row.srcElement.textContent) {
          console.log(this.post)
          this.post = true
        } else {
          this.show = true
          this.rowData = row
        }
      },
      searchDonor () {
        console.log('seatrch donors')
        let searchedDonors = []
        searchedResults.map((object, index) => {
          if ((object.bloodGroup === this.bloodGroup || object.city === this.city) && (!object.recentDonor)) {
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
        let some = JSON.parse(localStorage.getItem('donors'))
        some.map((eachBloodDonor, key) => {
          console.log('eachObject')
          console.log(eachBloodDonor)
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
      postModal,
      ModelSelect,
      postRequests
    }
  }
</script>
