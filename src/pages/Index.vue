<script>
import table from '../assets/table.json';
import time from '../assets/time.json';

export default {
  name: 'Index',
  props: {
    grade: {
      type: Number,
      default: 1,
    },
    tab: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      dimibob: {
        breakfast: '아침 급식 정보를 불러올 수 없습니다.',
        lunch: '점심 급식 정보를 불러올 수 없습니다.',
        dinner: '저녁 급식 정보를 불러올 수 없습니다.',
        music: '기상송 정보를 불러올 수 없습니다.',
      },
      current: [{}, {}, {}],
      table,
      time,
    };
  },

  computed: {
    todayIndex() {
      return this.moment().day() - 1;
    },

    timeIndex() {
      const timeTable = (this.todayIndex === 2) ? this.time.table.slice(0, 6) : this.time.table
      const current = Number(this.moment().format('HHmm'));
      const idx = timeTable.findIndex(base => current < base);
      return idx === -1 ? timeTable.length : idx + 1;
    },

    mealIndex() {
      const current = Number(this.moment().format('HHmm'));
      const idx = time.meal.findIndex(base => current < base);
      return idx === -1 ? time.meal.length - 1 : idx;
    },

    dimibobTitle() {
      return ['BREAKFAST', 'LUNCH', 'DINNER', 'MUSIC'][this.mealIndex];
    },
  },

  created() {
    this.getDimibob();
    this.getTimetable();
  },

  methods: {
    getDimibob() {
      const today = this.moment().format('YYYYMMDD');
      this.$api.get(`https://dev-api.dimigo.in/dimibobs/${today}`)
        .then((res) => {
          this.dimibob.breakfast = res.data.breakfast || '아침 급식 정보가 없습니다.';
          this.dimibob.lunch = res.data.lunch || '점심 급식 정보가 없습니다.';
          this.dimibob.dinner = res.data.dinner || '저녁 급식 정보가 없습니다.';
        });
    },

    getTimetable() {
      if ([-1, 5].indexOf(this.todayIndex) > -1) { // weekends
        const today = ['시작', '주말', '끝'];
        today.foreach((item, idx) => {
          this.current.splice(idx, 1, {
            idx,
            subject: item,
            start: true,
            end: true,
          });
        });
      }
      const today = ['시작'].concat(this.table[this.grade][this.tab][this.todayIndex], ['끝']);
      for (let i = -1; i < 2; i += 1) {
        this.current.splice(i + 1, 1, {
          idx: this.timeIndex + i,
          subject: today[this.timeIndex + i],
          start: this.moment(
            this.time.table[this.timeIndex + i - 1],
            'Hmm',
          ).subtract(50, 'minutes'),
          end: this.moment(this.time.table[this.timeIndex + i - 1], 'Hmm'),
        });
      }
    },

    getTimePeriod(lecture) {
      if ([-1, 5].indexOf(this.todayIndex) > -1) {
        return '신나는 주말!';
      }
      if (lecture.start.isValid()) { return `${lecture.start.format('HH:mm')} ~ ${lecture.end.format('HH:mm')}`; }
      return (lecture.idx) ? '오늘도 수고했어!' : '오늘도 화이팅!';
    },
  },
};
</script>

<template>
  <div class="content">
    <div class="table">
      <div
        v-for="(lecture, key) in current"
        :key="key"
        class="time"
        :class="{ current: (key == 1) }"
      >
        <div
          class="time__subject"
          :class="{ current: (key == 1) }"
        >
          <div class="time__subject__title">
            {{ lecture.subject }}
          </div>
          <div class="time__subject__time">
            제 {{ lecture.idx }}교시
          </div>
        </div>
        <div
          class="time__desc"
          :class="{ current: (key == 1) }"
        >
          <span class="time__desc__running">{{ getTimePeriod(lecture) }}</span>
          <span class="time__desc__teacher">이택주 T</span>
        </div>
      </div>
    </div>

    <div class="meal">
      <div class="meal__title">
        {{ dimibobTitle }}
      </div>
      <div class="meal__content">
        {{ dimibob[dimibobTitle.toLowerCase()] }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  display: table;
  width: 100%;

  .time {
    display: table-row;
    width: 100%;

    &__subject {
      display: table-cell;
      width: 30%;
      padding: 0.5em;
      padding: 1em;
      background-color: rgb(236, 236, 236);
      color: #fff;
      text-align: center;

      &__title {
        font-family: 'Black Han Sans', sans-serif;
        font-size: 3em;
      }

      &__time {
        font-family: 'Gothic A1', sans-serif;
        font-size: 1.5em;
      }
    }

    &__desc {
      display: table-cell;
      width: 70%;
      background-color: rgb(170, 170, 170);
      color: rgb(211, 211, 211);
      font-family: 'Black Han Sans', sans-serif;
      font-size: 1.7em;

      span {
        display: block;
        margin-top: -0.8em;
        margin-bottom: 0.5em;
        margin-left: 0.5em;
      }
    }

    &__subject.current {
      border: 3px solid #000;
      background-color: #000;
      color: #fff;
    }

    &__desc.current {
      border: 5px solid #000;
      background-color: #fb5656;
      color: #000;
    }
  }

  .time.current {
    border: 5px solid #000;
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
