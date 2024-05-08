import { invoice } from "../data/invoice"

export const getInvoice = () => {

    //let total = 0;
    //invoice.items.forEach( i => {
    //    total = total + i.price * i.quantity;
    //});

    const total = calculateTotal( invoice.items );
    return { ...invoice, total };

}

export const calculateTotal = ( items = [] ) => {
    return  items
    .map( item => item.price * item.quantity )
    .reduce(( acumulador, currentValue ) => acumulador + currentValue, 0 );
    
}