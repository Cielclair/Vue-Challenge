<template>
  <div class="index">
    <h1>User Profiles</h1>
    <h2>Here's a list of some of our awesome users living in Long Horn, FuXingMen.</h2>
    <IndexCard :dataSource='info' />
  </div>
</template>

<script>
// @ is an alias to /src
import IndexCard from '@/components/IndexCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Index',
  components: {
    IndexCard
  },

  computed: {
    ...mapState(['info'])
  }
}
</script>

<style lang="scss">
  @import '../assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    .index {

      h1 {
      margin-left: 285px;
      margin-bottom: 5px;
      font-weight: 900;
      }

      h2 {
        margin-left: 285px;
        width: 50%;
        font-weight: 400;
        margin-bottom: 30px;
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {

    .index {

      h1 {
        margin-bottom: 5px;
        font-weight: 900;
        font-size: 2.5em;
        padding: 0.6em 0 0 0.5em;
      }

      h2 {
        width: 16em;
        font-weight: 400;
        margin-bottom: 30px;
        font-size: 1.2em;
        padding-left: 1.1em;
      }
    }
  }
</style>
