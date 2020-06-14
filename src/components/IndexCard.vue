<template>
  <div class="card">
    <div class="container" v-for="(item, index) in dataSource" :key = "index" @click="showDetail(item.id)">
      <img :src="item.photo" alt="">
      <div class="info">
        <p class="name"> {{item.name}} </p>
        <div class="contact">
          <p><font-awesome-icon class="icon" icon="envelope" /> {{item.email}} </p>
          <p><font-awesome-icon icon="phone"/> {{item.phone}} </p>
        </div>
        <p class="company"><font-awesome-icon icon="building"/> {{item.company.name}} - {{item.company.catchPhrase}} </p>
      </div>
      <font-awesome-icon class="delete" @click.stop="deleteUser(item.id)" icon="times" />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'IndexCard',

    props: {
      dataSource: Array,
    },

    methods: {

      showDetail (id) {
        this.$store.commit('showUser', id)
        this.$router.push(`/index/${id}/show`)
      },

      deleteUser (id) {
        this.$store.commit('deleteUser', id)
      }

    }
  }
</script>

<style lang="scss">
  @import '../assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    .container {
      position: relative;
      display: flex;
      background-color: #f8ffff;
      width: 55%;
      margin: 10px auto;
      border-radius: 8px;
      box-shadow: 2px 3px 3px #c2e1df;
      cursor: default;

      img {
        width: 95px;
        height: 50%;
        margin: 25px 20px;
        margin: 20px;
        padding: 0 0px 20px 15px
      }

      .info {
        padding: 25px 10px;

        .name {
          color: $color-800;
          font-weight: 900;
          font-size: 30px;
        }

        .contact {
          display: flex;
          margin: 6px 0;

          p {
            padding-right: 50px;
          }
        }
      }
      .delete {
        position: absolute;
        top: 8px;
        right: 16px;
        font-weight: 500;
      }

      .delete:hover {
        color: $color-900;
        font-size: 20px;
      }

      &:hover {
        transform: scale(1.01, 1.01);
        transition-duration: 0.2s;
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {

    .container {
        position: relative;
        display: flex;
        background-color: #f8ffff;
        width: 24em;
        margin: 10px auto;
        border-radius: 8px;
        box-shadow: 2px 3px 3px #c2e1df;
        cursor: default;

        img {
          width: 3em;
          height: 50%;
          margin-top: 1.5em;
          padding: 0 0px 20px 15px
        }

        .info {
          padding: 25px 10px;

          .name {
            color: $color-800;
            font-weight: 900;
            font-size: 1.2em;
          }

          .contact {
            display: flex;
            margin: 6px 0;

            p {
              padding-right: 0.1em;
              font-size: 0.5em;
              font-weight: 500;
            }
          }

          .company {
            font-size: 0.5em;
            font-weight: 500;
          }
        }
        .delete {
          position: absolute;
          top: 8px;
          right: 16px;
          font-weight: 500;
          font-size: 0.8em;
        }

        .delete:hover {
          color: $color-900;
          font-size: 1em;
        }

        &:hover {
          transform: scale(1.01, 1.01);
          transition-duration: 0.2s;
        }
      }
  }

</style>

