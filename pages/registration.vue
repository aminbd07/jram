<template>
  <div class="container mx-auto my-4 ">

    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">

      <div class="md:flex mb-4">
        <div class="md:shrink-0 w-1/3">
          <label class=""> Name </label>
        </div>
        <div class="">
          <input type="text"
            class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
        </div>
      </div>
 
    </div>

  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "default"
})
useHead({
  title: 'Register | supaAuth'
})
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const name = ref('')
const lastname = ref('')
const company = ref('')
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const loading = ref(false)
const authError = ref('')
const swal = inject("$swal");

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/')
  }
});

const signUp = async () => {

  return;

  let validation = [];
  let vr = false
  if (!name.value) {
    validation.push('First name required');
    vr = true;
  }
  if (!lastname.value) {
    validation.push('Last name required');
    vr = true;
  }
  console.log(password, '-', confirmPassword)
  if (password.value !== confirmPassword.value) {
    validation.push("Passwords do not match");
    vr = true;
  }
  if (vr) {
    swal.fire({
      title: "Validation Error",
      icon: 'error',
      text: validation.toString(),
      confirmButtonColor: 'red',
    });
    return;
  }
  loading.value = true
  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        first_name: name.value,
        last_name: lastname.value,
        company: company.value
      }
    }
  })
  if (error) {

    loading.value = false
    authError.value = 'Failed to fetch'
    swal.fire({
      title: "Registration Faild!",
      icon: 'error',
      text: 'Your registartion not completed, please try again.',
      confirmButtonColor: 'red',
      showCancelButton: false
    })
  } else {
    swal.fire({
      title: "Registration Success!",
      icon: 'success',
      text: 'Your registartion is complete, please check your inbox for confirm your account.',
      confirmButtonColor: 'green',
      showCancelButton: false
    }).then((result) => {
      window.location.href = "/"
    })
  }
}
const clearError = () => {
  authError.value = ''
}
</script>
