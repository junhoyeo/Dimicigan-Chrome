<script>
import table from './../assets/table.json'
import time from './../assets/time.json'

export default {
  name: 'main',
  props: {
    grade: {
      type: Number,
      default: 1
    },
    tab: {
      type: Number,
      default: 1
    }
  },
  
  created () {
    this.getDimibob()
    this.getTimetable()
  },

  data () {
    return {
      dimibob: {
        breakfast: '아침 급식 정보를 불러올 수 없습니다.',
        lunch: '점심 급식 정보를 불러올 수 없습니다.',
        dinner: '저녁 급식 정보를 불러올 수 없습니다.',
        music: '기상송 정보를 불러올 수 없습니다.'
      },
      current: [
        { idx: 0, subject: '' },
        { idx: 1, subject: '' },
        { idx: 2, subject: '' }
      ],
      table,
      time
    }
  },

  computed: {
    todayIndex () {
      return this.moment().day() - 1
    },

    timeIndex () {
      const current = Number(this.moment().format('HHmm'))
      const idx = time.table.findIndex(base => {
        return current < base
      })
      return idx == -1 ? time.table.length - 1 : idx
    },

    mealIndex () {
      const current = Number(this.moment().format('HHmm'))
      const idx = time.meal.findIndex(base => {
        return current < base
      })
      return idx == -1 ? time.meal.length - 1 : idx
    },

    dimibobTitle () {
      return ['BREAKFAST', 'LUNCH', 'DINNER', 'MUSIC'][this.mealIndex]
    }
  },

  methods: {
    getDimibob () {
      const today = this.moment().format('YYYYMMDD')
      this.$api.get(`https://dev-api.dimigo.in/dimibobs/${today}`)
        .then((res) => {
          this.dimibob.breakfast = res.data.breakfast || '아침 급식 정보를 불러올 수 없습니다.'
          this.dimibob.lunch = res.data.lunch || '점심 급식 정보를 불러올 수 없습니다.'
          this.dimibob.dinner = res.data.dinner || '저녁 급식 정보를 불러올 수 없습니다.'
        })
    },

    getTimetable () {
      // const today = ['시작'].concat(this.table[this.grade][this.tab][this.todayIndex], ['끝'])
      const today = this.table[this.grade][this.tab][this.todayIndex]
      for (let i = -1; i < 2; i++) {
        this.current.splice(i + 1, 1, {
          idx: this.timeIndex + i + 1,
          subject: today[this.timeIndex + i]
        })
      }
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="table">
      <div 
        class="time" v-for="(lecture, key) in current" :key="idx"
        :class="{ current: (key == 1) }"
      >
        <div class="time__subject" :class="{ current: (key == 1) }">
          <div class="time__subject__title">{{ lecture.subject }}</div>
          <div class="time__subject__time">제 {{ lecture.idx }}교시</div>
        </div>
        <div class="time__desc" :class="{ current: (key == 1) }">
          <span class="time__desc__running">09:00 ~ 09:50</span>
          <span class="time__desc__teacher">이택주 T</span>
        </div>
      </div>
    </div>

    <div class="meal">
      <div class="meal__title">{{ dimibobTitle }}</div>
      <div class="meal__content">{{ dimibob[dimibobTitle.toLowerCase()] }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    font-size: 1.5em;
  }
}
</style>
