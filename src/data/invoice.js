export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Jairon',
        lastName: 'Bravo',
        address: {
            country: 'Ecuador',
            city: 'Guayaquil',
            street: 'Pascuales',
            number: 'Mz. 7 Sl. 20'
        },
    },
    company: {
        name: 'Corpinter',
        fiscalNumber: 1234567
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 10,
            quantity: 2 
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 3
        },
        {
            id: 3,
            product: 'Monitor ASUS',
            price: 500,
            quantity: 1
        },
    ]
}