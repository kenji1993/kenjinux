new Vue ({
    el: '#app',

    data () {
        return {
        showBash: false
        }
    },

    methods: {
        toggleShowBash () {
            this.showBash = !this.showBash
        }
    }
})