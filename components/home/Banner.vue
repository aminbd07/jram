<template>
    <section>
    <div class="max-w-7xl mx-auto">
       <nuxt-img  format="webp"  fit="cover" width="100%"  src="/img/banner.jpg" />
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      imagePath: '~/assets/images/',
      slides: [
        {
          image: 'banner.jpg',
          alt: 'Slide 1'
        },
        {
          image: 'banner2.jpg',
          alt: 'Slide 2'
        }
      ]
    };
  }
}
</script>

  
<style scoped>
/* add any custom styles for the component here */
</style>
  