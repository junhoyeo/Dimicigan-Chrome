<script>
import SubjectData from './../components/SubjectData'
import table from './../assets/table.json'

export default {
  name: 'Week',
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
  components: {
    SubjectData
  },

  data () {
    return {
      query: '',
      table
    }
  },

  computed: {
    today () {
      return new Date().getDay() - 1
    }
  },

  methods: {
    updateQuery: function (query) {
      this.query = query
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="title">주간 시간표</div>
    <div class="help">일주일 시간표를 확인할 수 있어요.</div>
    <table>
      <tbody>
        <tr v-for="time in [0, 1, 2, 3, 4, 5, 6]">
          <SubjectData
            v-for="day in [0, 1, 2, 3, 4]" :key="day"
            :name="table[grade][tab][day][time]"
            :query="query" :day="day" :today="today"
            @query="updateQuery"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 3em;
  font-family: 'Black Han Sans', sans-serif;
}

.help {
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.8em;
  margin-bottom: 0.5em;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>
