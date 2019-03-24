<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    query: {
      type: String,
      default: ''
    },
    day: {
      type: Number,
      default: 0
    },
    today: {
      type: Number,
      default: 0
    }
  },

  computed: {
    computedClass () {
      return {
        current: (this.today === this.day),
        search: (this.query && this.query === this.name)
      }
    }
  },

  methods: {
    updateQuery: function () {
      this.$emit('query', this.name)
    }
  }
}
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
  color: rgb(150, 150, 150);
  width: 20%;
  border: 2px solid black;
  text-align: center;
  font-size: 1.5em;
  background-color: rgb(243, 243, 243);
}

td.current {
  color: rgb(133, 46, 46);
  background-color: #f38383;
}

td.search {
  color: black;
  background-color: #f5e78d;
}
</style>
