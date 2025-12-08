import { type Collection } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

interface TrendCarouselProps {
  collections: Collection[]
  onViewProducts: (collectionId: string) => void
}

export const TrendCarousel = ({ collections, onViewProducts }: TrendCarouselProps) => {
  if (collections.length === 0) return null

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Shop By Category
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Curated edits for every occasion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group cursor-pointer"
              onClick={() => onViewProducts(collection.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                {collection.image ? (
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">No image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-normal tracking-tight group-hover:opacity-70 transition-opacity">
                  {collection.name}
                </h3>
                {collection.description && (
                  <p className="text-sm text-muted-foreground font-light line-clamp-2">
                    {collection.description}
                  </p>
                )}
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-normal text-foreground hover:no-underline group"
                >
                  View Collection
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}