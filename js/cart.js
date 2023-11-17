'use strict';

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
	getTotalPrice() {
		return this.totalPrice;
	},
	add(name, price, amount = 1) {
		this.items.push({name, price, amount});

		this.calculateItemPrice()
		this.increaseCount(amount);
	},
	increaseCount(num) {
		this.count = this.items.reduce((acc, item) => acc + num, 0);
	},
	calculateItemPrice() {
		this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.amount, 0);
	},
	clear() {
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
	},
	print() {
		console.log(JSON.stringify(this.items));
		this.getTotalPrice();
	},
}

cart.add('Apples', 40);
cart.add('Bananas', 100);
cart.add('Oranges', 50);

cart.print();
//cart.clear();