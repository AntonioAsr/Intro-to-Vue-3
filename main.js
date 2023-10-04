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
            const itemToRemove = this.cart.indexOf(id);
            if(itemToRemove > -1) this.cart.splice(itemToRemove, 1);
        }
    }
})
