<template>
    <div>
        <canvas ref="canvas" class="canvas" />
    </div>
</template>
  
<script>
import QRCode from 'qrcode'

export default {
    props: {
        value: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 128
        }
    },
    mounted() {
        this.generateQRCode()
    },
    methods: {
        async generateQRCode() {
            try {
                const canvas = this.$refs.canvas
                const options = {
                    width: this.size,
                    height: this.size,
                    errorCorrectionLevel: 'H',
                    margin: 1,
                    color: {
                        //dark: "#010599FF",
                        //light: "#FFBF60FF"
                    }
                }
                await QRCode.toCanvas(canvas, this.value, options)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
  
<style scoped="scss">
.canvas {
    border: solid 1px #000;
}
</style>