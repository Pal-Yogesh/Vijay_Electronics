"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tvProducts = [
  {
    id: 1,
    category: "Smart TV",
    title: "Samsung Neo QLED 8K",
    price: "$3,999",
    rating: 4.9,
    image: "/tv/lg-smart-tv.png",
    accent: "#0C2730",
  },
  {
    id: 2,
    category: "OLED TV",
    title: "LG OLED C2 Series",
    price: "$2,499",
    rating: 4.8,
    image: "/tv/lg-tv.jpg",
    accent: "#0C2730",
  },
  {
    id: 3,
    category: "4K UHD",
    title: "Sony Bravia XR A95K",
    price: "$3,299",
    rating: 4.7,
    image: "/tv/lgtv.avif",
    accent: "#0C2730",
  },
  {
    id: 4,
    category: "4K UHD",
    title: "Sony Bravia XR A95K",
    price: "$3,299",
    rating: 4.7,
    image: "/tv/samsung-4k-ultra-hd-tv.png",
    accent: "#0C2730",
  },
  {
    id: 5,
    category: "4K UHD",
    title: "Sony Bravia XR A95K",
    price: "$3,299",
    rating: 4.7,
    image: "/tv/samsung-smart-tv-wallpaper-preview.jpg",
    accent: "#0C2730",
  },
  {
    id: 6,
    category: "4K UHD",
    title: "Sony Bravia XR A95K",
    price: "$3,299",
    rating: 4.7,
    image: "/tv/samsungtv.jpg",
    accent: "#0C2730",
  },
];

const fanProducts = [
  {
    id: 1,
    category: "Fans",
    title: "Ceiling Fan Deluxe",
    price: "$45",
    rating: 4.7,
    image: "/images/ceiling-fan-1.jpg",
    accent: "#1E3A5F",
  },
  {
    id: 2,
    category: "Fans",
    title: "High-Speed Pedestal Fan",
    price: "$60",
    rating: 4.8,
    image: "/images/pedestal-fan.jpg",
    accent: "#234E70",
  },
  {
    id: 3,
    category: "Fans",
    title: "Wall-Mounted Oscillating Fan",
    price: "$50",
    rating: 4.6,
    image: "/images/wall-fan.jpg",
    accent: "#2A6270",
  },
];

const mixerProducts = [
  {
    id: 1,
    category: "Wearables",
    title: "Galaxy Watch Ultra",
    price: "$499",
    rating: 4.5,
    image: "/images/galaxy-watch-ultra.jpg",
    accent: "#0C2730",
  },
  {
    id: 2,
    category: "Wearables",
    title: "Smart Fitness Band Pro",
    price: "$199",
    rating: 4.3,
    image: "/images/fitness-band.jpg",
    accent: "#1A3E5D",
  },
  {
    id: 3,
    category: "Wearables",
    title: "Noise Cancelling Smart Buds",
    price: "$299",
    rating: 4.7,
    image: "/images/smart-buds.jpg",
    accent: "#243B55",
  },
];

const acProducts = [
  {
    id: 1,
    category: "Smart Home",
    title: "Bespoke Refrigerator",
    price: "$2,999",
    rating: 4.6,
    image: "/images/bespoke-refrigerator.jpg",
    accent: "#0C2730",
  },
  {
    id: 2,
    category: "Smart Home",
    title: "Smart Washing Machine",
    price: "$1,799",
    rating: 4.4,
    image: "/images/smart-washing-machine.jpg",
    accent: "#1A3E5D",
  },
  {
    id: 3,
    category: "Smart Home",
    title: "AI-Powered Air Conditioner",
    price: "$2,199",
    rating: 4.7,
    image: "/images/ai-ac.jpg",
    accent: "#243B55",
  },
];

const refrigeratorProducts = [
  {
    id: 1,
    category: "Refrigerator",
    title: "Bespoke French Door",
    price: "$3,299",
    rating: 4.8,
    image: "/refrigerator/ref1.png",
    accent: "#0C2730",
  },
  {
    id: 2,
    category: "Refrigerator",
    title: "Side-by-Side Refrigerator",
    price: "$2,499",
    rating: 4.6,
    image: "/refrigerator/ref2.png",
    accent: "#1A3E5D",
  },
  {
    id: 3,
    category: "Refrigerator",
    title: "Smart Convertible Refrigerator",
    price: "$1,999",
    rating: 4.7,
    image: "/refrigerator/refrigerator.avif",
    accent: "#243B55",
  },
  {
    id: 4,
    category: "Refrigerator",
    title: "Smart Convertible Refrigerator",
    price: "$1,999",
    rating: 4.7,
    image: "/refrigerator/refrigerator-isolated.avif",
    accent: "#243B55",
  },
];
const washingmachineProducts = [
  {
    id: 1,
    category: "Washing Machine",
    title: "Front Load Washer",
    price: "$1,299",
    rating: 4.8,
    image: "/images/front-load-washer.jpg",
    accent: "#0C2730",
  },
  {
    id: 2,
    category: "Washing Machine",
    title: "Top Load Washer",
    price: "$899",
    rating: 4.5,
    image: "/images/top-load-washer.jpg",
    accent: "#1A3E5D",
  },
  {
    id: 3,
    category: "Washing Machine",
    title: "Washer-Dryer Combo",
    price: "$1,799",
    rating: 4.7,
    image: "/images/washer-dryer-combo.jpg",
    accent: "#243B55",
  },
];


