import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HeroSection } from '@/components/HeroSection';
import { TrendCarousel } from '@/components/TrendCarousel';
import { LookbookSection } from '@/components/LookbookSection';
import { SizeGuide } from '@/components/SizeGuide';
import { CategoryFilters } from '@/components/CategoryFilters';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from product tags
  const categories = Array.from(
    new Set(
      filteredProducts
        .flatMap(p => p.tags || [])
        .filter(tag => ['new-drops', 'outerwear', 'workwear', 'dresses', 'bottoms', 'knitwear', 'essentials'].includes(tag))
    )
  ).map(tag => tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

  const categoryFilteredProducts = selectedCategory === null 
    ? filteredProducts 
    : filteredProducts.filter(p => 
        p.tags?.some(tag => 
          tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') === selectedCategory
        )
      );

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Trend Carousel / Collections */}
      {!loadingCollections && collections.length > 0 && (
        <TrendCarousel 
          collections={collections}
          onViewProducts={handleViewCollectionProducts}
        />
      )}

      {/* Lookbook Section */}
      <LookbookSection />

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'
                  : 'All Products'
                }
              </h2>
              <p className="text-muted-foreground font-light">
                {categoryFilteredProducts.length} {categoryFilteredProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SizeGuide />
              {selectedCollectionId && (
                <button 
                  onClick={handleShowAllProducts}
                  className="text-sm underline hover:no-underline font-normal"
                >
                  View All Products
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <CategoryFilters 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted h-96 animate-pulse"></div>
              ))}
            </div>
          ) : categoryFilteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {categoryFilteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-light text-lg">
                No products available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};