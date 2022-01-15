<template>
  <div class="container-fluid">

    <!-- search form -->
    <div class="row justify-content-center pt-5 pb-5" style="background-color:#dde2e9">

      <div class="col-12 col-md-10 pt-5 pb-5">
        
          <div class="input-group rounded pt-5 pb-5">

            <span class="input-group-text bg-white border-0" style="width:100%;">
              <i class="fas fa-search pl-2"></i>
              <input type="search" style="border:0px;" class="form-control ml-3" placeholder="search for photo" aria-label="Search" aria-describedby="search-addon" />
            </span>
            
          </div>

      </div>  

    </div>    

    <!-- other part -->

    <div class="row justify-content-center" style="margin-top:-7vw;">
      <div class="col-12 col-md-9 pl-0 pr-0">
        <div class="card-columns">

          <div class="card border-0"  v-for="photo in photos" :key="photo.id">

            <div class="new">
              
              <img class="card-img-top img-fluid rounded" v-lazy="photo.urls.regular" :height="photo.height" :width="photo.width" alt="Card image cap">
            
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
      

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      photos:[],
      startString:"African"
    }
  },
  mounted(){
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=8&query=${this.startString}&client_id=yHstGzMP9zVehXPDQ4ftvCAm-umn8XpQwddjQo3nY_Q`)
    .then((res) =>{
        console.log(res.data.results)
        this.photos = res.data.results
    })
    .catch((error) => {
        console.log(error)
    });
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
</style>