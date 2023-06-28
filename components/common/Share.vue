<template>
    <div class="mt-2 w-full">
        <div v-if="showPopup">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-100 ">
                <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
                    <h2 class="text-xl font-bold mb-4"> Share your profile to social network </h2>
                    <p class="grid grid-cols-2 gap-1 ">
                        <template v-for="network in networks">
                            <ShareNetwork :network="network.network" :key="network.network" :url="sharing.url"
                                :title="sharing.title" :description="sharing.description" class="mr-2 leading-10 basis-1/2"
                                v-if="network.network" :quote="sharing.quote" :hashtags="sharing.hashtags">
                                <Icon :name="network.icon" color="" size="20" class="mr-2" />
                                <span>{{ network.name }}</span>
                            </ShareNetwork>
                        </template>
                    </p>
                    <div class="flex justify-center mt-4 ">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded"
                            @click="showPopup = false">Close</button>

                    </div>
                </div>
            </div>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded" @click="showPopup = true">
            <Icon name="solar:share-bold-duotone" color="" size="20" />
            Share to social network
        </button>

    </div>
</template>


<script>
import VueSocialSharing from 'vue-social-sharing'

export default {
    props: {
        link: {
            type: String,
            required: true
        },
        networks: {
            type: Array,
            required: true
        },
        bio: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            showPopup: false,
            sharing: {
                url: this.link,
                title: this.bio.title,
                description: this.bio.tag_line,
                quote: '',
                hashtags: '',
            },
        };
    },
    mounted() {

    },
    methods: {
    }
}
</script>
  
<style scoped="scss">
.canvas {
    border: solid 1px #000;
}
</style>