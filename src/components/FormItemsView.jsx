import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {

    const [ formItemState, setFormItemState ] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemState;

    useEffect(()=>{
    }, [price]);

    useEffect(()=>{
    }, [formItemState]);

    const onImputChange = ({ target: { name, value } }) => {
        setFormItemState({
            ...formItemState,
            [ name ]: value
        });
    };

    const onInvoiceItemsSubmit = (event) => {
        
        event.preventDefault();

        if(product.trim().length <= 1) return;
        if(price.trim().length <= 1) return;
        if(isNaN(price.trim())) {
            alert('El precio no es un numero');
            return;
        }

        if(quantity.trim().length < 1){
            alert('La cantidad tiene que ser mayor a 0');
            return;
        }

        if(isNaN(quantity.trim())){
            alert('La cantidad no es un numero');
            return;
        }

        handler(formItemState);

        setFormItemState({
            product: '',
            price: '',
            quantity: ''
        });
}

    return (
        <>
            <form className="w-50" onSubmit={ onInvoiceItemsSubmit }>

                <input  type="text" 
                        name="product" 
                        value={ product }
                        placeholder="Producto" 
                        className="form-control m-3" 
                        onChange={ onImputChange }/>

                <input  type="text" 
                        name="price" 
                        value={ price }
                        placeholder="Precio" 
                        className="form-control m-3" 
                        onChange={ onImputChange }/>

                <input  type="text" 
                        name="quantity" 
                        value={ quantity }
                        placeholder="Cantidad" 
                        className="form-control m-3" 
                        onChange={ event => onImputChange(event) }/>

                <button type="submit" 
                        className="btn btn-primary m-3">
                            Agregar Item
                </button>

            </form>
        </>
    )

}