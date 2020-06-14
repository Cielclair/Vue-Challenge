<template>
  <div class="show-card">
    <div class="show">
      <GoBack/>
      <ShowCard :dataSource='info[showIdIndex]'/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowCard from '@/components/ShowCard.vue'
import GoBack from '@/components/GoBack.vue'
import { mapState } from 'vuex'

export default {
  name: 'Show',

  components: {
    ShowCard,
    GoBack
  },

  computed: {
    ...mapState(['info','showIdIndex'])
  }
}
</script>

<style lang="scss">
  @import '../assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    .show-card {
      width: 100%;
      height: 100vh;
    }
    .show {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .show-card {
      width: 100%;
      height: 100vh;
    }
    .show {
      margin: 0 auto;
      height: 100vh;
    }
  }
</style>
