import { NextResponse } from "next/server";

export const GET = async () => {
    const result = await fetch(process.env.API_URL, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const products = await result.json();
    return NextResponse.json({data:products});
};

export const POST = async (req) => {
    const product = await req.json();
    console.log(product);
    const result = await fetch( process.env.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
    const newProdcut = await result.json();
    return NextResponse.json({data: newProdcut});
}