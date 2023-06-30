<template>
  <div class="bg-white border-gray-200 dark:bg-wihte-900">
    <div class="container mx-auto p-4">
      <nav class="">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between">
          <a href="/" class="flex items-center text-center">
            <img src="~/assets/images/logo.png" class="h-20 mr-4" alt="Logo" />
            <h2 class="text-[24px]">জয়াগ রশিদিয়া আলিম মাদ্রাসা </h2>
          </a>
          
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-gray-700">
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 bg-gray bg-blue-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:bg-gray md:dark:text-green-500"
                  aria-current="page">হোম</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:bg-gray md:dark:hover:text-green-500 dark:hover:bg-white-700 dark:hover:bg-gray md:dark:hover:bg-transparent">কমিটি</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:bg-gray md:dark:hover:text-green-500 dark:hover:bg-white-700 dark:hover:bg-gray md:dark:hover:bg-transparent">ইতিহাস</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:bg-gray md:dark:hover:text-green-500 dark:hover:bg-white-700 dark:hover:bg-gray md:dark:hover:bg-transparent">উক্তি</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:bg-gray md:dark:hover:text-green-500 dark:hover:bg-white-700 dark:hover:bg-gray md:dark:hover:bg-transparent">গ্যালারি</a>
              </li>
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:bg-gray md:dark:hover:text-green-500 dark:hover:bg-white-700 dark:hover:bg-gray md:dark:hover:bg-transparent">যোগাযোগ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <common-loading />
    </div>
  </div>
</template>
  
  
<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const loading = ref(false)

const logout = async () => {
  loading.value = true
  const { error } = await client.auth.signOut()
  if (error) {
    loading.value = false
    return alert('Something went wrong !')
  }
}


</script>
  
<style scoped>
/* add any custom styles for the component here */
</style>
  