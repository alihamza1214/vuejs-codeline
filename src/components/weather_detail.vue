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
       Weather Details of ID {{msg}}
<!--
    <table class="table" border="1px">
        <thead>
        <tr>
            <th>ID</th><td>{{weather_details.id}}</td>
        </tr>
        <tr>
            <th>State</th><td>{{weather_details.weather_state_name}}</td>
        </tr>
        <tr>
            <th>Wind Direction</th><td>{{weather_details.wind_direction_compass}}</td>
        </tr>
        <tr>
            <th>Applicable Date</th><td>{{weather_details.applicable_date}}</td>
        </tr>
        <tr>
            <th>Wind Speed</th><td>{{weather_details.wind_speed}}</td>
        </tr>
        <tr>
            <th>Wind Direction</th><td>{{weather_details.wind_direction}}</td>
        </tr>
        <tr>
            <th>Air Pressure</th><td>{{weather_details.air_pressure}}</td>
        </tr>
        <tr>
            <th>Humidity</th><td>{{weather_details.humidity}}</td>
        </tr>
        <tr>
            <th>Visibility</th><td>{{weather_details.visibility}}</td>
        </tr>
        <tr>
            <th>Predictability</th><td>{{weather_details.predictability}}</td>
        </tr>
        </thead>
    </table>
-->
    <table class="table" border="1px">
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
        <tr v-for="weather in weather_details">
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
            <td><img :src="'https://www.metaweather.com/static/img/weather/ico/' + weather.weather_state_abbr+ '.ico'"  /></td>

        </tr>
        </thead>
    </table>
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
                msg:  this.$route.params.woeid,
                weather_details:''
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
            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid="+this.$route.params.woeid}).then(result => {
                this.weather_details = result.data.consolidated_weather;
                //this.weather_details.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
            }, error => {
                console.error(error);
            });
            }

}


</script>
