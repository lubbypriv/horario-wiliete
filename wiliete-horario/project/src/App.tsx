import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import About from './components/About';
import Courses from './components/Courses';
import Others from './components/Others';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" 
         style={{ 
           backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
         }}>
      <div className="min-h-screen bg-black/70 backdrop-blur-[8px]">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="container mx-auto px-4 pt-32">
          {activeSection === 'about' && <About />}
          {activeSection === 'courses' && <Courses />}
          {activeSection === 'others' && <Others />}
        </main>
      </div>
    </div>
  );
}

export default App