"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroRecommendedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [isHovering, setIsHovering] = useState(null);

  const categories = [
    { id: 'trending', label: 'Trending' },
    { id: 'best-sellers', label: 'Best Sellers' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'deals', label: 'Deals' }
  ];

  const products = {
    'trending': [
      {
        id: 't1',
        name: 'Ultra HD Smart TV - 55"',
        image: '/api/placeholder/300/300',
        rating: 4.8,
        reviews: 256,
        price: 799.99,
        oldPrice: 999.99,
        discount: 20,
        stock: 'In Stock',
        badge: 'Top Rated'
      },
      {
        id: 't2',
        name: 'Wireless Noise Cancelling Headphones',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 189,
        price: 249.99,
        oldPrice: 299.99,
        discount: 17,
        stock: 'Low Stock',
        badge: 'Trending'
      },
      {
        id: 't3',
        name: 'Smart Home Security Camera',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 142,
        price: 129.99,
        oldPrice: 149.99,
        discount: 13,
        stock: 'In Stock',
        badge: null
      },
      {
        id: 't4',
        name: 'Robot Vacuum Cleaner with Mapping',
        image: '/api/placeholder/300/300',
        rating: 4.5,
        reviews: 97,
        price: 399.99,
        oldPrice: 499.99,
        discount: 20,
        stock: 'In Stock',
        badge: 'Bestseller'
      },
      {
        id: 't5',
        name: 'Smart Refrigerator with Touch Display',
        image: '/api/placeholder/300/300',
        rating: 4.9,
        reviews: 78,
        price: 1999.99,
        oldPrice: 2299.99,
        discount: 13,
        stock: 'In Stock',
        badge: 'Premium'
      },
      {
        id: 't6',
        name: 'High-Performance Gaming Laptop',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 124,
        price: 1299.99,
        oldPrice: 1499.99,
        discount: 13,
        stock: 'In Stock',
        badge: 'Gamer Choice'
      }
    ],
    'best-sellers': [
      {
        id: 'b1',
        name: 'Smartphone 12 Pro - 256GB',
        image: '/api/placeholder/300/300',
        rating: 4.9,
        reviews: 423,
        price: 999.99,
        oldPrice: null,
        discount: null,
        stock: 'In Stock',
        badge: 'Bestseller'
      },
      {
        id: 'b2',
        name: 'Wireless Earbuds with Charging Case',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 356,
        price: 149.99,
        oldPrice: 179.99,
        discount: 17,
        stock: 'In Stock',
        badge: null
      },
      {
        id: 'b3',
        name: 'Smart Watch Series 7',
        image: '/api/placeholder/300/300',
        rating: 4.8,
        reviews: 298,
        price: 349.99,
        oldPrice: 399.99,
        discount: 13,
        stock: 'In Stock',
        badge: 'Popular'
      },
      {
        id: 'b4',
        name: 'Portable Bluetooth Speaker',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 215,
        price: 89.99,
        oldPrice: 119.99,
        discount: 25,
        stock: 'In Stock',
        badge: 'Top Choice'
      },
      {
        id: 'b5',
        name: 'Air Fryer 5.5L Capacity',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 184,
        price: 119.99,
        oldPrice: 149.99,
        discount: 20,
        stock: 'Low Stock',
        badge: null
      },
      {
        id: 'b6',
        name: '4K Streaming Media Player',
        image: '/api/placeholder/300/300',
        rating: 4.5,
        reviews: 167,
        price: 69.99,
        oldPrice: 89.99,
        discount: 22,
        stock: 'In Stock',
        badge: null
      }
    ],
    'new-arrivals': [
      {
        id: 'n1',
        name: 'Next Gen Gaming Console',
        image: '/api/placeholder/300/300',
        rating: 4.9,
        reviews: 87,
        price: 499.99,
        oldPrice: null,
        discount: null,
        stock: 'Limited Stock',
        badge: 'New Release'
      },
      {
        id: 'n2',
        name: 'Ultra-Thin OLED TV - 65"',
        image: '/api/placeholder/300/300',
        rating: 4.8,
        reviews: 42,
        price: 1899.99,
        oldPrice: null,
        discount: null,
        stock: 'Pre-Order',
        badge: 'Premium'
      },
      {
        id: 'n3',
        name: 'Smart Home Hub with Voice Assistant',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 56,
        price: 149.99,
        oldPrice: null,
        discount: null,
        stock: 'Just Arrived',
        badge: 'New'
      },
      {
        id: 'n4',
        name: 'Foldable Smartphone - 512GB',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 29,
        price: 1599.99,
        oldPrice: null,
        discount: null,
        stock: 'In Stock',
        badge: 'Innovation'
      },
      {
        id: 'n5',
        name: 'Wireless Charging Pad - 15W',
        image: '/api/placeholder/300/300',
        rating: 4.5,
        reviews: 34,
        price: 49.99,
        oldPrice: null,
        discount: null,
        stock: 'In Stock',
        badge: 'New'
      },
      {
        id: 'n6',
        name: 'Smart Glasses with AR',
        image: '/api/placeholder/300/300',
        rating: 4.3,
        reviews: 18,
        price: 299.99,
        oldPrice: null,
        discount: null,
        stock: 'Limited Release',
        badge: 'Innovative'
      }
    ],
    'deals': [
      {
        id: 'd1',
        name: 'Bluetooth Soundbar with Subwoofer',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 143,
        price: 179.99,
        oldPrice: 299.99,
        discount: 40,
        stock: 'In Stock',
        badge: 'Hot Deal'
      },
      {
        id: 'd2',
        name: 'Coffee Maker with Grinder',
        image: '/api/placeholder/300/300',
        rating: 4.5,
        reviews: 98,
        price: 89.99,
        oldPrice: 149.99,
        discount: 40,
        stock: 'Selling Fast',
        badge: 'Clearance'
      },
      {
        id: 'd3',
        name: 'Electric Toothbrush with UV Sanitizer',
        image: '/api/placeholder/300/300',
        rating: 4.7,
        reviews: 76,
        price: 59.99,
        oldPrice: 99.99,
        discount: 40,
        stock: 'In Stock',
        badge: 'Deal of the Day'
      },
      {
        id: 'd4',
        name: 'Smart Doorbell with Camera',
        image: '/api/placeholder/300/300',
        rating: 4.4,
        reviews: 112,
        price: 99.99,
        oldPrice: 149.99,
        discount: 33,
        stock: 'In Stock',
        badge: 'Sale'
      },
      {
        id: 'd5',
        name: 'Wireless Gaming Mouse',
        image: '/api/placeholder/300/300',
        rating: 4.8,
        reviews: 87,
        price: 49.99,
        oldPrice: 79.99,
        discount: 38,
        stock: 'Low Stock',
        badge: 'Flash Sale'
      },
      {
        id: 'd6',
        name: 'Air Purifier with HEPA Filter',
        image: '/api/placeholder/300/300',
        rating: 4.6,
        reviews: 65,
        price: 149.99,
        oldPrice: 229.99,
        discount: 35,
        stock: 'In Stock',
        badge: 'Weekend Special'
      }
    ]
  };

  const isScreenLarge = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  };

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (isScreenLarge()) {
        setVisibleProducts(4);
      } else {
        setVisibleProducts(2);
      }
    };

    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    
    return () => {
      window.removeEventListener('resize', updateVisibleProducts);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const handleShowMore = () => {
    setVisibleProducts(prev => Math.min(prev + 2, products[activeCategory].length));
  };

  const handleShowLess = () => {
    setVisibleProducts(isScreenLarge() ? 4 : 2);
  };

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            {i < fullStars ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : hasHalfStar && i === fullStars ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Recommended For You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover products tailored to your interests and the latest must-have electronics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setVisibleProducts(isScreenLarge() ? 4 : 2);
              }}
              className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#14404B] text-white shadow-md'
                  : 'bg-white  text-black hover:text-white  hover:bg-[#14404B] '
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {products[activeCategory].slice(0, visibleProducts).map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setIsHovering(product.id)}
              onMouseLeave={() => setIsHovering(null)}
              className="bg-white  rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="relative">
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#14404B] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
                
                {/* Quick Actions - Visible on hover */}
                <div 
                  className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    isHovering === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {renderRatingStars(product.rating)}
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({product.reviews})</span>
                  </div>
                  <span className={`text-sm font-medium ${
                    product.stock === 'In Stock' 
                      ? 'text-green-600 dark:text-green-400' 
                      : product.stock === 'Low Stock' || product.stock === 'Limited Stock' || product.stock === 'Selling Fast' 
                        ? 'text-orange-600 dark:text-orange-400' 
                        : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {product.stock}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900  mb-2 truncate">
                  {product.name}
                </h3>
                
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Load More / Show Less Button */}
        <div className="text-center mt-8">
          {visibleProducts < products[activeCategory].length ? (
            <button 
              onClick={handleShowMore}
              className="px-6 py-3 bg-[#14404B] hover:bg-[#14404be5] cursor-pointer text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Show More Products
            </button>
          ) : (
            visibleProducts > (isScreenLarge() ? 4 : 2) && (
              <button 
                onClick={handleShowLess}
                className="px-6 py-3 bg-[#14404B] hover:bg-[#14404be5]  border border-gray-200  cursor-pointer text-white font-medium rounded-lg   transition-all duration-300"
              >
                Show Less
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroRecommendedProducts;