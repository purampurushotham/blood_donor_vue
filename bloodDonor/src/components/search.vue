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
  import grid from 'vue2-bootstrap-table'
  import showModal from './showModal'
  import { ModelSelect } from 'vue-search-select'
  import postModal from './postModal'
  import postRequests from './postRequests'
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
        tableData: JSON.parse(localStorage.getItem('donors'))
      }
    },
    created () {
      console.log('creeated')
      let some = JSON.parse(localStorage.getItem('donors'))
      console.log(some)
      some.map((eachBloodDonor, key) => {
        this.bloodGroup_options.push({value: eachBloodDonor.bloodGroup, text: eachBloodDonor.bloodGroup})
        this.city_options.push({value: eachBloodDonor.city, text: eachBloodDonor.city})
      })
    },
    methods: {
      showDetails: function (show) {
        this.show = show
      },
      showposts: function (posts) {
        console.log('show posts')
        console.log(JSON.parse(localStorage.getItem('postsRequests')))
        this.posts = JSON.parse(localStorage.getItem('postsRequests'))
        console.log(this.posts)
        this.post = posts
      },
      rowClick: function (row) {
        console.log(this)
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
        JSON.parse(localStorage.getItem('donors')).map((object, index) => {
          if (object.bloodGroup === this.bloodGroup || object.city === this.city) {
            searchedDonors.push(object)
          }
        })
        if (this.bloodGroup === '' && this.city === '') {
          this.tableData = JSON.parse(localStorage.getItem('donors'))
        } else {
          this.tableData = searchedDonors
        }
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
