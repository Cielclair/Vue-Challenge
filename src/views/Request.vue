<template>
  <div class="request">
    <RequestUsers/>
  </div>
</template>

<script>
// @ is an alias to /src
import RequestUsers from '@/components/RequestUsers.vue'

export default {
  name: 'Request',
  components: {
    RequestUsers
  }
}
</script>

<style lang="scss">
  @import '../assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    .request {
      width: 100%;
      height: 100vh;
      position: relative;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .request {
      width: 100%;
      height: 100vh;
      position: relative;
    }
  }
</style>
