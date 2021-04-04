const products = [
    {
        "id": 10,
        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",
        "name": "MEN'S BETTER THAN NAKED&trade; JACKET",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
    },
    {
        "id": 11,
        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",

        "name": "WOMEN'S SINGLE-TRACK SHOE",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
    },
    {
        "id": 12,

        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",

        "name": "Enduro Boa&reg; Hydration Pack",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"
    }
    ,

    {
        "id": 13,

        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",

        "name": "MEN'S BETTER THAN NAKED&trade; JACKET",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
    },
    {
        "id": 14,

        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",

        "name": "WOMEN'S BETTER THAN NAKED&trade; JACKET",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
    },
    {
        "id": 15,

        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",

        "name": "WOMEN'S SINGLE-TRACK SHOE",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
    },
    {
        "id": 16,

        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",

        "name": "Enduro Boa&reg; Hydration Pack",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"
    },
    {
        "id": 17,
        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",

        "name": "WOMEN'S SINGLE-TRACK SHOE",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
    },
    {
        "id": 18,
        "type": "HardGood",
        "price": 5.99,
        "stock": 18,
        "quantity": 10,
        "upc": "039800013200",
        "shipping": 5.49,
        "description": "Alkaline batteries; 1.5V",
        "manufacturer": "Energizer",
        "model": "E90BP-2",
        "url": "http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&idId=333179&cmp=RMXCC",
        "name": "WOMEN'S BETTER THAN NAKED&trade; JACKET",
        "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
    }



];
export default products;
