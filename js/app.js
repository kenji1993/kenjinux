new Vue ({
    el: '#app',

    data () {
        return {
        showBash: false,
        showBrowser: false,
        showCalculator: false,
        }
    },

    methods: {
        toggleShowBash () {
            this.showBash = !this.showBash
        },
        toggleShowBrowser () {
            this.showBrowser = !this.showBrowser
        },
        toggleShowCalculator () {
            this.showCalculator = !this.showCalculator
        }
    }
})