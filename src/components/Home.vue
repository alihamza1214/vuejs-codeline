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
         <weather city="London" :temperature="london.the_temp" :max_temp="london.max_temp" :min_temp="london.min_temp" :icon="london.icon"></weather>
         <weather city="Berlin" :temperature="berlin.the_temp" :max_temp="berlin.max_temp" :min_temp="berlin.min_temp" :icon="berlin.icon"></weather>
         <weather city="Istanbul" :temperature="istanbul.the_temp" :max_temp="istanbul.max_temp" :min_temp="istanbul.min_temp" :icon="istanbul.icon"></weather>
         <weather city="Helsinki" :temperature="helsinki.the_temp" :max_temp="helsinki.max_temp" :min_temp="helsinki.min_temp" :icon="helsinki.icon"></weather>
         <weather city="Dublin" :temperature="dublin.the_temp" :max_temp="dublin.max_temp" :min_temp="dublin.min_temp" :icon="dublin.icon"></weather>
         <weather city="Vancouver" :temperature="vancouver.the_temp" :max_temp="vancouver.max_temp" :min_temp="vancouver.min_temp" :icon="vancouver.icon"></weather>
        </tbody>
      </table>
    </div>
    </center>

  </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('weather', {
        props: ['city','temperature','max_temp','min_temp','icon'],
        template: '<tr><td>{{city}}</td><td>{{temperature}}</td><td>{{max_temp}}</td><td>{{min_temp}}</td><td><img :src="icon" /></td></tr>'
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
                cities: ['London', 'Berlin', 'Istanbul','Helsinki','Dublin','Vancouver']
            }
        },
        mounted() {
            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=44418"}).then(result => {
                this.london = result.data.consolidated_weather[0];
                this.london.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";
            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=638242"}).then(result => {
                this.berlin = result.data.consolidated_weather[0];
                this.berlin.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=2344116"}).then(result => {
                this.istanbul = result.data.consolidated_weather[0];
                this.istanbul.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=565346"}).then(result => {
                this.helsinki = result.data.consolidated_weather[0];
                this.helsinki.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=560743"}).then(result => {
                this.dublin = result.data.consolidated_weather[0];
                this.dublin.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";

            }, error => {
                console.error(error);
            });

            axios({ method: "GET", "url": "https://cart.omnisell.pk/weather.php?command=location&woeid=9807"}).then(result => {
                this.vancouver = result.data.consolidated_weather[0];
                this.vancouver.icon = "https://www.metaweather.com/static/img/weather/ico/"+result.data.consolidated_weather[0].weather_state_abbr+".ico";

            }, error => {
                console.error(error);
            });
        },
        methods: { }


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
