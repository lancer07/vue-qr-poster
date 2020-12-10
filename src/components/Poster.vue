<template>
  <div>
    <div style="display:none" >
      <qr-code
        id="qr"
        style="display:none"
        :value="shareLink"
        :size="qrSize"
        :foreground="qrColor"
        :background="qrBackground"
      ></qr-code>
    </div>
    <div ref="posterImgWrap"></div>
  </div>
</template>

<script>
import QrCode from '@/components/QrCode'
import canvas2image from '@/plugins/canvas2image'
export default {
  props: {
    qrBackground: {
      type: String,
      required: false,
      default: '#fff'
    },
    qrColor: {
      type: String,
      required: false,
      default: '#000'
    },
    shareLink: {
      type: String,
      required: true,
      default: ''
    },
    bgPic: {
      type: String,
      required: true,
      default: ''
    },
    bgSize: {
      type: String,
      required: true,
      default: '500,500'
    },
    qrSize: {
      type: Number,
      required: false,
      default: 200
    },
    qrPosition: {
      type: String,
      required: false,
      default: '0,0'
    }
  },
  components: {
    QrCode
  },
  data () {
    return {
      qrPic: '',
      posterImg: ''
    }
  },
  watch: {
    shareLink () {
      this.init()
    }
  },
  methods: {
    init () {
      setTimeout(() => {
        this.qrPic = document.getElementById('qr').toDataURL('image/png')
        this.draw()
      }, 20)
    },
    draw () {
      var self = this
      var c = document.createElement('canvas')
      c.id = 'poster'
      c.width = this.bgSize.split(',')[0]
      c.height = this.bgSize.split(',')[1]

      var cxt = c.getContext('2d')
      var qrImg = new Image()
      qrImg.src = this.qrPic
      qrImg.onload = function () {
        cxt.drawImage(
          qrImg,
          0,
          0,
          self.qrSize,
          self.qrSize,
          self.qrPosition.split(',')[0],
          self.qrPosition.split(',')[1],
          self.qrSize,
          self.qrSize
        )
      }
      var bgImg = new Image()
      bgImg.src = this.bgPic
      bgImg.setAttribute('crossorigin', 'anonymous')
      bgImg.onload = function () {
        cxt.globalCompositeOperation = 'destination-atop'
        cxt.drawImage(bgImg, 0, 0, c.width, c.height, 0, 0, c.width, c.height)
        self.$refs.posterImgWrap.innerHTML = ''
        self.$refs.posterImgWrap.appendChild(canvas2image.convertToPNG(c, c.width, c.height))
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>
