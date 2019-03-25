<script>
import Index from './pages/Index';
import Settings from './pages/Settings';
import Alarm from './pages/Alarm';
import Week from './pages/Week';

export default {
  name: 'App',
  components: {
    Index,
    Settings,
    Alarm,
    Week,
  },

  data() {
    return {
      today: this.moment().day() - 1,
      grade: 1,
      tab: 1, // class
      page: 2, // [Index, Settings, Week, Alarm]
    };
  },

  created() {
    const prevGrade = Number(window.localStorage.grade);
    const prevTab = Number(window.localStorage.tab);

    if (prevGrade && prevTab) {
      this.grade = prevGrade;
      this.tab = prevTab;
    }
  },

  methods: {
    openPage(idx) {
      this.page = idx;
    },

    updateSettings(res) {
      this.grade = res.grade;
      this.tab = res.tab;
      window.localStorage.setItem('grade', this.grade);
      window.localStorage.setItem('tab', this.tab);
      this.settings = false;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="header__buttons">
        <i
          v-if="page"
          class="fas fa-arrow-left fa-4x"
          @click="openPage(0)"
        />
        <i
          v-if="page !== 1"
          class="fas fa-cog fa-4x"
          @click="openPage(1)"
        />
        <i
          v-if="page !== 2"
          class="fas fa-calendar fa-4x"
          @click="openPage(2)"
        />
        <i
          v-if="page !== 3"
          class="fas fa-exclamation-triangle fa-4x"
          @click="openPage(3)"
        />
      </div>
      <div class="header__info">
        <div class="header__info__date">
          {{ this.moment().format('YYYY년 M월 D일') }}
        </div>
        <div class="header__info__class">
          {{ `${grade}학년 ${tab}반` }}
        </div>
        <div class="header__info__next">
          다음 수업 n분 뒤
        </div>
      </div>
    </div>
    <div
      v-if="page === 1"
      class="page settings"
    >
      <Settings
        :grade="grade"
        :tab="tab"
        @updated="updateSettings"
      />
    </div>
    <div
      v-else-if="page === 2"
      class="page weekly"
    >
      <Week
        :grade="grade"
        :tab="tab"
      />
    </div>
    <div
      v-else-if="page === 3"
      class="page alarm"
    >
      <Alarm />
    </div>
    <div
      v-else
      class="page main"
    >
      <Index
        :grade="grade"
        :tab="tab"
      />
    </div>

    <div class="footer">
      <div class="footer__logo">
        <img src="./assets/logo.png">
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

.page {
  display: table;
  width: 100%;
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
