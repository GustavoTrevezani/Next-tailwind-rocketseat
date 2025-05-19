'use client'

import { Bounce, ToastContainer, toast } from 'react-toastify';

interface ProductProps{
    params: {
        data: string;
    };
}

export default function Product({ params }: ProductProps) {
    const [productId, size, color] = params.data;

    function addToCart() {
        // Logic to add the product to the cart
        toast.success('Produto adicionado ao carrinho!',{
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Product: {productId}</h1>
            <p className="mt-4 text-lg">Size: {size}</p>
            <p className="mt-4 text-lg">Color: {color}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={addToCart}>Add to Cart</button>
            <ToastContainer/>
        </div>
    );
}
