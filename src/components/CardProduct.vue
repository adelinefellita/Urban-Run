<template>
    <router-link class="nav-link-card" :to="{ name: 'KatalogDetail', params: { id: product.id } }">
        <div class="card shadow card-product">
            <!-- Mengambil gambar pertama dari array images -->
            <img :src="'/images/' + product.images[0]" class="card-img-to zoom-effect" alt="...">
            <div class="card-body">
                <h5 class="card-title no-underline">{{ product.name }}</h5>
                <p class="card-text no-underline">IDR {{ product.price.toLocaleString() }}</p>
            </div>
        </div>
    </router-link>

</template>

<script>
export default {
    name: 'CardProduct',
    props: {
        product: Object
    }
}
</script>

<style></style>
