<template>
  <span class="go-back" style="display: flex;" @click="goBack">
    <span class="back">
      <font-awesome-icon class="arrow" style="width: 10em; margin-top: 1px; font-size: 20px;" icon="long-arrow-alt-left" />
      <button>Back to Profiles</button>
    </span>
  </span>
</template>

<script>
  export default {
    methods: {
      goBack() {
        return this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    button {
      border: 0;
      background-color: $color-100;
      color: $color-800;
      font-size: 20px;
      margin-left: -80px;

      &:hover {
        color: $color-700;
      }
    }

    .back:hover {
      color: $color-700;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {

    .back {
      margin-left: -5em;
      margin-top: 1.2em;

      button {
        border: 0;
        background-color: $color-100;
        color: $color-800;
        font-size: 20px;
        margin-left: -80px;

        &:hover {
          color: $color-700;
        }

      }

      .back:hover {
        color: $color-700;
      }
    }
  }
</style>

