import { Rating,SmallRating, HeartSvg, ShopSvg } from "./icons";
import categorieImg1 from '../assets/img/png/categorieImg-1.png'
import categorieImg2 from '../assets/img/png/categorieImg-2.png'
import categorieImg3 from '../assets/img/png/categorieImg-3.png'
import categorieImg4 from '../assets/img/png/categorieImg-4.png'
import categorieImg5 from '../assets/img/png/categorieImg-5.png'
import categorieImg6 from '../assets/img/png/categorieImg-6.png'
import blogPageImg1 from '../assets/img/png/blog-page-img-1.png'
import blogPageImg2 from '../assets/img/png/blog-page-img-2.png'
import blogPageImg3 from '../assets/img/png/blog-page-img-3.png'
import blogPageImg4 from '../assets/img/png/blog-page-img-4.png'
import userImg1 from '../assets/img/png/testimonial-swiper-img-1.png'
import userImg2 from '../assets/img/png/testimonial-swiper-img-2.png'
import gamingCheirImg from '../assets/img/png/gaming-chair-img.png'
import pcImg from '../assets/img/png/pc-img.png'
import routerImg from '../assets/img/png/router-img.png'
import populerProductImg1 from '../assets/img/png/populer-product-img-1.png'
import populerProductImg2 from '../assets/img/png/populer-product-img-2.png'
import populerProductImg3 from '../assets/img/png/populer-product-img-3.png'
export const FEATURED_CATEGORIES_PRODUCTS = [
    {
        categorieName: 'Sensors & Modules',
        categorieImg: categorieImg1,
    },
    {
        categorieName: 'Custom PC Parts',
        categorieImg: categorieImg2
    },
    {
        categorieName: 'DIY Tools',
        categorieImg: categorieImg3
    },
    {
        categorieName: 'Cables & Connectors',
        categorieImg: categorieImg4
    },
    {
        categorieName: 'Gaming Peripherals',
        categorieImg: categorieImg5
    },
    {
        categorieName: 'Raspberry Pi Kits',
        categorieImg: categorieImg6
    },
]
export const BLOG_PAGE_DATA = [
    {
        heading: 'How to Build a Mini NAS',
        para: 'Learn to build your own network storage system with simple components.',
        button: 'Read Guide',
        blogPgaeImg: blogPageImg1,
        active: false
    },
    {
        heading: '5 Tools Every Maker Should Own',
        para: 'The essential toolkit for every DIY electronics enthusiast.',
        button: 'Read Guide',
        blogPgaeImg: blogPageImg2,
        active: false
    },
    {
        heading: ' Inside a Raspberry Pi Retro Console',
        para: 'Step-by-step log of building a retro game machine.',
        button: 'Read Guide',
        blogPgaeImg: blogPageImg3,
        blogPgaeImg_1: blogPageImg4,
        active: true
    },
]
export const TESTMONIAL_DATA = [
    {
        image: userImg1,
        heading: "William gate",
        work: "CEO"
    },
    {
        image: userImg2,
        heading: "Darrell Steward",
        work: "Manager"
    },
    {
        image: userImg1,
        heading: "William gate",
        work: "CEO"
    },
    {
        image: userImg2,
        heading: "Darrell Steward",
        work: "Manager"
    },
    {
        image: userImg1,
        heading: "William gate",
        work: "CEO"
    }
]
export const BESTSELLER_DATA = [
    {
        img: pcImg,
        title: "Vortex Gaming PC",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: 52350,
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
        id: 1
    },
    {
        img: routerImg,
        title: "D-Link ADSL Wireless Router DSL2790U",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: 1456,
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
        id: 2
    },
    {
        img: gamingCheirImg,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: 21456,
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
        id: 3
    },
    {
        img: pcImg,
        title: "Vortex Gaming PC",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: 52350,
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
        id: 4
    },
    {
        img: routerImg,
        title: "D-Link ADSL Wireless Router DSL2790U",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: 1456,
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
        id: 5
    },
    {
        img: gamingCheirImg,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: 21456,
        svg: SmallRating,
        Heart: HeartSvg,
        shop: ShopSvg,
        id: 6
    },
];
export const POPULAR_PRUDUCT_DATA = [
    {
        img: populerProductImg1,
        title: "NZXT H510 Elite PC Case",
        description: "Tempered glass case with clean cable management and optimized airflow.",
        price: 21313,
        svg: Rating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: populerProductImg2,
        title: "MSI GeForce RTX 4070 GPU",
        description: "Ray tracing, AI-powered DLSS, and ultra-performance — redefine how you game.",
        price: 34535,
        svg: Rating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
    {
        img: populerProductImg3,
        title: "Gaming Chair",
        description: "Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.",
        price: 34232,
        svg: Rating,
        Heart: HeartSvg,
        shop: ShopSvg,
    },
];
