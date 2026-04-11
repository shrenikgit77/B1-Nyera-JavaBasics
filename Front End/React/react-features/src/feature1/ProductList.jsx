import Product from "./Product";


let ProductList = () => {
    const stock = [
        { code: 904, title: "Bluetooth Keyboard", description: "Enhanced long range bluetooth keyboard specially for gamers with backlight support", cost: "INR 1899", available: 18 },
        { code: 905, title: "Wireless Mouse", description: "Ergonomic wireless mouse with adjustable DPI and silent click technology", cost: "INR 799", available: 25 },
        { code: 906, title: "Gaming Headset", description: "Surround sound gaming headset with noise-cancelling mic and RGB lighting", cost: "INR 2499", available: 12 },
        { code: 907, title: "Portable SSD 1TB", description: "High-speed portable solid state drive with USB-C connectivity", cost: "INR 5999", available: 10 },
        { code: 908, title: "Smartwatch", description: "Fitness-focused smartwatch with heart rate monitor, GPS, and water resistance", cost: "INR 3499", available: 20 },
        { code: 909, title: "Mechanical Keyboard", description: "Durable mechanical keyboard with customizable RGB keys and tactile switches", cost: "INR 4299", available: 15 },
        { code: 910, title: "Noise Cancelling Earbuds", description: "Compact true wireless earbuds with active noise cancellation and long battery life", cost: "INR 2999", available: 30 },
        { code: 911, title: "4K Monitor", description: "Ultra HD 27-inch monitor with HDR support and slim bezel design", cost: "INR 17999", available: 8 }
    ];

    return (
        <>
            <div className="flex justify-around flex-wrap">
                <Product stock={stock} />
            </div>
        </>
    )
}

export default ProductList;