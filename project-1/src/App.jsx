// import Card from "./Components/Card";

import IceCream from "./Components/IceCream";

// import ProductCard from "./Components/ProductCard";

const App = () => {
  // const data = [
  //   {
  //     juice_name: "Orange Juice",
  //     ingredients: ["Orange", "Water", "Sugar"],
  //     price: 90,
  //     photo:
  //       "https://i.pinimg.com/1200x/0d/1c/f4/0d1cf4ad7af8e402daba6454bbe9a115.jpg",
  //   },
  //   {
  //     juice_name: "Mango Juice",
  //     ingredients: ["Mango", "Milk", "Sugar"],
  //     price: 120,
  //     photo:
  //       "https://i.pinimg.com/736x/fd/6c/1e/fd6c1ee5b59575e1ae092fc744926cad.jpg",
  //   },
  //   {
  //     juice_name: "Watermelon Juice",
  //     ingredients: ["Watermelon", "Mint", "Lime"],
  //     price: 80,
  //     photo:
  //       "https://i.pinimg.com/736x/01/81/f1/0181f1a6c35dfb278704ae73610ac925.jpg",
  //   },
  //   {
  //     juice_name: "Pomegranate Juice",
  //     ingredients: ["Pomegranate", "Water", "Sugar"],
  //     price: 130,
  //     photo:
  //       "https://i.pinimg.com/736x/66/43/d8/6643d82bbab3d071d58f424a669257db.jpg",
  //   },
  //   {
  //     juice_name: "Pineapple Juice",
  //     ingredients: ["Pineapple", "Water", "Sugar"],
  //     price: 100,
  //     photo:
  //       "https://i.pinimg.com/1200x/4c/c4/9d/4cc49d102bf1d2a2d3590d5dea3ef19f.jpg",
  //   },
  //   {
  //     juice_name: "Strawberry Juice",
  //     ingredients: ["Strawberry", "Water", "Sugar"],
  //     price: 140,
  //     photo:
  //       "https://i.pinimg.com/736x/10/f0/3d/10f03d1c6ee484234a8ef0ae6476d401.jpg",
  //   },
  //   {
  //     juice_name: "Carrot Juice",
  //     ingredients: ["Carrot", "Apple", "Ginger"],
  //     price: 70,
  //     photo:
  //       "https://i.pinimg.com/1200x/b8/7f/42/b87f42e581b8bb44a91c4b93f4bb9789.jpg",
  //   },
  //   {
  //     juice_name: "Green Detox Juice",
  //     ingredients: ["Spinach", "Apple", "Cucumber"],
  //     price: 90,
  //     photo:
  //       "https://i.pinimg.com/1200x/0a/eb/8a/0aeb8a1977b69abb00d004660045780f.jpg",
  //   },
  //   {
  //     juice_name: "Apple Juice",
  //     ingredients: ["Apple", "Water", "Sugar"],
  //     price: 85,
  //     photo:
  //       "https://i.pinimg.com/1200x/4c/12/a6/4c12a6adaa09fbe76ff115613477238d.jpg",
  //   },
  //   {
  //     juice_name: "Beetroot Juice",
  //     ingredients: ["Beetroot", "Apple", "Lemon"],
  //     price: 95,
  //     photo:
  //       "https://i.pinimg.com/736x/14/5d/a7/145da73f7efd54a9a3798d29c2f76bfb.jpg",
  //   },
  // ];

//   const ProductData = [
   
//   {
//     "photo": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
//     "name": "Nike Air Max 270",
//     "price": "$150",
//     "tagline": "Feel the Air",
//     "details": "The first lifestyle Air Max with a 270-degree visible Air unit.",
//     "logo": "https://logo.clearbit.com/nike.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
//     "name": "Adidas Ultraboost",
//     "price": "$180",
//     "tagline": "Energy Return",
//     "details": "Revolutionary boost cushioning for incredible energy return.",
//     "logo": "https://logo.clearbit.com/adidas.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
//     "name": "New Balance 574",
//     "price": "$85",
//     "tagline": "Worn by Anyone",
//     "details": "Classic suede and mesh construction for timeless style.",
//     "logo": "https://logo.clearbit.com/newbalance.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800",
//     "name": "Puma RS-X",
//     "price": "$110",
//     "tagline": "Extreme Design",
//     "details": "Bulky silhouette with bold color palettes and retro tech.",
//     "logo": "https://logo.clearbit.com/puma.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
//     "name": "Jordan 1 Retro",
//     "price": "$170",
//     "tagline": "A Global Icon",
//     "details": "The legendary high-top that started the sneaker revolution.",
//     "logo": "https://logo.clearbit.com/jordan.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
//     "name": "Vans Old Skool",
//     "price": "$65",
//     "tagline": "Off The Wall",
//     "details": "The classic skate shoe featuring the iconic side stripe.",
//     "logo": "https://logo.clearbit.com/vans.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1551107644-7936a2a8d8ba?w=800",
//     "name": "Reebok Classic",
//     "price": "$75",
//     "tagline": "Always Classic",
//     "details": "Soft garment leather upper for instant comfort and style.",
//     "logo": "https://logo.clearbit.com/reebok.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800",
//     "name": "Asics Gel-Kayano",
//     "price": "$160",
//     "tagline": "Stability Reimagined",
//     "details": "Premium support and comfort for long-distance road running.",
//     "logo": "https://logo.clearbit.com/asics.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800",
//     "name": "Converse Chuck 70",
//     "price": "$90",
//     "tagline": "Built Better",
//     "details": "Enhanced cushioning and thicker canvas for a premium feel.",
//     "logo": "https://logo.clearbit.com/converse.com"
//   },
//   {
//     "photo": "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800",
//     "name": "Salomon Speedcross",
//     "price": "$130",
//     "tagline": "Master the Trail",
//     "details": "Aggressive grip for technical trails and soft ground.",
//     "logo": "https://logo.clearbit.com/salomon.com"
//   },
// ];
  return (
    <>
      {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {data.map(function (juice) {
          return <Card data={juice} />;
        })}
      </section> */}

      {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
        {ProductData.map(function (product) {
          return <ProductCard key={product.id} data={product} />;
        })}
      </section> */}
      <section>
        <IceCream/>
      </section>
    </>
    
  );
};

export default App;
