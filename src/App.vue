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
        // get 请求
        this.$ajax
            .get(
                'https://www.easy-mock.com/mock/5b1f88a39f7d4a3a70fcbfd3/suporka/get',
                {}
            )
            .then(res => {
                console.log(res);
            });
        // post 请求
        this.$ajax
            .post(
                'https://www.easy-mock.com/mock/5b1f88a39f7d4a3a70fcbfd3/suporka/post',
                {}
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
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
