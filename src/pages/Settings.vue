<script>
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
        <input 
          class="info__input" v-model.number="newGrade"
          type="number" min="1" max="3"
        />
        <span class="info__label grade">학년</span>
        <input 
          class="info__input" v-model.number="newTab"
          type="number" min="1" max="6"
        />
        <span class="info__label class">반</span>
      </div>
    </div>
    <div class="button-wrap">
      <button class="button-update" @click="onClickUpdate">변경사항 저장</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  width: 100%;
  display: table;
}

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

  &__input {
    font-size: 2.5em;
    width: 1.2em;
    border: 3.5px solid black;
  }

  &__input:focus {
    background-color: rgb(236, 236, 236);
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
