<template>
    <div>
        <form class=" " @submit.prevent="updateData">

            <!-- Name Input Field -->
            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2" for="title">
                    Link Title
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" type="text" placeholder="Enter Link Title" v-model="bio.title">
            </div>
            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2" for="tag_line">
                    Your Tag Line
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="tag_line" type="text" placeholder="Enter your tag line" v-model="bio.tag_line">
            </div>

            <!-- Image Input Field -->
            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2" for="image">
                    Your Cover Image
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="cover_image" type="file" accept="image/*" @change="coverPicUpdate">
                <div class="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative mb-2" role="alert">
                    ( 450x250px, max 200KB)
                </div>
                <img :src="cdn + bio.cover_image" alt="cover image" class="w-50 h-24  border-1 border border-gray-200">
            </div>

            <!-- Image Input Field -->
            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2" for="image">
                    Profile Image
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="profile_image" type="file" accept="image/*" @change="prifilePicUpdate">
                <div class="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative mb-2" role="alert">
                    ( 150x150px, max 150KB) {{ this.bio.profile_image }}
                </div>
                <img :src="cdn + bio.profile_image" alt="profile image"
                    class="w-24 h-24 rounded-full border-1 border border-gray-200">
            </div>


            <div class="mb-6">
                <label class="block text-gray-800 font-bold mb-2" for="color">
                    Container Color
                </label>
                <input
                    class="appearance-none w-full h-10 rounded-md border-gray-300 text-gray-800 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="color" id="color" v-model="containerColor">
                Opacity :
                <input class="opacity-50 appearance-none bg-gray-200 range rounded-md h-6 w-full" id="color" type="range"
                    v-model="containerOpacity" min="0" max="100" step="1">

            </div>


            <!-- Color Picker Input Field -->

            <label>Background Type </label>
            <div class="flex">
                <div class="flex items-center mr-4">
                    <input id="inline-2-radio" type="radio" value="color" name="inline-radio-group" v-model="btype"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Color
                    </label>
                </div>
                <div class="flex items-center mr-4">
                    <input type="radio" value="image" name="inline-radio-group2" v-model="btype"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="inline-checked-radio"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image </label>
                </div>

            </div>


            <div class="mb-6" v-if="btype == 'color'">
                <label class="block text-gray-800 font-bold mb-2" for="color">
                    Color
                </label>
                <input
                    class="appearance-none w-full h-10 rounded-md border-gray-300 text-gray-800 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="color" id="color" v-model="bgcolor">
            </div>



            <!-- Image Input Field -->
            <div class="mb-6" v-if="btype == 'image'">
                <label class="block text-gray-800 font-bold mb-2" for="image">
                    Background Image
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="background" type="file" accept="image/*" @change="bgImageUpdate">


                <div class="bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative mb-2" role="alert">
                    ( 1000x800px, max 400KB)
                </div>


                <img :src="cdn + bgImage" alt="Background image" class="w-50 h-24 rounded border-1 border border-gray-200">
            </div>

            <!-- Submit Button -->
            <div class="flex items-center justify-center">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Submit
                </button>
            </div>

        </form>
    </div>
</template>
  
<script>
// const swal = inject("$swal");
import swal from 'sweetalert2';
export default {
    props: {
        // bio: {
        //     type: Object,
        //     required: true
        // },
        modelValue: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            btype: 'color',
            bgImage: '',
            bio: this.modelValue,
            containerColor: "#FFFFFF",
            containerOpacity: 1,
            bgcolor: '#FFFFFF',
            selectedcolor: '#FFFFFF',
            cdn: "https://nthpfvthhaecfhzfjcqw.supabase.co/storage/v1/object/public/connectme.pro"
        }
    },
    mounted() {
        if (this.bio) {
            if (this.bio.background.type == 'color') {
                this.bgcolor = this.bio.background.color
                this.btype = 'color'
            } else {
                this.btype = 'image',
                    this.bgImage = this.bio.background.image
            }

            if (this.bio.settings.container_color) {
                this.containerColor = this.bio.settings.container_color;
                this.containerOpacity = (this.bio.settings.container_opacity * 100);

            }
        }
    },
    methods: {
        async updateData() {
            let updateData = {
                title: this.bio.title,
                tag_line: this.bio.tag_line
            }
            if (this.btype == 'color') {
                let bg = {
                    'type': 'color',
                    'color': this.selectedcolor
                }
                updateData.background = bg
            }

            let settings = {
                container_color: this.containerColor,
                container_opacity: (this.containerOpacity / 100),
            }
            updateData.settings = settings;
            this.$emit('updateData', updateData)
        },
        prifilePicUpdate(event) {
            const file = event.target.files[0]
            let ext = file.name.substr(file.name.lastIndexOf('.') + 1, file.length);
            let file_name = "/pp/" + this.bio.url + "." + ext
            // check file size and type 
            let valied = this.checkFile(file.size, 150, ext);
            //
            if (valied && file) {
                let data = {
                    act: 'profile_image',
                    file: file,
                    file_name: file_name
                }
                this.bio.profile_image = "/default_pp.png";
                this.$emit('uploadImage', data)


            }
        },
        coverPicUpdate(event) {
            const file = event.target.files[0]
            console.log(file);
            let ext = file.name.substr(file.name.lastIndexOf('.') + 1, file.length);
            let file_name = "/cp/" + this.bio.url + "." + ext
            let valied = this.checkFile(file.size, 200, ext);
            if (valied && file) {
                let data = {
                    act: 'cover_image',
                    file: file,
                    file_name: file_name
                }

                if (this.$emit('uploadImage', data)) {
                    this.bio.cover_image = file_name
                }
            }
        },
        bgImageUpdate(event) {
            const file = event.target.files[0]
            let ext = file.name.substr(file.name.lastIndexOf('.') + 1, file.length);
            let file_name = "/bg/" + this.bio.url + "." + ext
            let valied = this.checkFile(file.size, 400, ext);
            if (valied && file) {
                let data = {
                    act: 'bg_image',
                    file: file,
                    file_name: file_name
                }
                this.bio.background.image = "/default.png";
                this.$emit('uploadImage', data)
            }
        },
        checkFile(size, allowSize, ext) {
            var allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp']
            if (!allowedExtensions.includes(ext)) {
                swal.fire({
                    title: "Invalid!",
                    text: "Invalid file type. Only JPG, JPEG, PNG and GIF files are allowed.!",
                    icon: "error"
                })
                return false;
            }
            let fsize = (size / 1000);
            console.log(size, "-", fsize, "-", allowSize)
            if (fsize > allowSize) { // check 150KB 
                swal.fire({
                    title: "Invalid!",
                    text: "Invalid file size, max size " + allowSize + "KB",
                    icon: "error"
                })
                return false;
            }
            return true;
        }
    }
}
</script>
  
<style scoped="scss">
.canvas {
    border: solid 1px #000;
}
</style>