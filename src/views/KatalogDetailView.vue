<template>
    <div class="Katalog-detail">
        <AppNavbar />
        <div class="container">
            <!-- Breadcrumb -->
            <div class="row mt-5">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/" class="text-dark">Home</router-link></li>
                            <li class="breadcrumb-item"><router-link to="/women" class="text-dark">Women</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <!-- Perbaiki penggunaan gambar -->
                    <img :src="/images/${ product.image }" class="img-fluid" alt="">
                </div>
                <div class="col-md-6">
                    <h2><strong>{{ product.name }}</strong></h2>
                    <hr>
                    <h4>Price: Rp. {{ product.price }}</h4>
                    <h4>{{ product.description || 'No description available' }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue"
import axios from "axios";

export default {
    name: 'KatalogDetail',
    components: {
        AppNavbar,
    },
    data() {
        return {
            product: {}
        }
    },
    methods: {
        setProduct(data) {
            this.product = data
        }
    },
    mounted() {
        // Pastikan URL benar
        axios.get(http://localhost:3000/products/${this.$route.params.id})
            .then((response) => {
            this.setProduct(response.data);
        })
            .catch((error) => {
                console.log("Gagal :", error);
            });
    }
}
</script>

<style></style>