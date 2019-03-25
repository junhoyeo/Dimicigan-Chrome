<script>
export default {
  name: 'NumberInput',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    max: {
      type: String,
      default: '1',
    },
  },

  data() {
    return {
      innerValue: this.value,
    };
  },

  watch: {
    innerValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.innerValue = val;
    },
  },
};
</script>

<template>
  <input
    v-model.number="innerValue"
    class="input"
    type="number"
    min="1"
    :max="max"
  >
</template>

<style lang="scss" scoped>
input {
  width: 1.2em;
  border: 3.5px solid #000;
  font-size: 2.5em;
}

input:focus {
  background-color: rgb(236, 236, 236);
}
</style>
