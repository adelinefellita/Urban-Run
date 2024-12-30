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
                            <router-link class="nav-link" to="/cart">
                                <i class="bi bi-bag-fill fs-2"></i>
                                <span
                                    class="badge rounded-circle bg-custom position-absolute top-0 start-100 translate-middle">{{
                                        cartItemCount }}</span>
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

    data() {
        return {
            cartItemCount: 0,
        };
    },
    mounted() {
        this.updateCartCount();
    },
    methods: {
        updateCartCount() {
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
            this.cartItemCount = cartData.reduce((total, item) => total + item.quantity, 0);
        }
    },
    watch: {
        $route() {
            this.updateCartCount(); // Update count on route change
        }
    }
}
</script>

<style scoped>
/* Menghapus border dan background pada navbar */
.navbar-nav .nav-link {
    border: none !important;
    background: none !important;
    outline: none !important;
    padding: 0.5rem 1rem;
    /* Menjaga padding sesuai kebutuhan */
}

/* Menghilangkan efek hover dan focus pada nav-link */
.navbar-nav .nav-link:hover,
.navbar-nav .nav-link:focus {
    background: none !important;
    box-shadow: none !important;
}

/* Menghapus background dan border pada ikon tas */
.navbar-nav .bi-bag-fill {
    border: none !important;
    background: none !important;
    box-shadow: none !important;
}

/* Menghilangkan border dan background pada badge tas */
.navbar-nav .badge {
    border: none !important;
    background-color: #387478 !important;
    /* Sesuaikan dengan warna badge yang diinginkan */
    box-shadow: none !important;
}
</style>
