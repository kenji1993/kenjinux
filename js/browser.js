new Vue ({
    el: '#app',

    data () {
        return {
        showBrowser: false
        }
    },

    methods: {
        toggleShowBrowser () {
            this.showBrowser = !this.showBrowser
        }
    }
})