export default function Header({
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart
}) {
    // Límites de inventario (deben coincidir con tu useCart.js)
    const MIN_ITEMS = 1;
    const MAX_ITEMS = 5;

    // Estado derivado: funciones que calculan valores a partir del prop 'cart'
    const isEmpty = () => cart.length === 0;
    const cartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0);

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    {/* Sección del Logo */}
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>

                    {/* Sección del Carrito */}
                    <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid"
                                src="/img/carrito.png"
                                alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty() ? (
                                    <p className="text-center m-0">El carrito está vacío</p>
                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(product => (
                                                    <tr key={product.id}>
                                                        <td>
                                                            <img
                                                                className="img-fluid"
                                                                src={`/img/${product.image}.jpg`}
                                                                alt={product.name}
                                                            />
                                                        </td>
                                                        <td>{product.name}</td>
                                                        <td className="fw-bold">${product.price}</td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(product.id)}
                                                                disabled={product.quantity <= MIN_ITEMS}
                                                            >
                                                                -
                                                            </button>

                                                            {product.quantity}

                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(product.id)}
                                                                disabled={product.quantity >= MAX_ITEMS}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(product.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal()}</span></p>

                                        <button
                                            className="btn btn-dark w-100 mt-3 p-2"
                                            onClick={clearCart}
                                        >
                                            Vaciar Carrito
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}