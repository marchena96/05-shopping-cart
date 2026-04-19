import { useParams, Link, useNavigate } from 'react-router-dom'
import { db } from '../data/db'

export default function ProductDetail({ addToCart, cart }) {
    const { id } = useParams()
    const navigate = useNavigate()
    
    // Encontrar el producto por ID
    const product = db.find(p => p.id === parseInt(id))

    if (!product) {
        return (
            <div className="container-xl mt-5">
                <div className="alert alert-warning" role="alert">
                    <h2>Producto no encontrado</h2>
                    <Link to="/" className="btn btn-dark mt-3">
                        Volver al catálogo
                    </Link>
                </div>
            </div>
        )
    }

    // Encontrar producto anterior y siguiente
    const currentIndex = db.findIndex(p => p.id === parseInt(id))
    const prevProduct = currentIndex > 0 ? db[currentIndex - 1] : null
    const nextProduct = currentIndex < db.length - 1 ? db[currentIndex + 1] : null

    // Verificar si el producto está en el carrito
    const itemInCart = cart.find(item => item.id === product.id)

    return (
        <main className="container-xl mt-5 mb-5">
            <Link to="/" className="btn btn-outline-dark mb-4">
                ← Volver al catálogo
            </Link>

            <div className="product-detail-container">
                <div className="row">
                    {/* Imagen del producto */}
                    <div className="col-md-6 mb-4">
                        <div className="product-detail-image-wrapper">
                            <div className="product-detail-image">
                                <img 
                                    className="img-fluid" 
                                    src={`/img/${product.image}.jpg`} 
                                    alt={`${product.name} - Guitarra`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Información del producto */}
                    <div className="col-md-6">
                        <div className="product-detail-info">
                            <div className="product-detail-header">
                                <h1 className="text-uppercase fw-bold">{product.name}</h1>
                                <span className="badge bg-primary fs-6 p-2">SKU: #{product.id}</span>
                            </div>

                            <div className="product-detail-description">
                                <p className="text-muted">{product.description}</p>
                            </div>

                            <div className="product-detail-pricing">
                                <p className="fw-black text-primary">₡{product.price.toLocaleString()}</p>
                            </div>

                            {itemInCart && (
                                <div className="alert alert-success mb-3" role="alert">
                                    ✓ Este producto está en tu carrito
                                </div>
                            )}

                            <button
                                type="button"
                                className="btn btn-dark btn-lg w-100 mb-3"
                                onClick={() => addToCart(product)}
                            >
                                {itemInCart ? '✓ Agregar más al carrito' : 'Agregar al Carrito'}
                            </button>

                            {/* Navegación entre productos */}
                            <div className="product-detail-navigation mt-5 pt-4">
                                <h5 className="mb-3">Explorar más productos</h5>
                                <div className="row gap-2">
                                    {prevProduct && (
                                        <div className="col-6">
                                            <Link 
                                                to={`/producto/${prevProduct.id}`}
                                                className="btn btn-outline-primary w-100"
                                            >
                                                ← {prevProduct.name}
                                            </Link>
                                        </div>
                                    )}
                                    {nextProduct && (
                                        <div className={prevProduct ? "col-6" : "col-12"}>
                                            <Link 
                                                to={`/producto/${nextProduct.id}`}
                                                className="btn btn-outline-primary w-100"
                                            >
                                                {nextProduct.name} →
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
