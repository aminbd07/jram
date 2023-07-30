<template>
  <div class="regPage h-[35vh] bg-center"></div>
  <div class="container mx-auto mt-[-180px]">
    <h2 class="text-white text-xl text-center p-8 text-[36px]">
      Back admin 
    </h2>
    <div class="form-area bg-white rounded-xl p-8 drop-shadow-md mb-10 md:flex">
      <div class="mb-32 text-center">
       
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

onMounted(() => {
  // Load the data from JSON files during component mount

});



definePageMeta({
  layout: "admin",
});
useHead({
  title: "Back Office management | JRAM 100 Year",
});


const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const loading = ref(false);
const authError = ref("");
const swal = inject("$swal");
const cdn = "https://menkacmpmotzifetudpr.supabase.co/storage/v1/object/public/jram/"

watchEffect(async () => {
  if (!user.value) {
    await navigateTo('/login')
  }

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