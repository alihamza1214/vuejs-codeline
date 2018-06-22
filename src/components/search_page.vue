<!--
//london 44418
//berlin 638242
//istanbul 2344116
//helsinki 565346
//dublin 560743
//vancuover 9807
-->
<template>
  <div class="weather_detail">
      <center>
       Weather Details of Location {{msg}}
          <br>
          <br>
          <div class="search-wrapper">
              <form v-on:submit="Getsearch" action="#" method="get">
                  <input type="text" v-model="search_field" />
                  <input type="submit" value="Search" />
              </form>
          </div>
          <br>
    <table v-if="results_status" class="table" border="1px">
        <thead>
        <tr>
            <th>ID</th>
            <th>State</th>
            <th>Wind Direction</th>
            <th>Applicable Date</th>
            <th>Day Name</th>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
            <th>Air Pressure</th>
            <th>Humidity</th>
            <th>Visibility</th>
            <th>Predictability</th>
            <th>Icon</th>
        </tr>
        <tr >
            <td>{{weather.id}}</td>
            <td>{{weather.weather_state_name}}</td>
            <td>{{weather.wind_direction_compass}}</td>
            <td>{{weather.applicable_date}}</td>
            <td>{{weather.applicable_date | moment}}</td>
            <td>{{weather.wind_speed}}</td>
            <td>{{weather.wind_direction}}</td>
            <td>{{weather.air_pressure}}</td>
            <td>{{weather.humidity}}</td>
            <td>{{weather.visibility}}</td>
            <td>{{weather.predictability}}</td>
            <td><img :src="weather.icon"  /></td>

        </tr>
        </thead>
    </table>

    <div v-else><br><br> No results were found. Try changing the keyword!

    </div>
    </center>

  </div>
</template>

<script>
    import Vue from 'vue'
    import axios from "axios";
import moment from 'moment';
    export default {
  name: 'weather',
        data () {
            return {
                msg:  this.$route.params.keyword,
                weather:'',
                results_status:true,
                search_field:this.$route.params.keyword
            }
        },
        methods: {
            moment: function () {
                return moment();
            }
        },
        filters: {
            moment: function (date) {
                return moment(date).format('dddd');
            }
        },
        mounted() {
            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=search&keyword="+this.$route.params.keyword}).then(result => {
                console.log(result.data.length);

                if(result.data.length!=0){
                                axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid="+result.data[0].woeid}).then(result => {


                                    this.weather = result.data.consolidated_weather[0];
                                    this.weather.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";

                                }, error => {
                                    console.error(error);
                                });
                            }else{
                                this.results_status=false;
                            }


            }, error => {
                console.error(error);
            });
            },
        methods:{
            Getsearch: function(event){

                event.preventDefault();
                window.location.href = '/search/'+this.search_field;
            }
        }

}


</script>
