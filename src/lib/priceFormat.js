export default function PriceFormat(price) {
    if(price == null || price == undefined){
        return "N/A"
    }

    const priceNumber = Number(price);

    if (isNaN(priceNumber)) {
        return "N/A";
    }else{
        return "LKR " + priceNumber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}