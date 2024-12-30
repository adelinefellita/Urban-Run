<template>
    <div class="hero">

        <!-- Carousel Pamflet -->
        <div id="carouselPamflet" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
            <!-- Inner Carousel -->
            <div class="carousel-inner">
                <div v-for="(image, index) in pamfletImages" :key="index"
                    :class="['carousel-item', { active: index === 0 }]">
                    <img :src="`/images/${image}`" class="d-block w-100" alt="Pamflet">
                </div>
            </div>

            <!-- Previous Button -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselPamflet" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <!-- Next Button -->
            <button class="carousel-control-next" type="button" data-bs-target="#carouselPamflet" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <!-- Produk Best Seller -->
        <div class="mt-5">
            <h3 class="text-center">Produk Best Seller</h3>
            <div class="row mt-4">
                <div class="col-md-3" v-for="product in bestSellers" :key="product.id">
                    <CardProduct :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardProduct from './CardProduct.vue';

export default {
    name: 'AppHero',
    components: {
        CardProduct
    },
    data() {
        return {
            pamfletImages: ['Pamflet1.png', 'Pamflet2.png', 'Pamflet3.png'], // Nama file pamflet
            bestSellers: [] // Produk Best Seller
        };
    },
    mounted() {
        const menShoes = [
            {
                id: 1,
                name: "Reebok Floatride Energy 6 Men Running Shoes - Moon",
                price: 1079400,
                images: ["Reebok_Floatride1.png"],
                category: "men-shoes"
            },
            {
                id: 2,
                name: "Reebok Zig Dynamica Str Men's Running Shoes - White",
                price: 1099000,
                images: ["Reebok_Zig_Men1.png"],
                category: "men-shoes"
            }
        ];
        const womenShoes = [
            {
                id: 1,
                name: "Reebok Energen Run 4 Women's Running Shoes - Grey",
                price: 1199000,
                images: ["Reebok_Energen1.png"],
                category: "women-shoes"
            },
            {
                id: 2,
                name: "Reebok Cityride Women's Running Shoes - Purple",
                price: 1099000,
                images: ["Reebok_Cityride1.png"],
                category: "women-shoes"
            }
        ];

        // Gabungkan dan pilih produk secara acak
        const allProducts = [...menShoes, ...womenShoes];
        this.bestSellers = allProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
    }
};
</script>

<style></style>
