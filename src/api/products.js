const express = require('express');

const router = express.Router();
    
const productsData = [
    {
      "id": 1,
      "name": "Cowboy Boots",
      "description": "Pair these outlaw boots with your favorite jeans, a worn-in hat, and a leather jacket for an ensemble that exudes Western charisma. Whether you're in a honky-tonk or blazing your own trail, these boots are your partner in crime. Size 9.",
      "price": 35,
      "image": "https://img.freepik.com/free-photo/cowboy-inspiration-with-boots-chair_23-2149484732.jpg?w=826&t=st=1705568555~exp=1705569155~hmac=0b17fe38c210a44a615e6ca1529140efb1c3809681e7d1f7de7e1ae652c2544b",
      "status": "used"
    },
    {
      "id": 2,
      "name": "Woolen Jumper",
      "description": "Cozy and stylish woolen jumper to keep you warm during chilly seasons. This garment seamlessly combines comfort and fashion, making it a must-have addition to your winter wardrobe. Size S.",
      "price": 15,
      "image": "https://img.freepik.com/premium-photo/sweater-isolated-white_87394-14018.jpg?w=900",
      "status": "used"
    },
    {
      "id": 3,
      "name": "Watermelon Cooler",
      "description": "Designed to keep the essence of summer always at your fingertips. This innovative fridge is not just a cooling appliance; it's a testament to convenience, ensuring that the crisp, refreshing taste of chilled watermelon is available whenever and wherever you desire.",
      "price": 20,
      "image": "https://i.gzn.jp/img/2010/07/29/marugoto_tamachan/P1210050.jpg",
      "status": "new"
    },
    {
      "id": 4,
      "name": "One-Sheet Wonder",
      "description": "Introducing our revolutionary Quantum Absorbency Toilet Roll—an unparalleled breakthrough in bathroom innovation. With an extreme absorbing power that defies expectations, this toilet roll is engineered to redefine your bathroom experience.",
      "price": 8,
      "image": "https://img.freepik.com/premium-photo/rolls-white-toilet-paper-textured-background_460171-3109.jpg?w=826",
      "status": "new"
    },
    {
      "id": 5,
      "name": "Knitted Jumper",
      "description": "Knitted sweater made from high-quality 100% merino wool. Please note that the mushrooms are not edible. Size M.",
      "price": 20,
      "image": "https://img.freepik.com/premium-photo/baby-knitted-clothes-handmade-knitted-sweater-with-fly-agaric-mushrooms-jacket-with-embroidery_108930-7294.jpg?w=826",
      "status": "used"
    },
    {
      "id": 6,
      "name": "Dali's Espadrilles",
      "description": "Once graced by the surreal master himself, Salvador Dali. More than mere footwear, these espadrilles offer a unique portal into the fantastical landscapes that fueled the artist's creativity. The canvas of your mind will become a playground of surreal ideas. Size 9.",
      "price": 100,
      "image": "https://tonipons.com/media/catalog/product/cache/8a1ada7a5dd5cf4c25574b2c27fe03d6/1/6/1676392767_dali_negre__1.2209.jpg",
      "status": "new"
    },
    {
      "id": 7,
      "name": "Wearable Umbrella",
      "description": "Designed for those who refuse to let a sudden downpour dampen their style, this revolutionary accessory combines functionality with fashion. The hands-free design allows you to carry on with your day, whether you're navigating busy streets, juggling shopping bags, or answering calls-all while staying perfectly dry.",
      "price": 10,
      "image": "https://m.media-amazon.com/images/I/71r86ZoozYL.jpg",
      "status": "new"
    },
    {
      "id": 8,
      "name": "Speaker",
      "description": "Immerse yourself in a realm of unparalleled audio excellence with this amazing speaker. From deep, resonant bass to the finest trebles, experience audio clarity like never before.",
      "price": 30,
      "image": "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722656.jpg?w=826&t=st=1705573130~exp=1705573730~hmac=1c34cc540be0a2af14a3bf4faab3aa88ac2ca5098d14164fd5770af3b781e20d",
      "status": "used"
    },
    {
      "id": 9,
      "name": "Fried Confidence Socks",
      "description": "Step confidently into a world of self-assured style with these socks. Forget about walking on eggshells and embrace every step with boldness. Crafted for those who exude confidence, these socks boast a fried egg design.",
      "price": 8,
      "image": "https://thelagaadi.com/cdn/shop/collections/long_socks-2x3_copy_982b4e38-6e3c-439c-b25a-9f1e48540a17.jpg?v=1695974128&width=1080",
      "status": "new"
    },
    {
      "id": 10,
      "name": "Koh-i-Noor",
      "description": "Behold the Koh-i-Noor Diamond, a treasure that embodies a rich tapestry of history, power, and unparalleled beauty. This world-renowned diamond, with a history steeped in mystery and grandeur, has captivated the imagination of rulers, conquerors, and admirers for centuries.",
      "price": 100000000,
      "image": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/4/2023_4$largeimg_486849653.jpg",
      "status": "new"
    },
    {
      "id": 11,
      "name": "The Golden Fleece",
      "description": "An embodiment of the suns golden rays.  This shimmering fleece, once guarded by the mighty ram Chrysomallos, beckons those with the heart of a hero to embark on a journey of unparalleled significance.",
      "price": 90,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Jason_Pelias_Louvre_K127.jpg/1200px-Jason_Pelias_Louvre_K127.jpg",
      "status": "used"
    },
    {
      "id": 12,
      "name": "WC Fish n Flush",
      "price": 99.90,
      "status": "new",
      "description": "Limited edition, and in perfect condition. Does not include fish",
      "image": "https://assets.newatlas.com/dims4/default/32dc20a/2147483647/strip/true/crop/530x647+0+0/resize/530x647!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F6076_29080652716.jpg"
    },
    {
      "id": 13,
      "name": "Cubed Watermelon",
      "price": 29.99,
      "status": "new",
      "description": "Brought directly from the land of the rising sun, signed by Tomoyoki Ono. It is not edible. Includes moulds to make your own watermelons.",
      "image": "https://cdn.thisiswhyimbroke.com/images/cubed-watermelon-mold-640x533.jpg"
    },
    {
      "id": 14,
      "name": "Uncomfortable Wine Glass",
      "price": 200,
      "status": "new",
      "description": "Particularly uncomfortable glass, which allows you to smell your wine better when drinking it. Difficult to wash. In very good condition.",
      "image": "https://www.yankodesign.com/images/design_news/2020/02/auto-draft/uncomfortable_designs-ds-yankodesign13.jpg"
    }
  ];

router.get('/', (req, res) => {
  res.json(productsData);
});

router.get('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);

  const product = productsData.products.find(product => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;
