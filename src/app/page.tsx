import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Farmacia Online</h1>
          <nav className="space-x-4">
            <Link href="/products" className="hover:underline">Productos</Link>
            <Link href="/cart" className="hover:underline">Carrito</Link>
          </nav>
        </div>
      </header>
      
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tu farmacia de confianza</h2>
          <p className="text-xl text-gray-600 mb-8">
            Productos farmacéuticos con y sin receta médica
          </p>
          <Link 
            href="/products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Productos
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Productos sin receta</h3>
            <p className="text-gray-600">
              Amplio catálogo de medicamentos de venta libre, suplementos y productos de cuidado personal.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Productos con receta</h3>
            <p className="text-gray-600">
              Sube tu receta médica y nosotros nos encargamos de validarla y procesar tu pedido.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}