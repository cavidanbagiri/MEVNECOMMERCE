<template>
  <section class="h-screen">
    <div class="px-6 h-full text-gray-800">
      <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-full"
            alt="Sample image" />
        </div>
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <span>{{$t("loginpage.login")}}</span>
          <Form @submit="onSubmit">

            <!-- Email input -->
            <div class="mb-6">
              <Field name="email" type="email" placeholder="Email" rules="required|email"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput" />
                <ErrorMessage name="email" style="color:red;" ></ErrorMessage> 
            </div>

            <!-- Password input -->
            <div class="mb-6">
              <Field name="password" type="password" placeholder="Password" rules="required|min:8"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2" />
                <ErrorMessage name="password" style="color:red;" ></ErrorMessage> 
            </div>

            <div class="flex justify-between items-center mb-6">
              <a href="#!" class="text-gray-800">Forgot password?</a>
            </div>

            <div class="text-center lg:text-left">
              <button class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Login
              </button>
              <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <router-link :to="{ name: 'Register' }"
                  class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                  Register</router-link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
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
    await auth_store.LOGINUSER(values).then((res)=>{
        router.push('/')
    }).catch((err)=>{
        console.log('Err happen in Register App Vue : ',err);
    })
}    


</script>

<style lang="scss" scoped>

</style>