<template>
    <div>
        <AppNavbar />
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <h2>All Women's Collections</h2>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <div class="input-group mb-3">
                        <input v-model="search" type="text" class="form-control" placeholder="Find..." aria-label="Find"
                            aria-describedby="basic-addon1" @keyup="searchShoes">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                    </div>
                </div>
            </div>
            <div v-if="products.length === 0">
                <p>No products found for "{{ search }}".</p>
            </div>
            <div v-else>
                <div class="row mb-4">
                    <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
                        <CardProduct :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppNavbar from '@/components/Navbar.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios';

export default {
    name: 'WomenView',
    components: {
        AppNavbar,
        CardProduct,
    },
    data() {
        return {
            products: [],
            search: '',
        }
    },
    methods: {
        setProducts(data) {
            this.products = data;
        },
        searchShoes() {
            if (this.search.trim() === '') {
                axios.get('http://localhost:3000/women-shoes')
                    .then((response) => {
                        this.setProducts(response.data);
                    })
                    .catch((error) => {
                        console.log("Error fetching all women's shoes:", error);
                    });
            } else {
                axios.get('http://localhost:3000/women-shoes')
                    .then((response) => {
                        const filteredProducts = response.data.filter(product =>
                            product.name.toLowerCase().includes(this.search.toLowerCase())
                        );
                        this.setProducts(filteredProducts);
                    })
                    .catch((error) => {
                        console.log("Error searching women's shoes:", error);
                    });
            }
        }
    },
    mounted() {
        axios.get('http://localhost:3000/women-shoes')
            .then((response) => {
                this.setProducts(response.data);
            })
            .catch((error) => {
                console.log("Error fetching women's shoes:", error);
            });
    }
}
</script>