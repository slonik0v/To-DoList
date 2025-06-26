
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 mb-8 floating-shadow">
      <div className="flex gap-3">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Добавить новую задачу..."
          className="flex-1 bg-lofi-surface-light border-lofi-border text-lofi-text placeholder:text-lofi-text-muted focus:border-lofi-accent text-lg py-3"
        />
        <Button
          type="submit"
          className="bg-lofi-purple hover:bg-lofi-purple-light text-white px-6 py-3 text-lg transition-all duration-200 hover:scale-105"
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
