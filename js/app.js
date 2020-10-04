new Vue ({
    el: '#app',

    data () {
        return {
        showBash: false,
        showBrowser: false
        }
    },

    methods: {
        toggleShowBash () {
            this.showBash = !this.showBash
        },
        toggleShowBrowser () {
            this.showBrowser = !this.showBrowser
        }
    }
})