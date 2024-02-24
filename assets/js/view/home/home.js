import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home"
    }

  },

  methods: {

  },

  async mounted() {

    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
  },
  template: await get_template('./assets/js/view/home/home')
}