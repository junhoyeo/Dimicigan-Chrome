<script>
import NumberInput from '../components/NumberInput.vue';

export default {
  name: 'Settings',
  components: {
    NumberInput,
  },
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
      newGrade: this.grade,
      newTab: this.tab,
    };
  },

  methods: {
    onClickUpdate() {
      this.$emit('updated', {
        grade: this.newGrade,
        tab: this.newTab,
      });
    },
  },
};
</script>

<template>
  <div class="content">
    <div class="settings">
      <div class="title">
        설정
      </div>
      <div class="info">
        <div class="info__title">
          학년/반 정보 설정
        </div>
        <NumberInput
          v-model="newGrade"
          type="number"
          max="3"
        />
        <span class="info__label grade">학년</span>
        <NumberInput
          v-model="newTab"
          max="6"
        />
        <span class="info__label class">반</span>
      </div>
    </div>
    <div class="button-wrap">
      <button
        class="button-update"
        @click="onClickUpdate"
      >
        변경사항 저장
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 3em;
}

.info {
  display: block;
  font-family: 'Gothic A1', sans-serif;

  &__title {
    margin-bottom: 0.5em;
    font-size: 1.8em;
  }

  &__label {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2em;
  }

  &__label.grade {
    margin-right: 0.2em;
  }
}

.button-wrap {
  width: 100%;
  margin-top: 1.5em;
  text-align: center;

  button {
    width: 75%;
    padding: 0.2em;
    border: 3px solid #000;
    background-color: none;
    border-radius: 10px;
    color: #000;
    font-family: 'Gothic A1', sans-serif;
    font-size: 1.5em;
    font-weight: bolder;
  }

  button:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>
