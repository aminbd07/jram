<template>
  <div class="regPage   h-[35vh]   bg-center	">
  </div>
  <div class="container mx-auto  mt-[-180px] ">
    <h2 class="text-white text-xl text-center p-8  text-[36px]">রেজিষ্ট্রেশন ফরম</h2>
    <div class="form-area bg-white rounded-xl p-8 drop-shadow-md  mb-10 md:flex  ">
      <div class="md:w-1/3 xs:w-full bg-[#318f57] rounded-xl p-8 text-white">
        <p class="text-[24px] text-blod">নিয়মাবলী -</p>
        <ol class="list-decimal">
          <li> পিতা, মাতা, ভাই, বোন, ছেলে কিংবা মেয়ে ব্যতিত অন্য কোন ব্যাক্তি রেজিষ্ট্রেশনের আওতাভুক্ত হবে না। </li>

          <li> রেজিষ্ট্রেশনের পূর্বে উল্লেখিত মাধ্যমগুলোতে টিকেটের মূল্য পরিশোধ করুন।</li>

          <li> সাবেক শিক্ষার্থীদের জন্য প্রতি টিকেটের মূল্য ১০০০ টাকা এবং বর্তমান শিক্ষার্থীদের জন্য ৫০০ টাকা নির্ধারন করা
            হয়েছে।
          </li>

          <li> প্রতি ফ্যামিলি টিকেটের মূল্য ৫০০ টাকা নির্ধারন করা হয়েছে।</li>
        </ol>


        <p class="mt-4 mb-4">
          মোবাইল ব্যাংকিং নাম্বার <br />
          ০১৮২৪ ০০০৫৭৮
        </p>

        <p>

          ব্যাংক একাউন্ট নাম্বার <br />
          ২৩৬৫ ১২৫৭ ২৩৫৮৯ <br />
          (অগ্রণী ব্যাংক, জয়াগ শাখা)।
        </p>

      </div>
      <div class="p-4 md:w-2/3 xs:w-full">
        <form @submit.prevent="signUp">
        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> পরিচয়ের ধরন <span class="text-red">*</span> </label>
          </div>
          <div class=" w-3/4">
            <label> <input type="radio" v-model="studentType" value="old" name="student-type" /> সাবেক শিক্ষার্থী </label>
            <label> <input type="radio" v-model="studentType" value="new" name="student-type"  /> বর্তমান শিক্ষার্থী </label>
          </div>
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> নাম <span class="text-red">*</span> </label>
          </div>
          <div class=" w-3/4">
            <input type="text" v-model="name"
              class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
          </div>
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> দাখিল ব্যাচ </label>
          </div>
          <div class=" w-3/4">
            <input type="text" v-model="batch"
              class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
          </div>
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> ঠিকানা </label>
          </div>
          <div class=" w-3/4">
            <textarea v-model="address"
              class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400"> </textarea>
          </div>
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> মোবাইল নাম্বার </label>
          </div>
          <div class=" w-3/4">
            <input type="text" v-model="mobile"
              class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
          </div>
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> ইমেইল</label>
          </div>
          <div class=" w-3/4">
            <input type="text" v-model="email"
              class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
          </div>
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> লিঙ্গ </label>
          </div>
          <div class=" w-3/4">
            <label> <input type="radio" v-model="gender" value="male" name="gender" /> পুরুষ </label>
            <label> <input type="radio" v-model="gender" value="female" name="gender"  /> নারী </label>
          </div>
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> টিকেট সংখ্যা </label>
          </div>
          <div class=" w-3/4">
            <input type="number" v-model="mainTicket" @blur="calulateTotal"
              class="border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
            (জনপ্রতি ১০০০ টাকা)
          </div>
        </div>
        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> ফ্যামিলি টিকেট সংখ্যা </label>
          </div>
          <div class=" w-3/4">
            <input type="number" v-model="familyTicket" @blur="calulateTotal"
              class="border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
            (জনপ্রতি ৫০০ টাকা)
          </div>
        </div>

        <div class=" bg-red-100 p-4 m-4 rounded-lg items-center text-center text-[24px] text-red-1000 " v-if="totalPrice">
          
            আপনার টিকিটের মোট মূল্য {{ totalPrice }} টাকা
         
        </div>

        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> টাকা দেওয়ার মাধ্যম</label>
          </div>
          <div class=" w-3/4">

            <label> <input type="radio" v-model="paymentMethod" value="bkash" name="payment-method"  /> বিকাশ </label>
            <label> <input type="radio" v-model="paymentMethod" value="nagad" name="payment-method" /> নগদ </label>
            <label> <input type="radio" v-model="paymentMethod" value="roket" name="payment-method" /> রকেট </label>
            <label> <input type="radio" v-model="paymentMethod" value="bank" name="payment-method" /> ব্যাংক একাউন্ট </label>
          </div>
        </div>
        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class="">ট্রানজেকশন নাম্বার </label>
          </div>
          <div class=" w-3/4">
            <input type="text" v-model="transID"
              class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
          </div>
        </div>
        <div class="md:flex mb-4">
          <div class="md:shrink-0 w-1/4">
            <label class=""> ছবি আপলোড দিন</label>
          </div>
          <div class=" w-3/4">
            <input type="file"
              class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
          </div>
        </div>

        <div class="items-center">
          <input type="submit" name="submit" value="রেজিস্ট্রেশন কনফার্ম করুন" class="bg-[#027554]  hover:bg-[#027554]  text-white font-bold py-2 px-4 rounded"/>
        </div>
        </form>

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
const studentType = ref('old')
const name = ref('')
const email = ref('')
const batch = ref('')
const address = ref('')
const mobile = ref('')
const gender = ref('')
const mainTicket = ref(0)
const familyTicket = ref(0)
const paymentMethod = ref('')
const transID = ref('')
const totalPrice = ref(0)

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

const calulateTotal = async () => {

  let ptp = 1000;
  let ftp = 500;
  let total = (ptp * mainTicket.value) + (ftp * familyTicket.value);
  totalPrice.value = total;

}
const signUp = async () => {


  let validation = [];
  let vr = false
  if (!studentType.value) {
    validation.push(' পরিচয়ের ধরন দিন');
    vr = true;
  }
  if (!name.value) {
    validation.push(' নাম দিন' );
    vr = true;
  }
  if (!batch.value) {
    validation.push(' দাখিল ব্যাচ দিন');
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

<style scoped>
.regPage {
  background-image: url("~/assets/images/rg_bg.png");
  background-size: cover;
  object-fit: stretch;
  background-repeat: no-repeat;
}
.text-red{
  color: red;;
}
</style>