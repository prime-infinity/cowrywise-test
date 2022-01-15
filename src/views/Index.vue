<template>
  <div class="container-fluid">

    <!-- search form -->
    <div class="row justify-content-center pt-5 pb-5" style="background-color:#dde2e9">

      <div class="col-12 col-md-10 pt-2 pb-2 pt-md-5 pb-md-5">
        
          <div class="input-group rounded pt-2 pb-2 pt-md-5 pb-md-5">

            <span class="input-group-text bg-white border-0" style="width:100%;">
              <i @click="searchImage" class="fas fa-search pl-3 pr-3 pt-3 pb-3" style="cursor:pointer"></i>

              <input type="search" style="border:0px;" class="form-control ml-3" v-model="searchString" placeholder="search for photo" aria-label="Search" aria-describedby="search-addon" />
            </span>
            
          </div>

      </div>  

    </div>    

    <!-- other part -->

    <div class="row justify-content-center" style="margin-top:-7vw;">
      <div class="col-12 col-md-9 pl-0 pr-0">

        <div class="card-columns">

          <div class="card border-0"  v-for="photo in photos" :key="photo.id">

            <div class="new" @click="showImage(photo.id)">
              
              <img class="card-img-top img-fluid rounded-lg" v-lazy="photo.urls.regular" :height="photo.height" :width="photo.width" alt="Card image cap">
            
            <div class="overlay"></div>
            </div>
            

            <div class="text-overlay text-white">

              <span class="h5">{{photo.user.name}}</span> <br>
              <span>{{photo.user.location}}</span>

            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- Modal show d-block -->
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">  
      <div v-if="showModal" class="modal fade show d-block" style="background-color:rgba(0,0,0,0.3);" id="exampleModalCenter" >
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body p-0">
              <span aria-hidden="true" class="float-close" @click="showModal = false">&times;</span>

              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 p-0" v-if="clickedImage.urls">
                    <img v-lazy="clickedImage.urls.small" :height="clickedImage.height" :width="clickedImage.width" class="img-fluid" alt="">
                  </div>
                </div>
              </div>

            </div>

            <div class="modal-footer" v-if="clickedImage.user">
              <div class="container">
                <div class="row">
                  <div class="col-12">

                    <span class="h5 font-weight-bold">{{clickedImage.user.name}}</span> <br>
                    <span class="text-muted">{{clickedImage.user.location}}</span>

                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </transition>
      

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      photos:[],
      searchString:"African",
      showModal:false,
      clickedImage:{}
    }
  },
  methods:{
    getImages:function(){
      axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=8&query=${this.searchString}&client_id=yHstGzMP9zVehXPDQ4ftvCAm-umn8XpQwddjQo3nY_Q`)
      .then((res) =>{
          this.photos = res.data.results
      })
      .catch((error) => {
          console.log(error)
      });
    },
    showImage:function(e){
      this.clickedImage = {}
      this.showModal = true

      axios.get(`https://api.unsplash.com/photos/${e}?client_id=yHstGzMP9zVehXPDQ4ftvCAm-umn8XpQwddjQo3nY_Q`)
      .then((res) =>{
          this.clickedImage = res.data
      })
      .catch((error) => {
          console.log(error)
      });
    },
    searchImage:function(){
      this.getImages()
    }
  },
  mounted(){
    this.getImages()
  }
}
</script>
<style scoped>
  .text-overlay{
    position: absolute;
    bottom: 5%;
    left: 5%;
  }
  .overlay {
    position: absolute; 
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.1); 
    cursor: pointer; 
  }
  .new{
    position: relative;
  }
  .modal{
    overflow-x: hidden;
    overflow-y: auto;
  }
  .float-close{
    position: absolute;
    right: 5%;
    font-size: xxx-large;
    z-index: 2;
    cursor: pointer;
    color: rgb(241, 156, 156);
  }
</style>