<template>
  <div id="app">
    <img id = "icon" src="./assets/logo.png" alt>
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
    methods: {}
};
</script>

<style scoped lang="less">
#icon {
    display: block;
    margin: 20px auto;
}
</style>
