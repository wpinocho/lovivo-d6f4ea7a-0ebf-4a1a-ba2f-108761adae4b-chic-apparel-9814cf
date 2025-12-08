import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Ruler } from "lucide-react"

export const SizeGuide = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto font-normal text-sm">
          <Ruler className="mr-2 h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">Size Guide</DialogTitle>
          <DialogDescription>
            Find your perfect fit with our comprehensive sizing guide
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-8 py-4">
          {/* Clothing Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-4">Clothing</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4 font-medium">Size</th>
                    <th className="text-left py-2 px-4 font-medium">US</th>
                    <th className="text-left py-2 px-4 font-medium">UK</th>
                    <th className="text-left py-2 px-4 font-medium">EU</th>
                    <th className="text-left py-2 px-4 font-medium">Bust (in)</th>
                    <th className="text-left py-2 px-4 font-medium">Waist (in)</th>
                    <th className="text-left py-2 px-4 font-medium">Hip (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">XS</td>
                    <td className="py-2 px-4">0-2</td>
                    <td className="py-2 px-4">4-6</td>
                    <td className="py-2 px-4">32-34</td>
                    <td className="py-2 px-4">31-32</td>
                    <td className="py-2 px-4">24-25</td>
                    <td className="py-2 px-4">34-35</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">S</td>
                    <td className="py-2 px-4">4-6</td>
                    <td className="py-2 px-4">8-10</td>
                    <td className="py-2 px-4">36-38</td>
                    <td className="py-2 px-4">33-34</td>
                    <td className="py-2 px-4">26-27</td>
                    <td className="py-2 px-4">36-37</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">M</td>
                    <td className="py-2 px-4">8-10</td>
                    <td className="py-2 px-4">12-14</td>
                    <td className="py-2 px-4">40-42</td>
                    <td className="py-2 px-4">35-36</td>
                    <td className="py-2 px-4">28-29</td>
                    <td className="py-2 px-4">38-39</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">L</td>
                    <td className="py-2 px-4">12-14</td>
                    <td className="py-2 px-4">16-18</td>
                    <td className="py-2 px-4">44-46</td>
                    <td className="py-2 px-4">37-39</td>
                    <td className="py-2 px-4">30-32</td>
                    <td className="py-2 px-4">40-42</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">XL</td>
                    <td className="py-2 px-4">16-18</td>
                    <td className="py-2 px-4">20-22</td>
                    <td className="py-2 px-4">48-50</td>
                    <td className="py-2 px-4">40-42</td>
                    <td className="py-2 px-4">33-35</td>
                    <td className="py-2 px-4">43-45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Pants Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-4">Pants & Trousers</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4 font-medium">Size</th>
                    <th className="text-left py-2 px-4 font-medium">US</th>
                    <th className="text-left py-2 px-4 font-medium">Waist (in)</th>
                    <th className="text-left py-2 px-4 font-medium">Hip (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">24</td>
                    <td className="py-2 px-4">00</td>
                    <td className="py-2 px-4">24</td>
                    <td className="py-2 px-4">34</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">26</td>
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">26</td>
                    <td className="py-2 px-4">36</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">28</td>
                    <td className="py-2 px-4">6</td>
                    <td className="py-2 px-4">28</td>
                    <td className="py-2 px-4">38</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">30</td>
                    <td className="py-2 px-4">10</td>
                    <td className="py-2 px-4">30</td>
                    <td className="py-2 px-4">40</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">32</td>
                    <td className="py-2 px-4">14</td>
                    <td className="py-2 px-4">32</td>
                    <td className="py-2 px-4">42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Measuring Guide */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">How to Measure</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Bust:</strong> Measure around the fullest part of your bust with arms relaxed at sides.</p>
              <p><strong className="text-foreground">Waist:</strong> Measure around the narrowest part of your natural waistline.</p>
              <p><strong className="text-foreground">Hip:</strong> Measure around the fullest part of your hips, approximately 8" below your waist.</p>
              <p className="pt-2 italic">For the most accurate measurements, we recommend having someone help you measure.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}