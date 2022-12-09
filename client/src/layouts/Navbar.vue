
<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <router-link :to="{name:'Home'}" class="navbar-brand fw-bold text-warning" v-font-size=30>Market</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class=" navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto  mb-2 mb-lg-0 ">
          <li>
            <button class="btn btn-warning ms-3 fw-bold px-5 " type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              Catalog
            </button>
          </li>
        </ul>

        <div class="input-group mx-5">
          <input type="text" class="form-control border border-warning rounded-lg" placeholder="Search ... "
            aria-label="Search" aria-describedby="basic-addon1">
        </div>

        <!-- User Side -->
        <form class="d-flex">
          <router-link to="/" class="nav-link active text-stone-300 text-md px-1">
            <button type="button" class="btn border-none position-relative">
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </router-link>
          <router-link to="/" class="nav-link active text-stone-300 text-md px-1">
            <button type="button" class="btn border-none position-relative">
              <i class="fa-solid fa-heart fa-xl"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </router-link>
          <router-link to="/" class="nav-link active text-stone-300 text-md px-1">
            <div class="btn-group dropstart">
              <button type="button" style="width:35px;height:35px"  class="btn p-0 m-0" title="Title" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="//avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-50" class="me-2"
                      style="width:35px;height:35px" alt="">
              </button>
              <ul class="dropdown-menu px-3" aria-labelledby="dropdownMenuButton1">
                <li>
                  <router-link to="/" class="dropdown-item  py-2" href="#">
                    <div class="row">
                      <div class="col-4">
                        <img src="//avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-50" class="me-2"
                      style="width:35px" alt="">
                      </div>
                      <div class="col-8">
                        <span class="fw-bold" v-font-size=20>Email</span>
                      </div>
                    </div>
                    <span class="">cavidanbagiri@gmail.com</span>
                  </router-link>
                </li>
                <li class="mt-2">
                  <router-link to="/" class="dropdown-item rounded py-2" href="#">
                    <i class="fa-solid fa-heart fa-xl me-4"></i>
                    <span class="">Favorites</span>
                  </router-link>
                </li>
                <li class="mt-2">
                  <router-link to="/" class="dropdown-item py-2" href="#">
                    <i class="fa-solid fa-cart-shopping fa-xl me-4"></i>
                    <span class="">Basket</span>
                  </router-link>
                </li>
                <li class="mt-2">
                  <router-link to="/" class="dropdown-item py-2" href="#">
                    <i class="fa-solid fa-money-bill fa-xl me-4"></i>
                    <span class="">Balance</span>
                  </router-link>
                </li>
                <li class="mt-2">
                  <router-link to="/" class="dropdown-item py-2" href="#">
                    <i class="fa-solid fa-credit-card fa-xl me-4"></i>
                    <span class="">My Cards</span>
                  </router-link>
                </li>
                <li class="mt-2">
                  <router-link to="/" class="dropdown-item py-2" href="#">
                    <i class="fa-solid fa-tags fa-xl me-4"></i>
                    <span class="">Discount</span>
                  </router-link>
                </li>
                <li class="my-2">
                  <router-link to="/" class="dropdown-item py-2" href="#">
                    <i class="fa-solid fa-shop fa-xl me-4"></i>
                    <span class="">Boughts</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </router-link>
          <a href="#" @click.prevent="changeLocale">
            {{currentLocale}}
          </a>
        </form>
      </div>
    </div>
  </nav>

</template>


<script setup>
  import {computed} from 'vue';
  import i18n from '../includes/i18n';



  const currentLocale = computed(()=>{
      return i18n?.locale;
  })

  const changeLocale = () => {
    // i18n.locale = i18n.locale === "en" ? "ru" : "en";
    // // console.log('from cavidan : ',some );
    // console.log('clicked ',i18n.locale);
    // console.log('clicked ',i18n);
  }


</script>
