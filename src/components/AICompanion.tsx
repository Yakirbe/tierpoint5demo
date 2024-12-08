import React from 'react';
import { Bot, Loader2 } from 'lucide-react';

export function AICompanion({ isAnalyzing = false }) {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:shadow-xl transition-all">
      <div className="relative">
        {isAnalyzing ? (
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        ) : (
          <Bot className="w-8 h-8 text-blue-500" />
        )}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      </div>
    </div>
  );
}