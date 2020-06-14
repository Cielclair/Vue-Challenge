<template>
    <div id="app">

      <router-view/>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    created() {
      this.getData()
    },

    methods: {
      ...mapActions([
        'getData'
      ])
    },

    computed: {
      isEmpty () {
        return this.$store.state.info
      }
    },

    watch: {
      isEmpty () {
        if (this.$store.state.info.length == 0) {
          this.$router.push('/more')
        }
      }
    },
  }
</script>

<style lang="scss">
  @import './assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: $color-800;
      background-color: $color-100;
      padding: 60px 80px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: $color-800;
      background-color: $color-100;
      width: 100%;
    }
  }

</style>
