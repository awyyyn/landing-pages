import bank from '../assets/icon-online.svg'
import budgeting from '../assets/icon-budgeting.svg'
import onboarding from '../assets/icon-onboarding.svg'
import api from '../assets/icon-api.svg';
import currency from '../assets/image-currency.jpg';
import restaurant from '../assets/image-restaurant.jpg';
import plane from '../assets/image-plane.jpg'; 
import confetti from '../assets/image-confetti.jpg';

export const aboutLists = [
    {
        svg: bank,
        title: 'Online Banking',
        paragraph: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world'
    },
    {
        svg: budgeting,
        title: 'Simple Budgeting',
        paragraph: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.'
    },
    {
        svg: onboarding,
        title: 'Fast Onboarding',
        paragraph: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        svg: api,
        title: 'Open API',
        paragraph: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
]


export const articles = [
    {
        title: "Recieve money in any currency with no fees",
        author: "Claire Robinson",
        paragraph: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single",
        image: currency,
        alt: 'Currency'
    },
    {
        title: "Treat yourself without worrying about money",
        author: "Wilson Hutton",
        paragraph: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
        image: restaurant,
        alt: 'Restaurant'
    },
    {
        title: "Take your Easybank card wherever you go",
        author: "Wilson Hutton",
        paragraph: "We want you to enjoy your travel. This is why we don't charge any fees on purchases while you're abroad. We'll even show you",
        image: plane,
        alt: 'Plane'
    },
    {
        title: "Our invite-only Beta accounts are now live!",
        author: "Claire Robinson",
        paragraph: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site",
        image: confetti,
        alt: 'Confetti'
    },
]