
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Product({ product, addToCart }) {
    const { id, name, image, price, description } = product
    const [isAdded, setIsAdded] = useState(false)
    
    // Truncar descripción a 80 caracteres
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
    }

    const handleAddToCart = () => {
        addToCart(product)
        setIsAdded(true)
        // Reset el feedback después de 1.5 segundos
        setTimeout(() => setIsAdded(false), 1500)
    }

    return (
        <div className="col-md-6 col-lg-4 my-4">
            <div className="product-card">
                {/* Imagen más grande - Clickeable */}
                <Link to={`/producto/${id}`} className="product-image-link">
                    <div className="product-image">
                        <img 
                            className="img-fluid" 
                            src={`/img/${image}.jpg`} 
                            alt={`${name} - Guitarra`} 
                        />
                    </div>
                </Link>
                
                {/* Contenido */}
                <div className="product-content">
                    <Link to={`/producto/${id}`} className="product-title-link">
                        <h3 className="text-black fs-5 fw-bold text-uppercase">{name}</h3>
                    </Link>
                    <p className="product-description">{truncateText(description, 80)}</p>
                    <p className="fw-black text-primary fs-4 mb-3">₡{price.toLocaleString()}</p>
                    
                    {/* Botones */}
                    <div className="product-buttons">
                        <button
                            type="button"
                            className={`btn btn-block ${isAdded ? 'btn-success' : 'btn-dark'}`}
                            onClick={handleAddToCart}
                        >
                            {isAdded ? '✓ Agregado!' : 'Agregar al Carrito'}
                        </button>
                        <Link 
                            to={`/producto/${id}`}
                            className="btn btn-outline-primary w-100"
                        >
                            Ver Detalles →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}