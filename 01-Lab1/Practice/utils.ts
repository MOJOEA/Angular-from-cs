import products from "./database";

export default function getProduct(id: number){
    let Product = products.find(product => product.id === id);
    let result_tax = calTax(Product?.category || "", Product?.price || 0);
    let result = {...Product, ...result_tax}
    return result;
}

function calTax(category: string, price: number) {
    let tax: number;
    let taxRate: string;
    let priceBeforeTax: number;
    
    let rateNumber: number; 

    if (category === "Electronics") {
        rateNumber = 0.37;
        taxRate = "37%";
    } else if (category === "Clothing") {
        rateNumber = 0.15;
        taxRate = "15%";
    } else if (category === "Books") {
        rateNumber = 0.70;
        taxRate = "70%";
    } else if (category === "Food") {
        rateNumber = 0;
        taxRate = "0%";
    } else if (category === "Jewelry") {
        rateNumber = 1;
        taxRate = "100%";
    } else {
        rateNumber = 1;
        taxRate = "100%";
    }

    priceBeforeTax = price / (1 + rateNumber);
    tax = price - priceBeforeTax;
    priceBeforeTax = Number(priceBeforeTax.toFixed(2));
    tax = Number(tax.toFixed(2));

    return { taxRate, priceBeforeTax, tax };
}

