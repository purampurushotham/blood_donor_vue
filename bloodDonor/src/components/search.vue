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
          <button type="submit" class="btn btn-success">Submit</button>
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

  </div>

</template>
<script>
  import grid from 'vue2-bootstrap-table'
  import showModal from './showModal'
  import postModal from './postModal'
  export default {
    components: {
      grid: grid,
      showModal,
      postModal
    },
    data () {
      return {
        show: false,
        post: false,
        rowData: {},
        bloodGroup: '',
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
            title: 'City',
            path: 'city'
          }, {
            title: 'Occupation',
            path: 'occupation'
          }
        ],
        tableData: window.donors
      }
    },
    created () {
      console.log('tableData')
      console.log(this.tableData[0])
      console.log('tableData')
    },
    methods: {
      showDetails: function (show) {
        console.log('show')
        console.log(show)
        console.log('show')
        this.show = show
      },
      showposts: function (posts) {
        this.post = posts
      },
      rowClick: function (row) {
        if (row.srcElement && row.srcElement.textContent) {
          console.log(this.post)
          this.post = true
        } else {
          this.show = true
          this.rowData = row
        }
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
</script>
