const express = require('express');

const router = express.Router();
    
const productsData = [
    {
      "id": 1,
      "name": "Botas Vaqueras",
      "description": "Combina estas botas de forajido con tus vaqueros favoritos, un sombrero gastado y una chaqueta de cuero para un conjunto que exuda carisma occidental. Ya sea en un honky-tonk o abriendo tu propio camino, estas botas son tu cómplice. Talla 9.",
      "price": 35,
      "image": "https://img.freepik.com/free-photo/cowboy-inspiration-with-boots-chair_23-2149484732.jpg?w=826&t=st=1705568555~exp=1705569155~hmac=0b17fe38c210a44a615e6ca1529140efb1c3809681e7d1f7de7e1ae652c2544b",
      "status": "usado"
    },
    {
      "id": 2,
      "name": "Enfriador de Sandía",
      "description": "Diseñado para mantener la esencia del verano siempre al alcance de tu mano. Este innovador refrigerador no es solo un electrodoméstico de enfriamiento; es un testimonio de conveniencia, asegurando que el sabor fresco y refrescante de la sandía fría esté disponible siempre que lo desees.",
      "price": 20,
      "image": "https://i.gzn.jp/img/2010/07/29/marugoto_tamachan/P1210050.jpg",
      "status": "nuevo"
    },
    {
      "id": 3,
      "name": "Suéter de Punto",
      "description": "Suéter de punto hecho de lana merina 100% de alta calidad. Ten en cuenta que los champiñones no son comestibles. Talla M.",
      "price": 20,
      "image": "https://img.freepik.com/premium-photo/baby-knitted-clothes-handmade-knitted-sweater-with-fly-agaric-mushrooms-jacket-with-embroidery_108930-7294.jpg?w=826",
      "status": "usado"
    },
    {
      "id": 4,
      "name": "Alpargatas de Dalí",
      "description": "Una vez honradas por el propio maestro surrealista, Salvador Dalí. Más que meramente calzado, estas alpargatas ofrecen un portal único hacia los paisajes fantásticos que alimentaron la creatividad del artista. El lienzo de tu mente se convertirá en un patio de recreo de ideas surrealistas.",
      "price": 100,
      "image": "https://tonipons.com/media/catalog/product/cache/8a1ada7a5dd5cf4c25574b2c27fe03d6/1/6/1676392767_dali_negre__1.2209.jpg",
      "status": "nuevo"
    },
    {
      "id": 5,
      "name": "Paraguas Vestible",
      "description": "Diseñado para aquellos que se niegan a dejar que un repentino aguacero empañe su estilo, este accesorio revolucionario combina funcionalidad y moda.",
      "price": 10,
      "image": "https://m.media-amazon.com/images/I/71r86ZoozYL.jpg",
      "status": "nuevo"
    },
    {
      "id": 6,
      "name": "Altavoz",
      "description": "Sumérgete en un reino de excelencia auditiva sin igual con este asombroso altavoz. Desde graves profundos y resonantes hasta los mejores agudos, experimenta una claridad de audio como nunca antes.",
      "price": 30,
      "image": "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722656.jpg?w=826&t=st=1705573130~exp=1705573730~hmac=1c34cc540be0a2af14a3bf4faab3aa88ac2ca5098d14164fd5770af3b781e20d",
      "status": "usado"
    },
    {
      "id": 7,
      "name": "Calcetines de Confianza Frita",
      "description": "Pisa con confianza en un mundo de estilo seguro con estos calcetines. Olvídate de caminar con cautela y abraza cada paso con audacia. Fabricados para aquellos que irradian confianza, estos calcetines presumen un diseño de huevo frito.",
      "price": 8,
      "image": "https://thelagaadi.com/cdn/shop/collections/long_socks-2x3_copy_982b4e38-6e3c-439c-b25a-9f1e48540a17.jpg?v=1695974128&width=1080",
      "status": "nuevo"
    },
    {
      "id": 8,
      "name": "Koh-i-Noor",
      "description": "Contempla el Diamante Koh-i-Noor, un tesoro que encarna una rica tapicería de historia, poder y belleza sin igual. Este diamante de renombre mundial tiene una historia envuelta en misterio y grandeza.",
      "price": 100000000,
      "image": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/4/2023_4$largeimg_486849653.jpg",
      "status": "nuevo"
    },
    {
      "id": 9,
      "name": "El Vellocino de Oro",
      "description": "Una encarnación de los rayos dorados del sol. Este brillante vellón, una vez guardado por el poderoso carnero Chrysomallos, llama a aquellos con el corazón de un héroe a embarcarse en un viaje de significado sin igual.",
      "price": 90,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Jason_Pelias_Louvre_K127.jpg/1200px-Jason_Pelias_Louvre_K127.jpg",
      "status": "usado"
    },
    {
      "id": 10,
      "name": "WC Fish n Flush",
      "price": 99.90,
      "status": "nuevo",
      "description": "Edición limitada, y en perfectas condiciones. No incluye peces.",
      "image": "https://assets.newatlas.com/dims4/default/32dc20a/2147483647/strip/true/crop/530x647+0+0/resize/530x647!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F6076_29080652716.jpg"
    },
    {
      "id": 11,
      "name": "Sandía en Cubitos",
      "price": 29.99,
      "status": "nuevo",
      "description": "Traído directamente de la tierra del sol naciente, firmado por Tomoyoki Ono. Incluye moldes para hacer tus propias sandías.",
      "image": "https://cdn.thisiswhyimbroke.com/images/cubed-watermelon-mold-640x533.jpg"
    },
    {
      "id": 12,
      "name": "'Whine' Glass",
      "price": 200,
      "status": "nuevo",
      "description": "El diseño es tan malo que querrás quejarte (o en inglés, whine!). Pero al menos no hay derrames.",
      "image": "https://www.yankodesign.com/images/design_news/2020/02/auto-draft/uncomfortable_designs-ds-yankodesign13.jpg"
    }   
  ];

router.get('/', (req, res) => {
  res.json(productsData);
});

router.get('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);

  const product = productsData.find(product => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;
