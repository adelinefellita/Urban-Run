<template>
    <footer class="text-white py-5">
        <div class="container">
            <div class="row">
                <!-- GOODS Section -->
                <div class="col-md-3">
                    <h5 class="mb-4">TRENDING NOW</h5>
                    <ul class="list-footer">
                        <li>New Arrivals</li>
                        <li>Brands</li>
                        <li>Special Releases</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Raffle</li>
                        <li>Footwear</li>
                        <li>Bags</li>
                        <li>SALE</li>
                    </ul>
                </div>

                <!-- BRANDS Section -->
                <div class="col-md-3">
                    <h5 class="mb-4">BRANDS</h5>
                    <ul class="list-footer">
                        <li>Nike</li>
                        <li>Adidas</li>
                        <li>Asics</li>
                        <li>New Balance</li>
                        <li>Salomon</li>
                        <li>All Brands</li>
                    </ul>
                </div>

                <!-- FOLLOW US Section -->
                <div class="col-md-3">
                    <h5 class="mb-4">FOLLOW US</h5>
                    <ul class="list-footer">
                        <li>📺 UrbanRun Indonesia</li>
                        <li>📷 urbanrun_id</li>
                        <li>🎵 urbanrun_id</li>
                    </ul>
                </div>

                <!-- SUPPORT Section -->
                <div class="col-md-3">
                    <h5 class="mb-4">SUPPORT</h5>
                    <ul class="list-footer">
                        <li>About Us</li>
                        <li>Store Locations</li>
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>

            <hr class="border-secondary" />

            <!-- Contact Information -->
            <div class="row">
                <div class="col-md-12 text-center">
                    <p class="mb-2">
                        📞 +62 812-1111-2222 | ✉️ info@urbanrun.co.id
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <br />
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat | 📞
                        0853-1111-1010
                    </p>
                </div>
            </div>

            <hr class="border-secondary" />

            <!-- Footer Bottom -->
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>© UrbanRun Indonesia. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
};
</script>

<style scoped>
footer {
    font-size: 14px;
    margin-top: 5rem;
    background-color: #243642;
}

h5 {
    font-weight: bold;
    text-transform: uppercase;
}

.list-footer li {
    background-color: transparent;
}
</style>
