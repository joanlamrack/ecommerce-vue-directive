let woi = new Vue({
	el: "#app",
	data: {
		frontPageItems: [
			{
				name: "Produk Baru",
				itemList: [
					{
						itemName: "Topi",
						store: "The Hats Store",
						price: 50000,
						stock: 10,
						imgurl: "https://source.unsplash.com/vU2MmvDCmUo/1000x600"
					},
					{
						itemName: "Jaket",
						store: "The Jacket Store",
						price: 50000,
						stock: 10,
						imgurl: "https://source.unsplash.com/1000x600/?men-wearing-jacket"
					},
					{
						itemName: "Sepatu Hak Tinggi",
						store: "The Heels Store",
						price: 300000,
						stock: 10,
						imgurl:
							"https://source.unsplash.com/1000x600/?women-high-heels-sitting-down"
					},
					{
						itemName: "Perhiasan",
						store: "The Jewellry Store",
						price: 300000000,
						stock: 10,
						imgurl: "https://source.unsplash.com/1000x600/?jewellery"
					},
					{
						itemName: "Laptop",
						store: "The Laptop Store",
						price: 3000000000,
						stock: 10,
						imgurl: "https://source.unsplash.com/1000x600/?laptop"
					},
					{
						itemName: "Hats",
						store: "The Hats Store",
						price: 50000,
						stock: 10,
						imgurl: "https://source.unsplash.com/1000x600/?hat,hats"
					},
					{
						itemName: "Kacamata",
						store: "The Kacamata Store",
						price: 50000,
						stock: 10,
						imgurl: "https://source.unsplash.com/1000x600/?glasses"
					},
					{
						itemName: "Lilin",
						store: "The candle Store",
						price: 50000,
						stock: 10,
						imgurl: "https://source.unsplash.com/1000x600/?candle"
					}
				]
			},
			{
				name: "Paket Liburan",
				itemList: [
					{
						itemName: "Bali",
						store: "Bali United",
						price: 10000000,
						stock: 10,
						imgurl: "https://source.unsplash.com/1000x600/?bali"
					},
					{
						itemName: "Paris",
						store: "Oh Paris, I'm love",
						price: 15000000,
						stock: 5,
						imgurl: "https://source.unsplash.com/1000x600/?paris"
					},
					{
						itemName: "Lost in Madrid",
						store: "Le Madrid",
						price: 30000000,
						stock: 2,
						imgurl: "https://source.unsplash.com/1000x600/?madrid"
					},
					{
						itemName: "Italy : Eat, love, Pray",
						store: "Bene la Pierre",
						price: 5000000,
						stock: 2,
						imgurl: "https://source.unsplash.com/1000x600/?italy"
					},
					{
						itemName: "Flamenco of Spain",
						store: "La bonita",
						price: 40000000,
						stock: 2,
						imgurl: "https://source.unsplash.com/1000x600/?spain"
					},
					{
						itemName: "Liburan ke Pantai",
						store: "Seribu pulau",
						price: 1000000,
						stock: 2,
						imgurl: "https://source.unsplash.com/1000x600/?beach"
					},
					{
						itemName: "Naik Naik Gunung",
						store: "Hikers Merbabu",
						price: 1200000,
						stock: 2,
						imgurl: "https://source.unsplash.com/1000x600/?mountain"
					}
				]
			}
		],
		cart: []
	},
	methods: {
		addToCart: function(categoryName, itemId) {
			for (let category of this.frontPageItems) {
				if (category.name === categoryName && category.itemList[itemId]) {
					if (category.itemList[itemId].stock > 0) {
						category.itemList[itemId].stock--;
						if (
							this.checkIfItemExistOnCart(category.itemList[itemId]) === false
						) {
							this.cart.push({
								item: category.itemList[itemId],
								jumlah: 1
							});
						} else {
							this.cart[this.checkIfItemExistOnCart(category.itemList[itemId])]
								.jumlah++;
						}
					}
				}
			}
		},
		checkIfItemExistOnCart: function(item) {
			for (let i = 0; i < this.cart.length; i++) {
				if (this.cart[i].item.itemName === item.itemName) {
					return i;
				}
			}
			return false;
		},
		clearCart: function(){
			this.cart = [];
		}
	},
	computed: {
		priceFormater: function() {
			return function priceFormatter(price) {
				if (typeof price === "number") {
					price = Array.from(String(price));
					let frontNumber = price.length % 3;
					let oi = price.splice(0, frontNumber).join("");
					return `Rp. ${frontNumber ? oi + "." : ""}${priceFormatter(price)}`;
				} else {
					return `${price.splice(0, 3).join("")}.${
						price.length > 3
							? priceFormatter(price) + "."
							: price.splice(0, 3).join("") + ",--"
					}`;
				}
			};
		},
		availablity: function() {
			return function availablity(stock) {
				if (stock > 0) return "Masih Tersedia";
				else return " Tidak tersedia";
			};
		},
		getTotalInCart: function() {
			return function getTotalPriceInCart() {
				return this.cart.map(x => x.item.price * x.jumlah).reduce((a, b) => {
					return a + b;
				}, 0);
			};
		}
	}
});
