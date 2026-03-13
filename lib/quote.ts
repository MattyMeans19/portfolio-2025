import { Addons } from "./definitions";

export const addons: Addons[] = [
    {
        title: "Non-Stripe Payment",
        info: "If you already have an online or in-store payment method that uses a 3rd party service, you'll need this to integrate it.",
        timeToBuild: 3,
        startupPrice: 29999,
        monthlyPrice: 0
    },
    {
        title: "Custom 404 (Not Found) Page",
        info: "A custom 'Not Found' page to boost branding and proffessionalism.",
        timeToBuild: 1,
        startupPrice: 8000,
        monthlyPrice: 0
    },
    {
        title: "Online Delivery",
        info: "Logic to add delivery to online ordering. Calculates and validates distance and fees.",
        timeToBuild: 3,
        startupPrice: 40000,
        monthlyPrice: 10000
    },
    {
        title: "User Rewards",
        info: "Store user data and offer rewards for returning customers.",
        timeToBuild: 7,
        startupPrice: 50000,
        monthlyPrice: 15000
    },
    {
        title: "Analytics",
        info: "Admin Portal add-on that tracks best-sellers, most viewed inventory, and monthly sales data.",
        timeToBuild: 7,
        startupPrice: 50000,
        monthlyPrice: 15000
    },
    {
        title: "React Native App",
        info: "A custom app that can be used on mobile, tablet, or PC. Receive push notifications for new orders, and edit inventory and users from any device without the need for a web browser.",
        timeToBuild: 7,
        startupPrice: 150000,
        monthlyPrice: 15000
    },
    {
        title: "Built-in POS",
        info: "A Point of sales system built into the Admin Portal and React Native App for full business-operating system.",
        timeToBuild: 10,
        startupPrice: 200000,
        monthlyPrice: 30000
    }
]

export const EngineDetails= [
    {
    name: "Business Standard",
    startupPrice: 49999,
    monthlyPrice: 9999,
    included: "1 Admin User, Admin Portal with user management, inventory management, and customizable landing page message."
    },
    {
    name: "Restaurant Standard",
    startupPrice: 49999,
    monthlyPrice: 9999,
    included: "1 Admin User, Admin Portal with user management, inventory management, and customizable landing page message."
    },
    {
    name: "Business Premium",
    startupPrice: 99999,
    monthlyPrice: 29999,
    included: `1 Admin User and 4 empty user slots, Admin Portal with user management, inventory management, customizable landing page message, and online order management.
                Real-time inventory with online order proccessing using Stripe.`
    },
    {
    name: "Restaurant Premium",
    startupPrice: 99999,
    monthlyPrice: 29999,
    included: `1 Admin User and 4 empty user slots, Admin Portal with user management, inventory management, customizable landing page message, and online order management.
                Real-time inventory with online order proccessing using Stripe.`
    },
]