<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <div class="d-flex justify-content-between w-100 mt-4">
                <!-- Logo "Urban Run" sebagai button menuju halaman home -->
                <router-link class="navbar-brand" to="/">
                    <span>Urban</span>Run
                </router-link>

                <!-- Menu navigasi -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- Menu "Men" menuju MenView -->
                        <li class="nav-item">
                            <router-link class="nav-link" to="/men">Men</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/women">Women</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/keranjang">
                                <i class="bi bi-bag-fill fs-2"></i>
                                <span
                                    class="badge rounded-circle bg-custom position-absolute top-0 start-100 translate-middle">0</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar',
}
</script>

<style></style>