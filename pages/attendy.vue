<template>
  <div class="regPage h-[35vh] bg-center"></div>
  <div class="container mx-auto mt-[-180px]">
    <h2 class="text-white text-xl text-center p-8 text-[36px]">
      রেজিষ্ট্রেশন ফরম
    </h2>
    <div class="form-area bg-white rounded-xl p-8 drop-shadow-md mb-10 md:flex">
      <div class="mb-32 text-center">

        <div class="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">

          <div class="mb-12 lg:mb-0 border p-2" v-for=" (attendy, index) in AllAttendy" :key="index">
             <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px] min-h-[80px]"
              :src="cdn+attendy.image" :alt="attendy.name" />
            <h5 class="mb-2 text-lg font-bold"> {{ attendy.name }} </h5>
            <p class="mb-2">Batch : {{ attendy.batch }}</p>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

onMounted(() => {
  // Load the data from JSON files during component mount

});



definePageMeta({
  layout: "default",
});
useHead({
  title: "All Attendy | supaAuth",
});


const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const loading = ref(false);
const authError = ref("");
const swal = inject("$swal");
const cdn = "https://menkacmpmotzifetudpr.supabase.co/storage/v1/object/public/jram/"

watchEffect(async () => {
});


//
let { data: AllAttendy, error } = await client
  .from('event_registration')
  .select('*')
  .order('id',  { ascending: true})

if (error) {
  console.error(error)
  // Handle the error
} else {

   // Use the data
}
//



</script>

<style scoped>
.regPage {
  background-image: url("~/assets/images/rg_bg.png");
  background-size: cover;
  object-fit: stretch;
  background-repeat: no-repeat;
}

.text-red {
  color: red;
}
</style>