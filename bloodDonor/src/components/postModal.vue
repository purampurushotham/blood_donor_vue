<template>
  <div class="modal-mask" @click="close" v-show="post" transition="modal">
    <div class="modal-container"  @click.stop>

      <div class="modal-header">
        <h3>Seeker Contact Information</h3>
      </div>

      <div class="modal-body">
        <form id="myForm" @submit.prevent="postARequest()">
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
                <label for="Phone" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="s_phone" placeholder="phone number" v-model="s_phone">
                </div>
              </div>
              <div class="form-group row">
                <label for="comment" class="col-sm-2 col-form-label col-form-label-lg">Comment</label>
                <div class="col-sm-10">
                  <textarea class="form-control form-control-lg" id="comment" placeholder="add comment here" v-model="comment"></textarea>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-success ">Submit</button>
          <button  class="btn btn-warning " @click="savePost">close</button>
        </form>
        <div class="modal-footer text-right">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['post'],
    data () {
      return {
        bloodGroup: '',
        s_phone: '',
        comment: ''
      }
    },
    methods: {
      savePost () {
        this.post = false
        this.$emit('show-posts', this.post)
      },
      postARequest () {

      }
    }
  }
</script>
<style>
  * {
    box-sizing: border-box;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 70%;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .text-right {
    text-align: right;
  }

  .form-label {
    display: block;
    margin-bottom: 1em;
  }

  .form-label > .form-control {
    margin-top: 0.5em;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
  }

  .modal-enter, .modal-leave {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>