const HeroProducts = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);
  const tabRefs = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });

  const tabs = [
    { label: "TV", icon: "tv" },
    { label: "Refrigerator", icon: "refrigerator" },
    { label: "Washing Machine", icon: "washing-machine" },
    { label: "AC", icon: "ac" },
    { label: "Mixer Grinder", icon: "mixer-grinder" },
    { label: "Ceiling Fan", icon: "ceiling-fan" },
  ];

  // Update indicator dimensions when active tab changes
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const { offsetWidth, offsetLeft } = tabRefs.current[activeTab];
      setDimensions({ width: offsetWidth, left: offsetLeft });
    }
  }, [activeTab]);

  const tabContent = [
    // tv Content
    <div
      key="tv"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {tvProducts.map((product) => (
        <EnhancedProductCard
          key={product.id}
          category={product.category}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
          accent={product.accent}
        />
      ))}
    </div>,

    // refrigerator Content
    <div
      key="refrigerator"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {refrigeratorProducts.map((product) => (
        <EnhancedProductCard
          key={product.id}
          category={product.category}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
          accent={product.accent}
        />
      ))}
    </div>,

    // WS Content
    <div
      key="ws"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {washingmachineProducts.map((product) => (
        <EnhancedProductCard
          key={product.id}
          category={product.category}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
          accent={product.accent}
        />
      ))}
    </div>,

    // ac Content
    <div
      key="ac"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {acProducts.map((product) => (
        <EnhancedProductCard
          key={product.id}
          category={product.category}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
          accent={product.accent}
        />
      ))}
    </div>,

    // mixer Content
    <div
      key="mixer"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {mixerProducts.map((mixer) => (
        <EnhancedProductCard
          key={mixer.id}
          category={mixer.category}
          title={mixer.title}
          price={mixer.price}
          rating={mixer.rating}
          image={mixer.image}
          accent={mixer.accent}
        />
      ))}
    </div>,

    // fan Content
    <div
      key="fan"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {fanProducts.map((fan) => (
        <EnhancedProductCard
          key={fan.id}
          category={fan.category}
          title={fan.title}
          price={fan.price}
          rating={fan.rating}
          image={fan.image}
          accent={fan.accent}
        />
      ))}
    </div>,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 ">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Products Highlights
      </motion.h1>

      <motion.p
        className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Discover our latest products and innovations designed to enhance your
        everyday life.
      </motion.p>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-16">
        <div className="relative flex space-x-1 md:space-x-3 bg-gray-100 p-1 rounded-full">
          {/* Animated Background for Active Tab */}
          <motion.div
            className="absolute h-full top-0 rounded-full bg-[#0C2730] shadow-lg"
            animate={{
              width: dimensions.width,
              left: dimensions.left,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />

          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(index)}
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className={`relative z-10 py-2 cursor-pointer px-4 md:px-6 rounded-full text-sm md:text-base font-medium transition-all duration-300 
                ${activeTab === index ? "text-white" : "text-gray-600"}
                ${
                  hoveredTab === index
                    ? "bg-[#0C2730] text-white"
                    : "bg-transparent"
                }
                `}
            >
              <div className="flex items-center justify-center space-x-2">
                <TabIcon name={tab.icon} active={activeTab === index} />
                <span>{tab.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-[400px] px-2"
        >
          {tabContent[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Enhanced Product Card Component
const EnhancedProductCard = ({
  category,
  title,
  price,
  rating,
  image,
  accent,
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: Math.random() * 0.3,
      }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="relative overflow-hidden group">
        <div className="h-64 bg-gray-200 relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Hover overlay */}
        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <motion.button
              className="w-full py-3 bg-white text-[#0C2730] font-medium rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quick View
            </motion.button>
          </div>
        </motion.div>

        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-[#0C2730] text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center text-sm">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{rating}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-semibold">{price}</p>
          <motion.button
            className="bg-[#0C2730] text-white p-2 rounded-full"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <PlusIcon />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Tab Icons Component
const TabIcon = ({ name, active }) => {
  const icons = {
    tv: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>
    ),
    refrigerator: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="5" y1="10" x2="19" y2="10" />
        <line x1="9" y1="13" x2="9" y2="13" />
      </svg>
    ),
    "washing-machine": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="12" r="5" />
        <path d="M12 7v10M15 9.5l-6 6M9 9.5l6 6" />
      </svg>
    ),
    ac: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="6" y1="10" x2="6" y2="10" />
        <line x1="18" y1="10" x2="18" y2="10" />
        <path d="M6 16l2 4m10-4l-2 4m-6-4l-1.5 4m8.5-4l1.5 4" />
      </svg>
    ),
    "mixer-grinder": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="3" width="12" height="8" rx="2" />
        <path d="M6 11h12v5a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-5z" />
        <line x1="10" y1="21" x2="14" y2="21" />
      </svg>
    ),
    "ceiling-fan": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M12 4V2m0 20v-2M4.93 6.93L3.52 5.52M20.48 5.52l-1.41 1.41M4 12H2m20 0h-2M6.93 19.07l-1.41 1.41M18.07 19.07l1.41 1.41" />
      </svg>
    ),
  };

  return icons[name] || null;
};

// Plus Icon Component
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default HeroProducts;
