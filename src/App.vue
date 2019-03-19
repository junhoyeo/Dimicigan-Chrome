<script>
import Main from './components/main'
import Settings from './components/settings'

export default {
  name: 'app',
  components: {
    Main, 
    Settings
  },
  
  data () {
    return {
      today: new Date().getDay() - 1,
      grade: 1,
      tab: 5, // class
      settings: false
    }
  },

  methods: {
    openSettings: function () {
      this.settings = !(this.settings)
    }
  }
}
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="header__buttons">
        <i class="fas fa-arrow-left fa-4x" @click="openSettings" v-if="settings"></i>
        <i class="fas fa-cog fa-4x" @click="openSettings" v-else></i>
        <i class="fas fa-calendar fa-4x"></i>
        <i class="fas fa-exclamation-triangle fa-4x"></i>
      </div>
      <div class="header__info">
        <div class="header__info__date">{{ this.moment().format('YYYY년 M월 D일') }}</div>
        <div class="header__info__class">1학년 5반</div>
        <div class="header__info__next">다음 수업 15분 뒤</div>
      </div>
    </div>
    <div class="settings" v-if="settings">
      <Settings/>
    </div>
    <div class="main" v-else>
      <Main :grade="grade" :tab="tab"/>
    </div>

    <div class="footer">
      <div class="footer__logo">
        <img src="./assets/logo.png"/>
        <span>JunhoYeo @ JNJ 2019</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Gothic+A1');

body {
  min-width: 400px;
  min-height: 580px;
}

#app {
  padding: 0.5em;
  user-select: none;
}

.header {
  .fas {
    margin: 0.1em;
  }

  &__buttons {
    float: left;
    margin: 1em;
    margin-left: 0;
    margin-top: 2em;
  }

  &__info {
    float: right;
    font-family: 'Black Han Sans', sans-serif;
    padding: 1em;
    text-align: right;

    &__date {
      font-size: 1.5em;
    }

    &__class {
      font-size: 3em;
    }

    &__next {
      font-size: 1.6em;
    }
  }
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: black;
  width: 100%;
  text-align: center;

  &__logo {
    margin: 2em;

    img {
      height: 30%;
      width: 15%;
    }

    span {
      display: block;
      color: white;
      font-family: 'Gothic A1', sans-serif;
      font-size: 80%;
    }
  }
}
</style>
