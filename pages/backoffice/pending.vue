<template>
    <div class="regPage h-[20vh] bg-center"></div>
    <div class="container mx-auto mt-[-150px]">
        <h2 class="text-white text-xl text-center p-8 text-[36px]">
            All Pending List
        </h2>
        <div class="form-area bg-white rounded-xl p-8 drop-shadow-md mb-10">
            <div class="mb-32 text-center">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="w-full text-left text-sm font-light">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6 py-4"></th>
                                            <th scope="col" class="px-6 py-4">Name</th>
                                            <th scope="col" class="px-6 py-4">Mobile </th>
                                            <th scope="col" class="px-6 py-4">Year</th>
                                            <th scope="col" class="px-6 py-4">Permanent Address </th>
                                            <th scope="col" class="px-6 py-4">Present Address </th>
                                            <th scope="col" class="px-6 py-4"> Professions </th>
                                            <th scope="col" class="px-6 py-4"> Registion Number </th>
                                            <th scope="col" class="px-6 py-4"> Family Number </th>
                                            <th scope="col" class="px-6 py-4"> Payment Method </th>
                                            <th scope="col" class="px-6 py-4"> Paid Amount </th>
                                            <th scope="col" class="px-6 py-4"> Transaction ID </th>
                                            <th scope="col" class="px-6 py-4"> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b dark:border-neutral-500" v-for="(student, index) in pendingList"
                                            :key="index">
                                            <td class=" px-6 py-4"> <img :src="cdn + student.image"
                                                    class="min-h-[70px] min-w-[60px]" v-if="student && student.image" />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.name }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.phone }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.batch }}</td>
                                            <td class=" px-6 py-4">{{ student.permanent_address }}</td>
                                            <td class=" px-6 py-4">{{ student.present_address }}</td>
                                            <td class=" px-6 py-4">{{ student.professions }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.main_ticket }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.family_ticket }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.payment_method }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.paid_amount }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{{ student.tranx_id }}</td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <a href="#" title="Full View">
                                                    <svg class="h-6 w-6 text-blue-500" width="24" height="24"
                                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx="12" cy="12" r="2" />
                                                        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                                        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                                                    </svg>
                                                </a>
                                                <a href="#" @click.prevent="approveRegistration(student)" title="Approve">
                                                    <svg class="h-6 w-6 text-blue-500" width="24" height="24"
                                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                                    </svg>
                                                </a>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showPopup">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ">
                <div class="bg-white rounded-lg shadow-lg p-6 w-md">
                    <h2 class="text-xl font-bold mb-4 text-center"> Approve User </h2>
                    <p>
                    <div>

                        <table class="table table-popup">
                            <tr>
                                <th>Name</th>
                                <td> {{ activeStudent.name }} </td>
                            </tr>
                            <tr>
                                <th>Batch</th>
                                <td>{{ activeStudent.batch }} </td>
                            </tr>
                            <tr>
                                <th>No of Registration </th>
                                <td>{{ activeStudent.main_ticket }} </td>
                            </tr>
                            <tr>
                                <th> No of Family</th>
                                <td>{{ activeStudent.family_ticket }} </td>
                            </tr>
                            <tr>
                                <th>Total Payment</th>
                                <td>{{ activeStudent.paid_amount }} </td>
                            </tr>
                            <tr>
                                <th>Payment Method</th>
                                <td>{{ activeStudent.payment_method }} </td>
                            </tr>
                            <tr>
                                <th>User Given Ref Number</th>
                                <td>{{ activeStudent.tranx_id }} </td>
                            </tr>
                        </table>
                    </div>
                    <p class="mt-5 text-center">
                        <label> Ref No / Transaction ID </label>
                        <input type="text"
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="userTransID" placeholder="Tansection ID" autocomplete="off" />
                    </p>
                    </p>
                    <div class="flex justify-center mt-4 ">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-1 rounded"
                            @click="showPopup = false">Cancel</button>

                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="approveAction">Approve Registration</button>
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
    layout: "admin",
});
useHead({
    title: "Back Office management | JRAM 100 Year",
});


const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const loading = ref(false);
const authError = ref("");
const activeStudent = ref([]);
const userTransID = ref("");
const swal = inject("$swal");
const showPopup = ref(false)
const cdn = "https://xtehmhyjkwwxxzcrruwq.supabase.co/storage/v1/object/public/jram/"


watchEffect(async () => {
    if (!user.value) {
        await navigateTo('/login')
    }

});

//
let { data: pendingList, error } = await client
    .from('event_registration')
    .select('*')
    .eq('status', false)
    .order('id', { ascending: false })

if (error) {
    console.error(error)
    // Handle the error
} else {

    // Use the data
}
//

function approveRegistration(student) {
    activeStudent.value = student
    showPopup.value = true
    userTransID.value = ""
}

async function approveAction() {
    if (userTransID.value == '') {
        swal.fire({
            title: "Error",
            text: "To approve, please enter actual ref/transection number",
            icon: "error",
        });
        return;
    }
    if (confirm("Are You Sure?")) {
        let updateData = {
            status: true,
            final_ref_id: userTransID.value,
            update_by: user.value.id
        }
        let { data: updateReg, error } = await client
            .from('event_registration')
            .update(updateData)
            .eq('id', activeStudent.value.id)

        if (!error) {
            alert("Successfully Updated! ")
            window.location.reload();
        }
    }

}


</script>

<style scoped>
.regPage {
    background-image: url("~/assets/images/rg_bg.png");
    background-size: cover;
    object-fit: stretch;
    background-repeat: no-repeat;
}

.table-popup td,
.table-popup th {
    @apply border p-2 text-left
}

.text-red {
    color: red;
}
</style>