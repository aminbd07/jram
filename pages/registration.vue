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
          {{ mfsNumber }}
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
              <label> <input type="radio" v-model="studentType" value="old" name="student-type" @change="updateType" /> সাবেক শিক্ষার্থী
              </label>
              <label> <input type="radio" v-model="studentType" value="new" name="student-type" @change="updateType" /> বর্তমান শিক্ষার্থী
              </label>
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
              <label class="" v-html="studentType=='old'? 'দাখিল ব্যাচ' : 'শ্রেণী' "></label>
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
            <div class="md:shrink-0 lg:w-1/4 xs:w-full">
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
              <label> <input type="radio" v-model="gender" value="female" name="gender" /> নারী </label>
            </div>
          </div>

          <div class="md:flex mb-4">
            <div class="md:shrink-0  lg:w-1/4 xs:w-full">
              <label class=""> টিকেট সংখ্যা </label>
            </div>
            <div class=" w-3/4">
              <input type="number" v-model="mainTicket" @change="calulateTotal"
                class="border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
              (জনপ্রতি {{ tikcketFee }} টাকা)
            </div>
          </div>
          <div class="md:flex mb-4">
            <div class="md:shrink-0  lg:w-1/4 xs:w-full">
              <label class=""> ফ্যামিলি টিকেট সংখ্যা </label>
            </div>
            <div class=" w-3/4">
              <input type="number" v-model="familyTicket" @change="calulateTotal"
                class="border-2 border-gray-200 rounded w-2/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
              (জনপ্রতি 500 টাকা)
            </div>
          </div>

          <div class=" bg-red-100 p-4 m-4 rounded-lg items-center text-center text-[24px] text-red-1000 "
            v-if="totalPrice">

            আপনার টিকিটের মোট মূল্য {{ totalPrice }} টাকা

          </div>

          <div class="md:flex mb-4">
            <div class="md:shrink-0  lg:w-1/4 xs:w-full">
              <label class=""> টাকা দেওয়ার মাধ্যম</label>
            </div>
            <div class=" w-3/4">

              <label> <input type="radio" v-model="paymentMethod" value="bkash" name="payment-method" /> বিকাশ </label>
              <label> <input type="radio" v-model="paymentMethod" value="nagad" name="payment-method" /> নগদ </label>
              <label> <input type="radio" v-model="paymentMethod" value="roket" name="payment-method" /> রকেট </label>
              <label> <input type="radio" v-model="paymentMethod" value="bank" name="payment-method" /> ব্যাংক একাউন্ট
              </label>
            </div>
          </div>

          <div class=" bg-green-100 p-4 m-4 rounded-lg items-center text-center text-[24px] text-red-1000 "
            v-if="paymentMethod && paymentMethod == 'bkash'">
            এই  ({{ mfsNumber }}) নম্বর এ বিকাশ করুন, এর পর ট্রান্সেকশন নং তা নিচে এন্ট্রি দিন. <br/>
            (অন্য নম্বর থেকে করলে রেফারেন্স এ আপনার নাম্বার দিন.)
          </div>
          <div class=" bg-green-100 p-4 m-4 rounded-lg items-center text-center text-[24px] text-red-1000 "
            v-if="paymentMethod && paymentMethod == 'nagad'">
            এই  ({{ mfsNumber }}) নম্বর এ নগদ করুন, এর পর ট্রান্সেকশন নং তা নিচে এন্ট্রি দিন. <br/>
            (অন্য নম্বর থেকে করলে রেফারেন্স এ আপনার নাম্বার দিন.)
          </div>
          <div class=" bg-green-100 p-4 m-4 rounded-lg items-center text-center text-[24px] text-red-1000 "
            v-if="paymentMethod && paymentMethod == 'roket'">
            এই  ({{ mfsNumber }}) নম্বর এ রকেট করুন, এর পর ট্রান্সেকশন নং তা নিচে এন্ট্রি দিন. <br/>
            (অন্য নম্বর থেকে করলে রেফারেন্স এ আপনার নাম্বার দিন.)
          </div>
          <div class=" bg-green-100 p-4 m-4 rounded-lg items-center text-center text-[24px] text-red-1000 "
            v-if="paymentMethod && paymentMethod == 'bank'">
            পাশে দেওয়া একাউন্ট এ ডিপোজিট কিংবা ট্রান্সফার করুন. সেটার ট্রান্সেকশন নম্বর নিচে দিন.
          </div>

          <div class="md:flex mb-4">
            <div class="md:shrink-0  lg:w-1/4 xs:w-full">
              <label class="">ট্রানজেকশন নাম্বার </label>
            </div>
            <div class=" w-3/4">
              <input type="text" v-model="transID"
                class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
            </div>
          </div>
          <div class="md:flex mb-4">
            <div class="md:shrink-0  lg:w-1/4 xs:w-full">
              <label class=""> ছবি আপলোড দিন</label>
            </div>
            <div class=" w-3/4">
              <input type="file" @change="imageUpdate"
                class="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-[#f3f3f3] focus:border-gray-400" />
            </div>
          </div>

          <div class="items-center">
            <input type="submit" name="submit" value="রেজিস্ট্রেশন কনফার্ম করুন"
              class="bg-[#027554]  hover:bg-[#027554]  text-white font-bold py-2 px-4 rounded" />
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
const studentType = ref('')
const name = ref('')
const email = ref('')
const batch = ref('')
const address = ref('')
const mobile = ref('')
const gender = ref('')
const file_name = ref('')
const mainTicket = ref(0)
const familyTicket = ref(0)
const paymentMethod = ref('')
const transID = ref('')
const BankInfo = ref('')
const mfsNumber = ref('01710000000')
const tikcketFee = ref(1000)
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


