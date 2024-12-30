<template>
    <div class="cart-container">
        <AppNavbar />
        <div class="container">
            <h2>Your Cart</h2>
            <div v-if="cartItems.length === 0">
                <p>Your cart is empty.</p>
            </div>
            <div v-else>
                <div class="cart-item" v-for="item in cartItems" :key="item.product.id">
                    <div class="cart-item-details">
                        <img :src="'/images/' + item.product.images[0]" alt="Product Image" class="img-fluid"
                            width="100" />
                        <div class="cart-item-info">
                            <h4>{{ item.product.name }}</h4>
                            <p>Size: {{ item.size }}</p>
                            <p>Quantity: {{ item.quantity }}</p>
                            <p>Price: Rp. {{ item.product.price * item.quantity }}</p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="total">
                    <h4>Total: Rp. {{ totalPrice }}</h4>
                    <button class="btn btn-primary">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";

export default {
    name: "CartView",
    components: {
        AppNavbar,
    },
    data() {
        return {
            cartItems: [], // Array to store items in the cart
        };
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
        }
    },
    mounted() {
        // Retrieve cart data from localStorage (if any)
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        this.cartItems = cartData;
    },
};
</script>

<style scoped>
.cart-container {
    padding-top: 50px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.cart-item-details {
    display: flex;
}

.cart-item-info {
    margin-left: 10px;
}

.total {
    text-align: right;
}
</style>
