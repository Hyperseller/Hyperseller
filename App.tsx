import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { LessonView } from './components/LessonView';
import { courseData } from './data';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  // Initialize state from localStorage if available
  const [currentIndex, setCurrentIndex] = useState(() => {
    try {
      const savedProgress = localStorage.getItem('aiStudioCourseProgress');
      if (savedProgress !== null) {
        const index = parseInt(savedProgress, 10);
        // Ensure the saved index is valid
        if (!isNaN(index) && index >= 0 && index < courseData.length) {
          return index;
        }
      }
    } catch (error) {
      console.warn('Failed to load progress from localStorage:', error);
    }
    return 0;
  });
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Save progress whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('aiStudioCourseProgress', currentIndex.toString());
    } catch (error) {
      console.warn('Failed to save progress to localStorage:', error);
    }
  }, [currentIndex]);

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < courseData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <Sidebar 
        currentIndex={currentIndex}
        onSelectLesson={setCurrentIndex}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 sticky top-0 z-30 shadow-sm flex items-center justify-between">
          <span className="font-serif font-bold text-primary-800 text-lg">Curso AI Studio</span>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full">
          <LessonView 
            lesson={courseData[currentIndex]}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={currentIndex === 0}
            isLast={currentIndex === courseData.length - 1}
          />
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-8 px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Guía Educativa de Inteligencia Artificial.</p>
          <p className="mt-2 text-xs text-slate-400">Diseñado para aprender a su propio ritmo.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;