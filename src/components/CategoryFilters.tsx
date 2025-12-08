import { Button } from '@/components/ui/button'

interface CategoryFiltersProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export const CategoryFilters = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFiltersProps) => {
  if (categories.length === 0) return null

  return (
    <div className="border-y py-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <Button
          variant={selectedCategory === null ? "default" : "ghost"}
          onClick={() => onSelectCategory(null)}
          className="whitespace-nowrap font-normal"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            onClick={() => onSelectCategory(category)}
            className="whitespace-nowrap font-normal"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}