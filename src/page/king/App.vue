<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
    name: 'app',
    data() {
        return {};
    },
    created() {
        console.log(process.env.NODE_ENV);
    },
    methods: {},
};
</script>