const updateType = async () => {
  
  if(studentType.value == 'new'){
    tikcketFee.value = 500; 
  }else{
    tikcketFee.value = 1000; 
  }
  calulateTotal();
}
const calulateTotal = async () => {

  let ptp = tikcketFee.value ;
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
    validation.push(' নাম দিন');
    vr = true;
  }
  if (!batch.value) {
    validation.push(' দাখিল ব্যাচ দিন');
    vr = true;
  }
  if (!address.value) {
    validation.push(' ঠিকানা দিন');
    vr = true;
  }
  if (!mobile.value) {
    validation.push(' মোবাইল নাম্বার দিন');
    vr = true;
  }
  if (!mainTicket.value) {
    validation.push('  টিকেট সংখ্যা দিন');
    vr = true;
  }
  if (!paymentMethod.value) {
    validation.push(' টাকা দেওয়ার মাধ্যম  দিন');
    vr = true;
  }

  if (!transID.value) {
    validation.push(' ট্রানজেকশন নাম্বার  দিন');
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

  const ue = await checkUrlExit(mobile.value);
  console.log(ue)

  if (ue) {
    swal.fire({
      title: "মোবাইল নম্বর টি নিবন্ধিত",
      text: "এই মোবাইল নম্বর টি নিবন্ধিত, অন্য একটা নম্বর দিয়ে চেষ্টা করুন অথবা আমাদের সাথে যোগাযোগ করুন.",
      icon: 'error'
    })
  } else {


    loading.value = true

    let saveData = {
      'student_type': studentType.value,
      'name': name.value,
      'batch': batch.value,
      "address": address.value,
      "phone": mobile.value,
      "email": email.value,
      "gender": gender.value,
      "main_ticket": mainTicket.value,
      "family_ticket": familyTicket.value,
      "payment_method": paymentMethod.value,
      "tranx_id": transID.value,
      "image" : file_name.value,
      "paid_amount" : totalPrice.value
    }

    const { data, error } = await client
      .from('event_registration')
      .insert([
        saveData
      ])
      .select()




    if (error) {

      loading.value = false
      authError.value = 'Failed to fetch'
      swal.fire({
        title: "Registration Faild!",
        icon: 'error',
        text: 'একটা সমস্যা হয়েছে, আবার চেষ্টা করুন.',
        confirmButtonColor: 'red',
        showCancelButton: false
      })
    } else {
      swal.fire({
        title: "Registration Success!",
        icon: 'success',
        text: 'আপনার নিবন্ধন আবেদন গৃহীত হয়েছে. আমরা শীঘ্রই আপনাকে নিশ্চিত করা হবে',
        confirmButtonColor: 'green',
        showCancelButton: false
      }).then((result) => {
        //SMS 
        //  sendSMS(mobile.value)
        //
        window.location.href = "/"
      })
    }
  }
}
const clearError = () => {
  authError.value = ''
}

async function sendSMS(mobile) {
  let msg = "Your Registration is success for JRAM 100 year program";
  let APIKEY = "C20076335fef723964a9d7.42340865"
  let SENDERID = "8809612446650";
  let url = "https://880sms.com/smsapi?api_key=" + APIKEY + "&type=text&contacts=" + mobile + "&senderid=" + SENDERID + "&msg=" + msg
  await fetch(url);
}

async function checkUrlExit(mobile) {

  console.log("URL : ", mobile);
  const { data: user, error } = await client
    .from('event_registration')
    .select('*')
    .eq('phone', mobile)
    .single()
  console.log(user);
  if (user) {
    return true;
  } else {
    return false;
  }
  if (error) {
    return true;
  }
}
function imageUpdate(event) {
  const file = event.target.files[0]
  console.log(file);
  let ext = file.name.substr(file.name.lastIndexOf('.') + 1, file.length);
  let r = Date.now();
  console.log(r) ; 
  let file_name = "/user/" + r +"_"+ file.name

  let valied = checkFile(file.size, 300, ext);
  if (valied && file) {
    let data = {
      act: 'profile_image',
      file: file,
      file_name: file_name
    }

    uploadImage(data)

  }
}


// Save image 
async function uploadImage(data): Promise<string> {
  console.log(data) 
  let field = data.act
  if (field == 'profile_image') {
    const { success, error } = await client.storage.from('jram').upload(data.file_name, data.file, { upsert: true })
    if (error) {
      throw new Error(error.message)
    }
    file_name.value = data.file_name
  }
  // swal.fire({
  //   title: "Success!",
  //   text: "Image update success!",
  //   icon: "success"
  // })
  return true
}



function checkFile(size, allowSize, ext) {
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
  ;
}
</style>