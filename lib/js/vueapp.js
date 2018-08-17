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
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/vU2MmvDCmUo/1000x600"
					},
					{
						itemName: "Jaket",
						store: "The Jacket Store",
						price: 50000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?men-wearing-jacket"
					},
					{
						itemName: "Sepatu Hak Tinggi",
						store: "The Heels Store",
						price: 300000,
						availibility: "Masih tersedia",
						imgurl:
							"https://source.unsplash.com/1000x600/?women-high-heels-sitting-down"
					},
					{
						itemName: "Perhiasan",
						store: "The Jewellry Store",
						price: 300000000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?jewellery"
					},
					{
						itemName: "Laptop",
						store: "The Laptop Store",
						price: 3000000000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?laptop"
					},
					{
						itemName: "Hats",
						store: "The Hats Store",
						price: 50000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?hat,hats"
					},
					{
						itemName: "Kacamata",
						store: "The Kacamata Store",
						price: 50000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?glasses"
					},
					{
						itemName: "Lilin",
						store: "The candle Store",
						price: 50000,
						availibility: "Masih tersedia",
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
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?bali"
					},
					{
						itemName: "Paris",
						store: "Oh Paris, I'm love",
						price: 15000000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?paris"
					},
					{
						itemName: "Lost in Madrid",
						store: "Le Madrid",
						price: 30000000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?madrid"
					},
					{
						itemName: "Italy : Eat, love, Pray",
						store: "Bene la Pierre",
						price: 5000000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?italy"
					},
					{
						itemName: "Flamenco of Spain",
						store: "La bonita",
						price: 40000000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?spain"
					},
					{
						itemName: "Liburan ke Pantai",
						store: "Seribu pulau",
						price: 1000000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?beach"
					},
					{
						itemName: "Naik Naik Gunung",
						store: "Hikers Merbabu",
						price: 1200000,
						availibility: "Masih tersedia",
						imgurl: "https://source.unsplash.com/1000x600/?mountain"
					}
				]
			}
		],
		cart:[]
	},
	methods:{
		addToCart:function(categoryName, itemId){
			for(let category of this.frontPageItems){
				if(category.name===categoryName && category.itemList[itemId]){
					this.cart.push(category.itemList[itemId]);
				}
			}
			
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
		}
	}
});
