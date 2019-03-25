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
      default: 1,
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
  font-size: 2.5em;
  width: 1.2em;
  border: 3.5px solid black;
}

input:focus {
  background-color: rgb(236, 236, 236);
}
</style>
