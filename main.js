const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeFromCart(id){
            const updatedCart = this.cart.filter((i) => i !== id)
            this.cart = updatedCart;
        }
    }
})
