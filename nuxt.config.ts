export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  css: [
    '@/assets/css/app.css',
  ],
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@pinia/nuxt'
  ],
  buildModules: [
  ],
 
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      },
      cover: {
        modifiers: {
          fit: "contain",
          format: "jpg",
          height: 300,
        },
      },
    }
  },
  plugins: [
    // { src: "~/plugins/sweetalert2.ts", mode: "client" },
    // { src: "~/plugins/draggable.ts", mode: "client" }
  ],
  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.postcss'
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono&display=swap' },
      ],
      script: [],
    }
  }
})
