export function Pagination({ currentPage, totalPages, onPageChange }) {
    // Generar array de números de página
    const getPageNumbers = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        return pages
    }

    return (
        <nav className="pagination-nav">
            {/* Botón Anterior */}
            <button 
                className="btn btn-dark"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                ← Anterior
            </button>

            {/* Números de página */}
            <div className="pagination-numbers">
                {getPageNumbers().map(page => (
                    <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Botón Siguiente */}
            <button 
                className="btn btn-dark"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Siguiente →
            </button>
        </nav>
    )
}
