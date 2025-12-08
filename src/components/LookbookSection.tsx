import { Button } from '@/components/ui/button'

export const LookbookSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Editorial Lookbook
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Styling inspiration from our latest campaign
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large featured look */}
          <div className="md:row-span-2 group relative overflow-hidden">
            <div className="aspect-[3/4] md:aspect-[2/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=1600&fit=crop"
                alt="Editorial Look 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm uppercase tracking-[0.2em] mb-2 opacity-90">Look 01</p>
                <h3 className="text-2xl font-light mb-4">Modern Minimalism</h3>
                <Button 
                  onClick={scrollToProducts}
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Shop The Look
                </Button>
              </div>
            </div>
          </div>
          
          {/* Two smaller looks */}
          <div className="group relative overflow-hidden">
            <div className="aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1000&fit=crop"
                alt="Editorial Look 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] mb-1 opacity-90">Look 02</p>
                <h3 className="text-xl font-light mb-3">Power Dressing</h3>
                <Button 
                  onClick={scrollToProducts}
                  variant="link" 
                  className="text-white hover:text-white/80 p-0 h-auto"
                >
                  Shop Now →
                </Button>
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden">
            <div className="aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
                alt="Editorial Look 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] mb-1 opacity-90">Look 03</p>
                <h3 className="text-xl font-light mb-3">Evening Elegance</h3>
                <Button 
                  onClick={scrollToProducts}
                  variant="link" 
                  className="text-white hover:text-white/80 p-0 h-auto"
                >
                  Shop Now →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}