import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Kue Red velved",
    price: 55000,
    description:
      "Aneka rasa Red velved, 500 gram Kemasan toples!",
    image: "/images/1.png",
    category: "Kue Kering",
  },
  {
    id: "2",
    name: "Kue Red velved",
    price: 30000,
    description:
      "Aneka rasa Red velved ,250 gram Kemasan toples!",
    image: "/images/1.png",
    category: "Kue Kering",
  },
  {
    id: "3",
    name: "Kue Kastengel",
    price: 65000,
    description:
      "Kue Kastengel Gurih dan asin keju edam, 500 gram  Kemasan Toples !",
    image: "/images/2.png",
    category: "Kue kering",
  },
  {
    id: "4",
   name: "Kue Kastengel",
    price: 35000,
    description:
      "Kue Kastengel Gurih dan asin keju edam, 250 gram Kemasan Toples !",
    image: "/images/2.png",
    category: "Kue kering",
  },
  {
    id: "5",
    name: "Kue Klepon cookie",
    price: 55000,
    description:
      "isian gula merah lumer, dan taburan kelapa gurih, 500 gram Kemasan Toples !",
    image: "/images/3.png",
    category: "Kue Basah",
  },
  {
    id: "6",
     name: "Kue Klepon cookie",
    price: 30000,
    description:
      "isian gula merah lumer, dan taburan kelapa gurih, 250 gram Kemasan Toples !",
    image: "/images/3.png",
    category: "Kue Basah",
  },
  {
    id: "7",
    name: "Kue Semprit",
    price: 55000,
    description:
      "renyah dan rasa manis lembut yang lumer di mulut, 500 gram Kmeasan Toples !.",
    image: "/images/4.png",
    category: "Kue kering",
  },
  {
    id: "8",
     name: "Kue Semprit",
    price: 30000,
    description:
      "renyah dan rasa manis lembut yang lumer di mulut, 250 gram Kemasan Toples !.",
    image: "/images/4.png",
    category: "Kue kering",
  },
  {
    id: "9",
    name: "Brownies Cheesecake Caramel",
    price: 120000,
    description:
      " lapisan keju creamy dan siraman karamel manis legit. Lumer",
    image: "/images/8.png",
    category: "Kue Basah",
  },
   {
    id: "10",
    name: "Kue Putu",
    price: 30000,
    description:
      "aroma pandan yang khas, isian gula merah lumer, dan taburan kelapa gurih.",
    image: "/images/9.png",
    category: "Kue Basah",
  },
   {
    id: "11",
    name: "Kue Sagu keju",
    price: 65000,
    description:
      "kue kering lembut dan lumer dan rasa keju gurih,Ringan ,500 gram Kemasan Toples !.",
    image: "/images/5.png",
    category: "Kue kering",
  },
   {
    id: "12",
    name: "Kue Sagu keju",
    price: 35000,
    description:
      "kue kering lembut dan lumer dan rasa keju gurih,Ringan ,250 gram Kemasan Toples !.",
    image: "/images/5.png",
    category: "Kue kering",
  },
   {
    id: "13",
    name: "Kue Nastar",
    price: 65000,
    description:
      "kue kering klasik ,lembut dan legit, 500 gram Kemasan Toples !.",
    image: "/images/7.png",
    category: "Kue kering",
  },
   {
    id: "14",
    name: "Kue Nastar",
    price: 35000,
    description:
      "kue kering klasik ,lembut dan legit, 250 gram Kemasan Toples !.",
    image: "/images/7.png",
    category: "Kue kering",
  },
   {
    id: "15",
    name: "Kue Tumbprin",
    price: 55000,
    description:
      "kue kering lembut dengan cekungan cantik berisi selai manis strawberry, 500 gram Kemasan Toples !.",
    image: "/images/6.png",
    category: "Kue kering",
  },
   {
    id: "16",
    name: "Kue Tumbprin",
    price: 30000,
    description:
      "kue kering lembut dengan cekungan cantik berisi selai manis strawberry, 250 gram Kemasan Toples !.",
    image: "/images/6.png",
    category: "Kue kering",
  },
   {
    id: "17",
    name: "Kue Putri Salju Edam",
    price: 30000,
    description:
      "kue kering lembut, renyah keju edam di taburi gula halus, 250 gram Kemasan Toples !.",
    image: "/images/10.png",
    category: "Kue kering",
  },
  {
    id: "18",
    name: "Kue Putri Salju Edam",
    price: 55000,
    description:
      "kue kering lembut, renyah keju edam di taburi gula halus, 500 gram Kemasan Toples !.",
    image: "/images/10.png",
    category: "Kue kering",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
