import React, { useState } from 'react';
import { Quiz } from '../types';
import { HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

interface QuizViewProps {
  quiz: Quiz;
}

export const QuizView: React.FC<QuizViewProps> = ({ quiz }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption === quiz.correctAnswerIndex;

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
      <div className="bg-indigo-50 p-6 border-b border-indigo-100 flex items-center gap-3">
        <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
          <HelpCircle size={24} />
        </div>
        <h3 className="text-xl font-serif font-bold text-indigo-900">
          Repaso Rápido
        </h3>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-lg font-medium text-slate-800 mb-6 leading-relaxed">
          {quiz.question}
        </p>

        <div className="space-y-3">
          {quiz.options.map((option, index) => {
            const isSelected = selectedOption === index;
            let buttonStyle = "border-slate-200 hover:bg-slate-50 hover:border-indigo-300";
            
            if (isSubmitted) {
              if (index === quiz.correctAnswerIndex) {
                buttonStyle = "bg-green-50 border-green-500 ring-1 ring-green-500 text-green-900";
              } else if (isSelected && !isCorrect) {
                buttonStyle = "bg-red-50 border-red-300 text-red-800";
              } else {
                buttonStyle = "border-slate-100 text-slate-400 opacity-70";
              }
            } else if (isSelected) {
              buttonStyle = "bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500 text-indigo-900";
            }

            return (
              <button
                key={index}
                onClick={() => !isSubmitted && setSelectedOption(index)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-lg ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${isSubmitted && index === quiz.correctAnswerIndex ? 'border-green-600 bg-green-600 text-white' : ''}
                    ${isSubmitted && isSelected && !isCorrect ? 'border-red-500 bg-red-500 text-white' : ''}
                    ${!isSubmitted && isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'}
                  `}>
                    {isSubmitted && index === quiz.correctAnswerIndex && <CheckCircle2 size={16} />}
                    {isSubmitted && isSelected && !isCorrect && <XCircle size={16} />}
                    {!isSubmitted && isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div className={`mt-6 p-4 rounded-xl animate-in fade-in slide-in-from-top-2 ${isCorrect ? 'bg-green-50 text-green-900 border border-green-200' : 'bg-red-50 text-red-900 border border-red-200'}`}>
            <div className="flex gap-3">
              <div className="mt-1 flex-shrink-0">
                {isCorrect ? <CheckCircle2 className="text-green-600" /> : <XCircle className="text-red-600" />}
              </div>
              <div>
                <p className="font-bold text-lg mb-1">
                  {isCorrect ? '¡Excelente respuesta!' : 'No exactamente...'}
                </p>
                <p className="leading-relaxed">
                  {quiz.explanation}
                </p>
                {!isCorrect && (
                    <button 
                        onClick={handleReset}
                        className="mt-3 text-sm font-semibold underline underline-offset-2 hover:text-red-700"
                    >
                        Intentar de nuevo
                    </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        {!isSubmitted && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className={`
                px-8 py-3 rounded-full font-bold text-lg transition-all
                ${selectedOption !== null 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
              `}
            >
              Comprobar Respuesta
            </button>
          </div>
        )}
      </div>
    </div>
  );
};