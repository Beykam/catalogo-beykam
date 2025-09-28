'use client'

import { useState } from 'react'
import { Heart, ShoppingBag, Instagram, MessageCircle, X, ChevronLeft, ChevronRight, Phone } from 'lucide-react'

interface Product {
  id: string
  name: string
  fabric: string
  sizes: string
  price?: string
  category: 'conjuntos' | 'vestidos'
  images: string[]
}

const products: Product[] = [
  {
    id: 'fernanda-lurex',
    name: 'Conjunto Fernanda Lurex',
    fabric: 'Linho com algodão',
    sizes: 'Tam. M e G',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop']
  },
  {
    id: 'gaby',
    name: 'Conjunto Gaby',
    fabric: 'Linho com algodão fio lurex',
    sizes: 'Tam. M e G',
    price: 'R$90',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop']
  },
  {
    id: 'camila',
    name: 'Conjunto Vestido Camila',
    fabric: 'Linho forrado',
    sizes: 'Tam. M e G',
    price: 'R$80',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop']
  },
  {
    id: 'fabiola',
    name: 'Conjunto Fabiola',
    fabric: 'Regata com elastano, viscose + poliamida',
    sizes: 'Tam. M e G',
    price: 'R$85',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop']
  },
  {
    id: 'brenda',
    name: 'Conjunto Brenda',
    fabric: 'Viscolinho',
    sizes: 'Tam. M e G',
    price: 'R$75',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1583496661160-fb5886a13d24?w=400&h=600&fit=crop']
  },
  {
    id: 'larissa',
    name: 'Conjunto Larissa',
    fabric: 'Viscolinho',
    sizes: 'Tam. M, G e GG',
    price: 'R$75',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop']
  },
  {
    id: 'tres-marias',
    name: 'Conjunto 3 Marias',
    fabric: 'Viscolinho',
    sizes: 'Tamanho Único',
    price: 'R$70',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop']
  },
  {
    id: 'short',
    name: 'Conjunto Short',
    fabric: 'Tecido marrant',
    sizes: 'Tam. M, G e GG',
    price: 'R$70',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop']
  },
  {
    id: 'envelope',
    name: 'Conjunto Envelope',
    fabric: 'Viscolinho',
    sizes: 'Tamanho Único',
    price: 'R$75',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop']
  },
  {
    id: 'fernanda',
    name: 'Conjunto Fernanda',
    fabric: 'Linho',
    sizes: 'Tam. M, G e GG',
    price: 'R$80',
    category: 'conjuntos',
    images: ['https://images.unsplash.com/photo-1583496661160-fb5886a13d24?w=400&h=600&fit=crop']
  },
  {
    id: 'nicole',
    name: 'Vestido Nicole',
    fabric: 'Linho forrado',
    sizes: 'Tam. M e G',
    price: 'R$80',
    category: 'vestidos',
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop']
  }
]

interface ImageGalleryProps {
  images: string[]
  productName: string
  isOpen: boolean
  onClose: () => void
}

function ImageGallery({ images, productName, isOpen, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!isOpen) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-pink-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`${productName} - Imagem ${currentIndex + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
        
        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-pink-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false)

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de saber sobre o modelo ${product.name}. Você pode me mostrar as cores disponíveis?`
    const whatsappUrl = `https://wa.me/5511953735719?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="relative group">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover cursor-pointer"
            onClick={() => setGalleryOpen(true)}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={() => setGalleryOpen(true)}
              className="opacity-0 group-hover:opacity-100 bg-pink-500 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              Ver Fotos
            </button>
          </div>
          {product.images.length > 1 && (
            <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
              +{product.images.length - 1}
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.fabric}</p>
          <p className="text-gray-600 mb-3">{product.sizes}</p>
          {product.price && (
            <p className="text-2xl font-bold text-pink-600 mb-4">{product.price}</p>
          )}
          
          <button
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Quero este modelo</span>
          </button>
        </div>
      </div>
      
      <ImageGallery
        images={product.images}
        productName={product.name}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </>
  )
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'conjuntos' | 'vestidos'>('all')

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de saber mais sobre os produtos da Beykam Modas."
    const whatsappUrl = `https://wa.me/5511953735719?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInstagram = () => {
    window.open('https://instagram.com/beykammodas', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                Beykam Modas
              </h1>
              <p className="text-gray-600 text-sm md:text-base italic">Estilo que valoriza você</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </button>
              <button
                onClick={handleInstagram}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Coleção Atual
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Descubra peças únicas que destacam sua personalidade
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <p className="text-lg text-gray-700 mb-6">
                Moda feminina modinha com qualidade e estilo para todas as ocasiões
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-pink-100 px-4 py-2 rounded-full">
                  <span className="text-pink-800 font-semibold">Tecidos Premium</span>
                </div>
                <div className="bg-pink-100 px-4 py-2 rounded-full">
                  <span className="text-pink-800 font-semibold">Tamanhos Variados</span>
                </div>
                <div className="bg-pink-100 px-4 py-2 rounded-full">
                  <span className="text-pink-800 font-semibold">Cores Exclusivas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
              }`}
            >
              Todos os Produtos
            </button>
            <button
              onClick={() => setActiveCategory('conjuntos')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'conjuntos'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
              }`}
            >
              Conjuntos
            </button>
            <button
              onClick={() => setActiveCategory('vestidos')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'vestidos'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
              }`}
            >
              Vestidos
            </button>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nosso Catálogo
            </h2>
            <p className="text-lg text-gray-600">
              Clique nas fotos para ver mais detalhes e cores disponíveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Tire suas dúvidas e faça seu pedido pelo WhatsApp
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp: (11) 95373-5719</span>
            </button>
            
            <button
              onClick={handleInstagram}
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Instagram className="w-6 h-6" />
              <span>@beykammodas</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Beykam Modas
          </h3>
          <p className="text-gray-400 mb-4">Estilo que valoriza você</p>
          <p className="text-gray-500 text-sm">
            © 2024 Beykam Modas. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppContact}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}