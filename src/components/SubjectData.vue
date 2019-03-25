<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    query: {
      type: String,
      default: '',
    },
    day: {
      type: Number,
      default: 0,
    },
    today: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    computedClass() {
      return {
        current: (this.today === this.day),
        search: (this.query && this.query === this.name),
      };
    },
  },

  methods: {
    updateQuery() {
      this.$emit('query', this.name);
    },
  },
};
</script>

<template>
  <td
    :class="computedClass"
    @click="updateQuery"
  >
    {{ name }}
  </td>
</template>

<style lang="scss" scoped>
td {
  width: 20%;
  border: 2px solid #000;
  background-color: rgb(243, 243, 243);
  color: rgb(150, 150, 150);
  font-size: 1.5em;
  text-align: center;
}

.current {
  background-color: #f38383;
  color: rgb(133, 46, 46);
}

.search {
  background-color: #f5e78d;
  color: #000;
}
</style>
