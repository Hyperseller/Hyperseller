import React from 'react';
import { courseData } from '../data';
import { Check, Circle, BookOpen } from 'lucide-react';

interface SidebarProps {
  currentIndex: number;
  onSelectLesson: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentIndex, onSelectLesson, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-0 lg:shadow-none lg:border-r lg:border-slate-200
        `}
      >
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3 text-primary-700 mb-2">
            <BookOpen className="w-8 h-8" />
            <h1 className="font-serif font-bold text-xl leading-tight">
              Google AI Studio
            </h1>
          </div>
          <p className="text-sm text-slate-500 font-sans">
            Guía para Adultos Mayores
          </p>
        </div>

        <nav className="p-4 space-y-2">
          {courseData.map((lesson, index) => {
            const isActive = index === currentIndex;
            const isCompleted = index < currentIndex;
            const Icon = lesson.icon;

            return (
              <button
                key={lesson.id}
                onClick={() => {
                  onSelectLesson(index);
                  if (window.innerWidth < 1024) onClose();
                }}
                className={`
                  w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200
                  ${isActive 
                    ? 'bg-primary-50 text-primary-800 ring-1 ring-primary-200 shadow-sm' 
                    : 'hover:bg-slate-50 text-slate-600'
                  }
                `}
              >
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                  ${isActive ? 'bg-primary-200 text-primary-700' : 'bg-slate-100 text-slate-400'}
                  ${isCompleted ? 'bg-green-100 text-green-600' : ''}
                `}>
                  {isCompleted ? <Check size={16} /> : <Icon size={16} />}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm truncate ${isActive ? 'text-primary-900' : 'text-slate-700'}`}>
                    {lesson.title}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        <div className="p-6 mt-4">
            <div className="bg-slate-100 rounded-lg p-4 text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2">Progreso del Curso</p>
                <div className="w-full bg-slate-300 rounded-full h-2.5 mb-1">
                    <div 
                        className="bg-primary-600 h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${((currentIndex) / (courseData.length - 1)) * 100}%` }}
                    ></div>
                </div>
                <p className="text-xs text-slate-600 text-right font-medium">
                    {Math.round(((currentIndex) / (courseData.length - 1)) * 100)}% Completado
                </p>
            </div>
        </div>
      </aside>
    </>
  );
};