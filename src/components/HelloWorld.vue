<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "HelloWorld"
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  text-align: center;
}
</style>
