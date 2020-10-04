new Vue ({
    el: '#app',

    data () {
        return {
        showBash: true
        }
    },

    methods: {
        toggleShowBash () {
            this.showBash = !this.showBash
        }
    }
})