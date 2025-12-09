import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2000&h=1200&fit=crop"
          alt="Fashion Editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm tracking-[0.3em] uppercase text-white/90 font-light">
                Spring 2025
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-tight">
                New<br />Drops
              </h1>
            </div>
            
            <p className="text-lg text-white/90 max-w-md font-light leading-relaxed">
              Discover the latest additions to our collection. Timeless pieces crafted for the modern woman.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToProducts}
                className="bg-white text-black hover:bg-white/90 font-normal tracking-wide uppercase text-sm px-8"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button style={{ color: '#000000' }} 
                size="lg" 
                variant="outline"
                onClick={scrollToProducts}
                className="border-white text-white hover:bg-white hover:text-black font-normal tracking-wide uppercase text-sm px-8"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}