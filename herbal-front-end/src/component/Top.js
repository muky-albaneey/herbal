import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import data from '../../utills/data.json';
// import Count from '../component/counter/Count';
import { CiCoinInsert } from 'react-icons/ci';
const Top = () => {
    return (_jsxs("div", { className: "", children: [_jsx("div", { className: 'white-gradient' }), _jsxs("aside", { className: "homeSideContent", children: [_jsx("div", { className: 'white-gradient' }), _jsx("div", { className: "orangeCircle" }), _jsx(motion.h1, { initial: { y: "2rem", opacity: 0 }, animate: { y: 0, opacity: 1, }, transition: { duration: 2, type: "spring" }, className: 'typeAnim', children: _jsx(TypeAnimation, { sequence: [
        'Our Goal For You is To ',
        1000,
        'Discover Most Suitable ',
         1000,
        ' Apartments Find a perfect property',
        1000,
        ' Where you`ll love to live ',
         1000,
        ], wrapper: "span", speed: 50, style: { fontSize: '2.5rem', display: 'inline-block' }, repeat: Infinity }) }), _jsxs("article", { className: 'homeLeftText paddings ', children: [_jsx("span", { className: 'orangeText_2', children: "Find a variety of properties that suit you very easily Forget all difficulties in finding a residence for you" }), _jsx("span", { className: 'orangeText_2', children: "We helps businesses customize, automate and scale up their ad production and delivery." }), _jsxs("div", { className: "innerHomeText", children: [_jsxs(Button, { className: "innerHomeTextBtn", style: { backgroundColor: '#f4a75b', border: 'none' }, children: ["Price check ", _jsx(CiCoinInsert, {})] }), _jsx(Count, {})] })] })] }), _jsx("main", { className: 'homeSideWrapper', children: _jsx("div", { className: "homeRight flexCenter", children: _jsx(motion.div, { initial: { x: "7rem" }, animate: { x: 0, opacity: 1 }, transition: { duration: 10, type: 'spring' }, className: "imageContainer", children: _jsx(Carousel, { "data-bs-theme": "warning", variant: "warning", interval: 200, fade: true, pause: 'hover', controls: false, className: 'imageCoCarousel orangeText', children: data.map(data => (_jsxs(Carousel.Item, { children: [_jsx("img", { className: "d-block w-100", src: data.image, alt: "First slide" }), _jsxs(Carousel.Caption, { children: [_jsx("h5", { style: { color: 'white', backgroundColor: '#e4770a' }, children: data.area }), _jsx("p", { style: { color: 'white', backgroundColor: '#e4770a' }, children: data.address }), _jsxs(Button, { style: { color: 'white', background: '#e4770a', border: 'none' }, children: ["Checkout ", _jsx(CiCoinInsert, {})] })] })] }, data.id))) }) }) }) })] }));
};
export default Top;
