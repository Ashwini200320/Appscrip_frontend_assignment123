export function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Facebook</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get special offers and updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}