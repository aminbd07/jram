<template>
    <section class="bg-gray-100 pb-10 mb-0">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900">Benefits of ConnectMe</h2>
                <p class="mt-4 text-lg text-gray-500">Here are just a few reasons to start using ConnectMe today:</p>
            </div>
          
             <div class="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <!-- item -->
                <div class="bg-white rounded-lg shadow-md p-6"  v-for="(benefit, index) in benifits"
                :key="index">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <Icon :name="benefit.icon" color="" size="32" />
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-medium text-gray-900">{{ benefit.title }}</h3>
                        <p class="mt-2 text-base text-gray-500">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>


            
        </div>
        <div class="text-center ">
            <div class="mt-8 ">
        <a href="/register"
          class="inline-block px-5 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">Get
          Started for Free</a>
      </div>
        </div>
        
    </section>
</template>


<script>

export default {
    components: {
    },
    data() {
        return {
            benifits: [
                {
                    title: 'Easily Share Your Links',
                    icon: 'solar:share-bold-duotone',
                    description: 'ConnectMe makes it easy to share all your social media and web links with others, so you can promote your personal brand and grow your following.'
                },
                {
                    title: 'Customizable Design',
                    icon: 'material-symbols:dashboard-customize-rounded',
                    description: 'can design your page to match your personal brand or business.'
                },
                {
                    title: 'Analytics',
                    icon: 'carbon:analytics',
                    description: 'Track and analyze the performance of your ConnectMe page, including the number of clicks and visits, to understand how you can improve your online presence.'
                },
                {
                    title: 'Personal Branding',
                    icon: 'ic:round-person-add-alt',
                    description: 'Promote your personal brand by sharing all your links in one  place and customizing your page to match your brand.'
                },
                {
                    title: 'Enhanced Social Presence',
                    icon: 'entypo-social:creative-cloud',
                    description: 'Improve your social media presence by sharing all your links with others and increasing your visibility online.'
                },
                {
                    title: 'Mobile Friendly',
                    icon: 'material-symbols:mobile-friendly-rounded',
                    description: 'ConnectMe is designed to be mobile-friendly, ensuring that your page looks great and is easy to navigate on all devices.'
                },

            ]
        };
    }
}
</script>

  
<style scoped>
/* add any custom styles for the component here */
</style>
  