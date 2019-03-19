<script>
import timetable from './table.json'

export default {
  name: 'app',
  
  data () {
    return {
      today: new Date().getDay() - 1,
      grade: 1,
      tab: 5, // class
      menu: {
        breakfast: '',
        lunch: '',
        dinner: ''
      },
      timetable: timetable
    }
  },

  methods: {

  }
}
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="header__buttons">
        <i class="fas fa-cog fa-4x"></i>
        <i class="fas fa-calendar fa-4x"></i>
        <i class="fas fa-exclamation-triangle fa-4x"></i>
      </div>
      <div class="header__info">
        <div class="header__info__date">2019년 3월 20일</div>
        <div class="header__info__class">1학년 5반</div>
        <div class="header__info__next">다음 수업 15분 뒤</div>
      </div>
    </div>
    <div class="table">
      <div class="time">
        <div class="time__subject">
          <div class="time__subject__title">음악</div>
          <div class="time__subject__time">제 3교시</div>
        </div>
        <div class="time__desc">
          <span class="time__desc__running">11:00 ~ 11:50</span>
          <span class="time__desc__teacher">이택주 T</span>
        </div>
      </div>
      <div class="time current">
        <div class="time__subject current">
          <div class="time__subject__title ">음악</div>
          <div class="time__subject__time">제 3교시</div>
        </div>
        <div class="time__desc current">
          <span class="time__desc__running">11:00 ~ 11:50</span>
          <span class="time__desc__teacher">이택주 T</span>
        </div>
      </div>
      <div class="time">
        <div class="time__subject">
          <div class="time__subject__title">음악</div>
          <div class="time__subject__time">제 3교시</div>
        </div>
        <div class="time__desc">
          <span class="time__desc__running">11:00 ~ 11:50</span>
          <span class="time__desc__teacher">이택주 T</span>
        </div>
      </div>
    </div>

    <div class="meal">
      <div class="meal__title">DINNER</div>
      <div class="meal__content">고구마영양밥 | 달래양념장 | 두부된장국 | 오징어김치볶음 | 간장깻잎지 | 열무김치 | 초코후레이크씨리얼 | 우유 | 숭늉</div>
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

.table {
  width: 100%;
  display: table;

  .time {
    width: 100%;
    display: table-row;

    &__subject {
      width: 30%;
      padding: 0.5em;
      text-align: center;
      display: table-cell;
      color: white;
      background-color: rgb(236, 236, 236);
      padding: 1em;

      &__title {
        font-size: 3em;
        font-family: 'Black Han Sans', sans-serif;
      }

      &__time {
        font-size: 1.5em;
        font-family: 'Gothic A1', sans-serif;
      }
    }

    &__desc {
      width: 70%;
      display: table-cell;
      color: lightgray;
      background-color: rgb(170, 170, 170);
      font-family: 'Black Han Sans', sans-serif;
      font-size: 1.7em;

      span {
        margin-top: -.8em;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
        display: block;
      }
    }

    &__subject.current {
      color: white;
      background-color: black;
      border: 3px solid black;
    }

    &__desc.current {
      color: black;
      background-color: #fb5656;
      border: 5px solid black;
    }
  }

  .time.current {
    border: 5px solid black;
  }
}

.meal {
  padding: 0.5em;

  &__title {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2em;    
  }

  &__content {
    font-family: 'Gothic A1', sans-serif;
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
