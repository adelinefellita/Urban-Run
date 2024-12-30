<template>
    <div class="Katalog-detail">
        <AppNavbar />
        <div class="container">
            <!-- Breadcrumb -->
            <div class="row mt-5">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="text-dark">Home</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link :to="category === 'men-shoes' ? '/men' : '/women'" class="text-dark">
                                    {{ category === 'men-shoes' ? 'Men' : 'Women' }}
                                </router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                {{ product.name }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <!-- Carousel dan Detail Produk -->
            <div class="row">
                <div class="col-md-6">
                    <!-- Bootstrap Carousel -->
                    <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                        <!-- Indikator Gambar -->
                        <ol class="carousel-indicators">
                            <li v-for="(image, index) in product.images" :key="index"
                                :data-bs-target="'#productCarousel'" :data-bs-slide-to="index"
                                :class="{ 'active': index === 0 }">
                                <img :src="'/images/' + image" class="d-block w-100 img-fluid rounded"
                                    style="height: auto; width: 70px;" alt="Miniature Image" />
                            </li>
                        </ol>
                        <div class="carousel-inner">
                            <!-- Loop Gambar -->
                            <div v-for="(image, index) in product.images" :key="index"
                                :class="['carousel-item', { active: index === 0 }]">
                                <img :src="'/images/' + image" class="d-block w-100 img-fluid" alt="Product Image">
                            </div>
                        </div>
                        <!-- Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="tittle-katalog col-md-6">
                    <h2>{{ product.name }}</h2>
                    <hr>
                    <h4>Price: Rp. {{ product.price }}</h4>

                    <!-- Menampilkan Ukuran yang Tersedia -->
                    <div class="tittle-size">
                        <strong>Available Sizes:</strong>
                        <ul class="list-unstyled">
                            <li v-for="size in product.sizes" :key="size"
                                :class="{ 'active-size': selectedSize === size }" @click="selectSize(size)">
                                {{ size }}
                            </li>
                        </ul>
                    </div>

                    <div class="tittle-size">
                        <strong>Quantity:</strong>
                        <select v-model="quantity" class="form-select">
                            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                        </select>
                    </div>

                    <!-- Add to Cart Button -->
                    <button @click="addToCart" class="btn btn-primary mt-3">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import AppNavbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
    name: "KatalogDetail",
    components: {
        AppNavbar,
    },
    data() {
        return {
            product: {}, // Menyimpan data produk
            category: "", // Menyimpan kategori produk
            quantity: 1,
            selectedSize: null, // To store selected size
        };
    },
    methods: {
        setProduct(data, category) {
            this.product = {
                ...data,
                images: Array.isArray(data.images) ? data.images : [data.image],
            }; // Setel data produk dan array gambar
            this.category = category; // Setel kategori produk
        },
        selectSize(size) {
            this.selectedSize = size; // Set the selected size
        },
        addToCart() {
            if (!this.selectedSize) {
                alert("Please select a size before adding to the cart.");
                return;
            }

            // Retrieve existing cart from localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            const existingProductIndex = cart.findIndex(
                item => item.product.id === this.product.id && item.size === this.selectedSize
            );

            if (existingProductIndex !== -1) {
                // If the product already exists, update the quantity
                cart[existingProductIndex].quantity += this.quantity;
            } else {
                // Otherwise, add the new product to the cart
                cart.push({
                    product: this.product,
                    quantity: this.quantity,
                    size: this.selectedSize
                });
            }

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Redirect to the cart page
            this.$router.push({ name: 'CartView' });
        },
    },
    mounted() {
        const productId = this.$route.params.id; // Ambil ID dari parameter rute

        // Ambil data dari kedua kategori
        axios
            .get("http://localhost:3000/men-shoes")
            .then((response) => {
                const menShoes = response.data;
                const foundProduct = menShoes.find((item) => item.id == productId);

                if (foundProduct) {
                    this.setProduct(foundProduct, "men-shoes");
                } else {
                    axios.get("http://localhost:3000/women-shoes").then((response) => {
                        const womenShoes = response.data;
                        const foundProduct = womenShoes.find(
                            (item) => item.id == productId
                        );
                        if (foundProduct) {
                            this.setProduct(foundProduct, "women-shoes");
                        }
                    });
                }
            })
            .catch((error) => {
                console.error("Gagal mengambil data produk:", error);
            });
    },
};
</script>


<style scoped>
.btn-primary {
    background-color: #387478;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 50px;
}

.btn-primary:hover {
    background-color: #243642;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
}

.btn-primary:active {
    background-color: #243642;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>