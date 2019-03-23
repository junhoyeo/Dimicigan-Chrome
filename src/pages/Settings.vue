<script>
import NumberInput from './../components/NumberInput'

export default {
  name: 'Settings',
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
    NumberInput
  },

  data () {
    return {
      newGrade: this.grade,
      newTab: this.tab
    }
  },

  methods: {
    onClickUpdate: function () {
      this.$emit('updated', {
        grade: this.newGrade,
        tab: this.newTab
      })
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="settings">
      <div class="title">설정</div>
      <div class="info">
        <div class="info__title">학년/반 정보 설정</div>
        <NumberInput v-model="newGrade" type="number" max="3"/>
        <span class="info__label grade">학년</span>
        <NumberInput v-model="newTab" max="6"/>
        <span class="info__label class">반</span>
      </div>
    </div>
    <div class="button-wrap">
      <button class="button-update" @click="onClickUpdate">변경사항 저장</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 3em;
  font-family: 'Black Han Sans', sans-serif;
}

.info {
  display: block;
  font-family: 'Gothic A1', sans-serif;

  &__title {
    font-size: 1.8em;
    margin-bottom: 0.5em;
  }

  &__label {
    font-size: 2em;
    font-family: 'Black Han Sans', sans-serif;
  }

  &__label.grade {
    margin-right: 0.2em;
  }
}

.button-wrap {
  width: 100%;
  text-align: center;
  margin-top: 1.5em;

  button {
    font-family: 'Gothic A1', sans-serif;
    color: black;
    background-color: none;
    border: 3px solid black;
    border-radius: 10px;
    font-size: 1.5em;
    font-weight: bolder;
    padding: 0.2em;
    width: 75%;
  }

  button:hover {
    color: white;
    background-color: black;
  }
}
</style>
