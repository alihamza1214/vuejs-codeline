<!--
//london 44418
//berlin 638242
//istanbul 2344116
//helsinki 565346
//dublin 560743
//vancuover 9807
-->
<template>
  <div class="home">

    <center>
        <br>
    <div class="row">
        <div class="search-wrapper">
            <form v-on:submit="Getsearch" action="#" method="get">
            <input type="text" v-model="search_field"  placeholder="Search Location.."/>
            <input type="submit" value="Search" />
            </form>
        </div>
    </div><br>
    <div class="quote-area" style="margin: 0 auto">

      <table class="table table-hover" border="1px">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Max Temperature</th>
          <th>Min Temperature</th>
          <th>Icon</th>
        </tr>

        </thead>
        <tbody>
         <weather city="London" :woeid="london.woeid" :temperature="london.the_temp" :max_temp="london.max_temp" :min_temp="london.min_temp" :icon="london.icon"></weather>
         <weather city="Berlin" :woeid="berlin.woeid" :temperature="berlin.the_temp" :max_temp="berlin.max_temp" :min_temp="berlin.min_temp" :icon="berlin.icon"></weather>
         <weather city="Istanbul" :woeid="istanbul.woeid" :temperature="istanbul.the_temp" :max_temp="istanbul.max_temp" :min_temp="istanbul.min_temp" :icon="istanbul.icon"></weather>
         <weather city="Helsinki" :woeid="helsinki.woeid" :temperature="helsinki.the_temp" :max_temp="helsinki.max_temp" :min_temp="helsinki.min_temp" :icon="helsinki.icon"></weather>
         <weather city="Dublin" :woeid="dublin.woeid" :temperature="dublin.the_temp" :max_temp="dublin.max_temp" :min_temp="dublin.min_temp" :icon="dublin.icon"></weather>
         <weather city="Vancouver" :woeid="vancouver.woeid" :temperature="vancouver.the_temp" :max_temp="vancouver.max_temp" :min_temp="vancouver.min_temp" :icon="vancouver.icon"></weather>
        </tbody>
      </table>
    </div>
    </center>

  </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('weather', {
        props: ['city','temperature','max_temp','min_temp','icon','woeid'],
        template: '<tr><td><a :href="woeid" >{{city}}</a></td><td>{{temperature}}</td><td>{{max_temp}}</td><td>{{min_temp}}</td><td><img :src="icon" /></td></tr>'
    })
    import axios from "axios";

    export default {
  name: 'Home',
        data () {
            return {
                london: "",
                berlin: "",
                istanbul: "",
                helsinki: "",
                dublin: "",
                vancouver: "",
                cities: ['London', 'Berlin', 'Istanbul','Helsinki','Dublin','Vancouver'],
                search_field:''
            }
        },
        mounted() {
            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=44418"}).then(result => {
                this.london = result.data.consolidated_weather[0];
                this.london.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
                this.london.woeid = "weather/44418";
            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=638242"}).then(result => {
                this.berlin = result.data.consolidated_weather[0];
                this.berlin.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
                this.berlin.woeid = "/weather/638242";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=2344116"}).then(result => {
                this.istanbul = result.data.consolidated_weather[0];
                this.istanbul.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
                this.istanbul.woeid = "/weather/2344116";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=565346"}).then(result => {
                this.helsinki = result.data.consolidated_weather[0];
                this.helsinki.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
                this.helsinki.woeid = "/weather/565346";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=560743"}).then(result => {
                this.dublin = result.data.consolidated_weather[0];
                this.dublin.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
                this.dublin.woeid = "/weather/560743";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=9807"}).then(result => {
                this.vancouver = result.data.consolidated_weather[0];
                this.vancouver.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
                this.vancouver.woeid = "/weather/9807";

            }, error => {
                console.error(error);
            });
        },
        methods: {

            Getsearch: function(event){

                event.preventDefault();
                window.location.href = '/search/'+this.search_field;
            }
        }


}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
