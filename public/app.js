Vue.config.devtools = true;
let vueCHiDo = new Vue({
    el: '#app',
    data: {
        users: []
    },
    beforeMount() {
        axios.get('http://localhost:3000/api/users').then(res => {
            this.users = res.data;
            console.log(this.users);
        });
    }
});