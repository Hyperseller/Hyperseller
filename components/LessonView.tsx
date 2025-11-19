import React from 'react';
import { LessonContent } from '../types';
import { RecipeCard } from './RecipeCard';
import { QuizView } from './QuizView';
import { ArrowLeft, ArrowRight, Lightbulb, AlertCircle, Info } from 'lucide-react';

interface LessonViewProps {
  lesson: LessonContent;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onNext, onPrev, isFirst, isLast }) => {
  // Helper to get icon for highlight box
  const getHighlightIcon = (type: string) => {
    switch (type) {
      case 'tip': return <Lightbulb className="w-6 h-6 text-amber-500" />;
      case 'warning': return <AlertCircle className="w-6 h-6 text-red-500" />;
      default: return <Info className="w-6 h-6 text-blue-500" />;
    }
  };

  const getHighlightStyles = (type: string) => {
    switch (type) {
      case 'tip': return 'bg-amber-50 border-amber-200 text-amber-900';
      case 'warning': return 'bg-red-50 border-red-200 text-red-900';
      default: return 'bg-blue-50 border-blue-200 text-blue-900';
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Image */}
      <div className="relative h-48 md:h-64 w-full rounded-3xl overflow-hidden shadow-lg mb-8">
        <img 
          src={lesson.image} 
          alt={lesson.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
          <div className="flex items-center gap-3 text-white/90 mb-2 font-medium tracking-wider text-sm uppercase">
            <lesson.icon size={18} />
            <span>Módulo {lesson.id === 'intro' ? '1' : lesson.id === 'conclusion' ? 'Final' : parseInt(lesson.title.split('.')[0])}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-shadow-sm">
            {lesson.title.split('. ')[1] || lesson.title}
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-2 md:px-0">
        <h3 className="text-2xl font-sans font-semibold text-slate-700 mb-4">
          {lesson.subtitle}
        </h3>
        
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-serif">
          {lesson.description}
        </p>

        {/* Highlight Box */}
        {lesson.highlightBox && (
          <div className={`p-6 rounded-xl border mb-8 flex gap-4 shadow-sm ${getHighlightStyles(lesson.highlightBox.type)}`}>
            <div className="flex-shrink-0 pt-1">
              {getHighlightIcon(lesson.highlightBox.type)}
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">{lesson.highlightBox.title}</h4>
              <p className="leading-relaxed opacity-90">{lesson.highlightBox.content}</p>
            </div>
          </div>
        )}

        {/* Bullet Points */}
        {lesson.bulletPoints && (
          <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 border-slate-100">Puntos Clave:</h4>
            <ul className="space-y-3">
              {lesson.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-primary-500"></span>
                  <span className="text-lg text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recipe Card */}
        {lesson.recipe && (
          <RecipeCard title={lesson.recipe.title} steps={lesson.recipe.steps} />
        )}

        {/* Quiz Section - Added here */}
        {lesson.quiz && (
            <div className="my-12">
                <QuizView key={lesson.id} quiz={lesson.quiz} />
            </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-slate-200">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`
              w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-lg font-medium transition-all
              ${isFirst 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
              }
            `}
          >
            <ArrowLeft size={20} />
            Anterior
          </button>

          <button
            onClick={onNext}
            disabled={isLast}
            className={`
              w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-lg font-bold transition-all shadow-md
              ${isLast 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5'
              }
            `}
          >
            {lesson.id === 'conclusion' ? 'Terminar Curso' : 'Siguiente Lección'}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};