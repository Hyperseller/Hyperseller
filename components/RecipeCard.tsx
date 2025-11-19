import React from 'react';
import { ChefHat, Utensils } from 'lucide-react';
import { RecipeStep } from '../types';

interface RecipeCardProps {
  title: string;
  steps: RecipeStep[];
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ title, steps }) => {
  return (
    <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-amber-100 p-4 border-b border-amber-200 flex items-center gap-3">
        <div className="bg-white p-2 rounded-full shadow-sm">
          <ChefHat className="w-6 h-6 text-amber-600" />
        </div>
        <h3 className="font-serif font-bold text-xl text-amber-900">{title}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-amber-800 mb-6 italic font-medium">
          Siga estos pasos como si fuera una receta de cocina para obtener el mejor resultado:
        </p>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-8 h-8 bg-white border-2 border-amber-300 rounded-full flex items-center justify-center text-amber-700 font-bold shadow-sm group-hover:bg-amber-300 transition-colors">
                {idx + 1}
              </div>
              <div className="pt-1">
                <strong className="block text-lg text-slate-800 font-bold">{step.label}</strong>
                <span className="text-slate-600 text-base leading-relaxed">{step.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-amber-100/50 p-3 flex justify-center text-amber-700/60">
        <Utensils size={20} />
      </div>
    </div>
  );
};