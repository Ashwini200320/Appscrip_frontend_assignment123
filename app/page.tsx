import { ProductGrid } from '@/components/product/product-grid';
import { FilterSidebar } from '@/components/filters/filter-sidebar';
import { ProductSort } from '@/components/product/product-sort';
import { getProducts } from '@/lib/api';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Fashion Collection</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <FilterSidebar />
        </aside>
        
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} Products</p>
            <ProductSort />
          </div>
          
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}