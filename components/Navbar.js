import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    const navItems = [
        {name: 'Workout App', href: '/projects/workout-app'},
        {name: 'Gearspot App', href: '/projects/gearspot'},
        {name: 'GIS Work', href: '/projects/GIS'},
    ]

    return (
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo/Name */}
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-800">
                  John B. Williams
                </Link>
              </div>
    
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      router.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
    
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => {
                    // Add mobile menu toggle logic here if needed
                    console.log('Mobile menu clicked');
                  }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      );
}