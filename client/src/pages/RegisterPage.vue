
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <h3 class="text-2xl font-bold text-center">Join us</h3>

            <Form @submit="onSubmit"  >
                <div class="mt-4">
                    <!-- Email Field-->
                    <div class="mt-4">
                        <label class="block" for="email">Email</label>
                        <Field name="email" type="email" placeholder="Email" rules="required|email"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                            <!-- <span class="text-xs text-red-400">Email Field Is Required</span> -->
                            <ErrorMessage name="email" style="color:red;" ></ErrorMessage> 
                    </div>
                    <!-- Password Field-->
                    <div class="mt-4">
                        <!-- <span class="text-xs text-red-400">Please Enter an Email</span> -->
                        <label class="block">Password</label>
                        <Field name="password" type="password" placeholder="Password" rules="required|min:8"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                            <ErrorMessage name="password" style="color:red;" ></ErrorMessage> 
                    </div>
                    <!-- <span class="text-xs text-red-400">Password must be grater than 8 char</span> -->
                    <!-- Confirm Password Field-->
                    <div class="mt-4">
                        <label class="block">Confirm Password</label>
                        <Field name="confirm" type="password" placeholder="Password" rules="required|confirmed:@password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        <ErrorMessage name="confirm" style="color:red;" ></ErrorMessage> 
                    </div>
                    <!-- <span class="text-xs text-red-400">Password must be same!</span> -->
                    <!-- Register Button -->
                    <div class="flex">
                        <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                            Account</button>
                    </div>
                    <!-- Going TO Register Page Link-->
                    <div class="mt-6 text-grey-dark">
                        Already have an account?
                        <router-link :to="{ name: 'Login' }" class="text-blue-600 hover:underline">Log in</router-link>
                    </div>
                </div>
            </Form>

        </div>
    </div>
</template>

<script setup>

//Import Auth Store From Pinia
import authStore from '../stores/auth';
//Import Vue Router
import router from '../router';
//Create an Function Object For Pinia AuthFunction
const auth_store = authStore();

//Submit user Registration
const onSubmit = async (values) => {
    await auth_store.REGISTERUSER(values).then((res)=>{
        //After SUccessfully Register, Redirect To Login Page
        router.push('/login')
    }).catch((err)=>{
        console.log('Err happen in Register App Vue : ',err);
    })
}    


</script>
















