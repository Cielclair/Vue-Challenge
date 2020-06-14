<template>
  <div class="request-card">
    <font-awesome-icon style="font-size: 130px; margin-bottom: 70px;" class="icon" icon="dolly" />
    <p>Looks like you have no more users to view. Click the "Request Users" button to request for more users.</p>
    <input type="button" value="Request Users" @click="requestUsers">
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {

    name: 'RequestUsers',

    methods: {
      ...mapActions([
        'getData'
      ]),

      requestUsers () {
        this.getData()
        this.$router.push('/index')
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    .request-card {
      margin: 30px auto;
      text-align: center;
      width: 50%;
      position: absolute;
      top: 10%;
      left: 25%;
      font-size: 25px;

      p {
        padding-bottom: 80px;
      }

      input {
        border: none;
        background-color: $color-800;
        font-size: 25px;
        padding: 25px 35px;
        border-radius: 8px;
        color: $color-100;
        font-weight: 600;

        &:hover {
          background-color: $color-900;
          transition-duration: 100ms;
        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .request-card {
      margin: 30px auto;
      text-align: center;
      width: 100vw;
      position: absolute;
      top: 10%;
      font-size: 25px;

      .icon {
        font-size: 30px;
      }

      p {
        padding-bottom: 100px;
        width: 20rem;
        margin: auto;
      }

      input {
        border: none;
        background-color: $color-800;
        font-size: 18px;
        padding: 20px 30px;
        border-radius: 8px;
        color: $color-100;
        font-weight: 600;

        &:hover {
          background-color: $color-900;
          transition-duration: 100ms;
        }
      }
    }
  }
</style>

