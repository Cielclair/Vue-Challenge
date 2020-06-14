<template>
  <div class="showCard">
    <div class="img-container">
      <img :src="dataSource.photo" alt="">
      <h3> {{dataSource.name}} </h3>
    </div>
    <div class="detail-info">
      <h2> {{dataSource.name}} </h2>
      <p><font-awesome-icon icon="envelope"/> {{dataSource.email}} </p>
      <p><font-awesome-icon icon="phone"/> {{dataSource.phone}} </p>
      <p style="padding-bottom: 0;"><font-awesome-icon icon="building"/> {{dataSource.company.name}} </p>
      <p style="padding-top: 0; padding-left: 25px;"> {{dataSource.company.catchPhrase}} </p>
      <p><font-awesome-icon icon="map-pin"/> {{dataSource.address.street}} </p>
      <p><font-awesome-icon icon="globe"/> {{dataSource.website}} </p>
      <div class="button" @click="deleteUser(dataSource.id)">
        <font-awesome-icon class="icon" icon="trash-alt" />
        <input type="button" value="Delete">
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      dataSource: Object
    },

    methods: {

      deleteUser: function (id) {
        this.$store.commit('deleteUser', id)
        this.$router.replace({path: '/index'})
      },
    }

  }
</script>

<style lang="scss">
  @import '../assets/stylesheets/style.scss';

  @media screen and (min-width: 480px) {
    .showCard {
        display: flex;
        margin-left: 48px;

      .img-container {
        margin: 40px;
        text-align: center;

        img {
          width: 285px;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 32px;
          font-weight: 400;
        }
      }


      .detail-info {
        margin: 45px 55px;
        width: 700px;

        h2 {
          font-weight: 700;
          font-size: 60px;
          padding-bottom: 25px;
        }

        p {
          font-size: 20px;
          font-weight: 500;
          padding: 8px 0px;
        }

        .button {
          display: flex;
          border: none;
          background-color: #d12827;
          color: #fbefef;
          font-size: 25px;
          font-weight: 600;
          margin: 45px 0;
          padding: 15px 25px;
          border-radius: 4px;
          width: 100px;

          .icon {

          }

          input {
            border: none;
            background-color: #d12827;
            color: #fbefef;
            font-size: 25px;
            font-weight: 600;
            padding: 0px 10px;
            border-radius: 4px;

            &:hover {
              background-color: #bf2424;
              transition-duration: 100ms;
            }

            &:hover button {
              background-color: #bf2424;
              transition-duration: 100ms;
            }
          }

          &:hover {
            background-color: #bf2424;
            transition-duration: 100ms;
          }
          &:hover input {
            background-color: #bf2424;
            transition-duration: 100ms;
          }
        }

      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .showCard {

      .img-container {
        margin: 40px;
        text-align: center;

        img {
          width: 10em;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 32px;
          font-weight: 800;
        }
      }

      .detail-info {
        margin: 45px 0 0 60px;

        h2 {
          display: none;
          font-weight: 700;
          font-size: 2em;
          padding-bottom: 25px;
        }

        p {
          font-size: 1em;
          font-weight: 500;
          padding: 8px 0px;
        }

        .button {
          display: flex;
          border: none;
          background-color: #d12827;
          color: #fbefef;
          font-size: 1.5em;
          font-weight: 600;
          margin: 40px 0;
          padding: 10px 15px;
          border-radius: 4px;
          width: 100px;

          .icon {
            font-size: 0.8em;
          }

          input {
            border: none;
            background-color: #d12827;
            color: #fbefef;
            font-size: 0.8em;
            font-weight: 600;
            padding: 0px 10px;
            border-radius: 4px;

            &:hover {
              background-color: #bf2424;
              transition-duration: 100ms;
            }

            &:hover button {
              background-color: #bf2424;
              transition-duration: 100ms;
            }
          }

          &:hover {
            background-color: #bf2424;
            transition-duration: 100ms;
          }
          &:hover input {
            background-color: #bf2424;
            transition-duration: 100ms;
          }
        }
      }
    }
  }

</style>
