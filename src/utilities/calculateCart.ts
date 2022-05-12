const deleteDollarSymbol = (price: string): string => {
    const normalizePrice = price.trim();
    const nonDollarSymbol = normalizePrice.slice(1);
    return nonDollarSymbol;
  };

const sumOfItem = (price: string, quantity: number): number => {
    const priceNumber = Number.parseFloat(price);
    if (isNaN(priceNumber)) return 0;
    return priceNumber * quantity;
  };


  export {deleteDollarSymbol,sumOfItem}