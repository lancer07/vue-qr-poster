<template>
  <div id="app">
    <h1>create a qr-poster by Vue （二维码海报生成器）</h1>
    <a href="https://github.com/lancer07/vue-qr-poster  " style="position:absolute;right:0;top:0">
      <img :src="fork" style="width:200px"/>
    </a>
    <poster
      :shareLink="shareLink"
      :bgPic="bgPic"
      bgSize="629,695"
      :qrSize="160"
      qrColor="#000"
      qrBackground="#fff"
      qrPosition="242,335"
    ></poster>
  </div>
</template>

<script>
import Poster from '@/components/Poster.vue'
export default {
  name: 'app',
  components:{
    Poster
  },
  data () {
    return {
      shareLink: 'https://github.com/lancer07/vue-qr-poster',
      bgPic: require('@/assets/bg.png'),
      fork: require('@/assets/fork.jpg')
    }
  }
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
