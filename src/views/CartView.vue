<template>
    <div class="cart-container">
        <AppNavbar />
        <div class="container">
            <h2>Your Cart</h2>
            <div v-if="cartItems.length === 0">
                <p>Your cart is empty.</p>
            </div>
            <div v-else>
                <div class="cart-item" v-for="(item, index) in cartItems" :key="item.product.id">
                    <div class="cart-item-details">
                        <img :src="'/images/' + item.product.images[0]" alt="Product Image" class="img-fluid" />
                        <div class="cart-item-info">
                            <h4>{{ item.product.name }}</h4>
                            <p>Size: {{ item.size }}</p>
                            <p>Quantity: {{ item.quantity }}</p>
                            <p>Price: Rp. {{ (item.product.price || 0) * item.quantity }}</p>
                            <button @click="removeItem(index)" class="btn btn-danger">Remove</button>
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
        // Function to convert price string to number
        formatPrice(price) {
            return parseFloat(price.replace(/\./g, '').replace(',', '.'));
        },
        totalPrice() {
            return this.cartItems.reduce((total, item) => {
                // Pastikan harga dikonversi ke angka sebelum dihitung
                const itemPrice = this.formatPrice(item.product.price);
                return total + itemPrice * item.quantity;
            }, 0);
        }
    },
    methods: {
        removeItem(index) {
            // Hapus item dari array
            this.cartItems.splice(index, 1);
            // Update cart di localStorage
            localStorage.setItem('cart', JSON.stringify(this.cartItems));
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

.cart-item-details img {
    display: inline-block;
    width: 100%;
}

.cart-item-info {
    margin-left: 10px;
}

.total {
    text-align: right;
}

.btn-danger {
    background-color: #f44336;
    color: white;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 14px;
}
</style>
