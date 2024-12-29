<template>
    <div class="card shadow card-product">
        <!-- Mengambil gambar pertama dari array images -->
        <img :src="/images/${ product.images[0] }" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">IDR {{ product.price.toLocaleString() }}</p>
        </div>
    </div>
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
