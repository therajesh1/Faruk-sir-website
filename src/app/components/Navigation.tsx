import { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Research & Projects', id: 'research' },
    { label: 'Leadership & Roles', id: 'leadership' },
    { label: 'Publications', id: 'publications' },
    { label: 'Industry & Government', id: 'industry' },
    { label: 'Awards', id: 'awards' },
    { label: 'Photo Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-['Playfair_Display'] text-[#1a2740] tracking-tight hover:text-[#0d9488] transition-colors"
            style={{ fontSize: '1.25rem', fontWeight: 600 }}
          >
            Dr. Faruk Kazi
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#2c3e50] hover:text-[#0d9488] transition-colors duration-200"
                style={{ fontSize: '0.9375rem' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2740] text-white hover:bg-[#0d9488] transition-colors text-sm font-medium ml-4"
            >
              <ArrowLeft size={16} />
              Back to Lab
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1a2740]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-[#2c3e50] hover:bg-gray-50 hover:text-[#0d9488] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/')}
              className="block w-full text-left px-4 py-3 text-[#2c3e50] hover:bg-gray-50 hover:text-[#0d9488] transition-colors border-t border-gray-100 font-medium"
            >
              <div className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to CNDS Lab
              </div>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
