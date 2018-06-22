<template>
  <div id="app">
<!--
      <img src="./assets/logo.png">
-->


      <h1>MetaWeather.com</h1>
    <img src="https://www.metaweather.com//static/img/weather/png/64/t.png"/>
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/Home";
import weather_detail from "./components/weather_detail";
export default {
  name: 'App',
    components: {Home,weather_detail}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
