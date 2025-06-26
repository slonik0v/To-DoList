
import React, { useState } from 'react';
import { Todo } from '../types/todo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Check, Edit2, Trash2, X } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`task-item animate-fade-in ${todo.completed ? 'task-completed' : ''}`}>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onToggle(todo.id)}
          className={`rounded-full p-2 transition-all duration-200 ${
            todo.completed 
              ? 'bg-lofi-accent text-lofi-bg hover:bg-lofi-accent/80' 
              : 'bg-lofi-surface-light hover:bg-lofi-purple/20 text-lofi-accent'
          }`}
        >
          <Check className="w-4 h-4" />
        </Button>

        {isEditing ? (
          <div className="flex-1 flex gap-2">
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
              className="bg-lofi-surface-light border-lofi-border text-lofi-text focus:border-lofi-accent"
              autoFocus
            />
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-lofi-purple hover:bg-lofi-purple-light"
            >
              <Check className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleCancel}
              variant="ghost"
              size="sm"
              className="text-lofi-text-muted hover:text-lofi-text"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <>
            <span
              className={`flex-1 text-lg transition-all duration-200 ${
                todo.completed 
                  ? 'line-through text-lofi-text-muted' 
                  : 'text-lofi-text'
              }`}
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={() => setIsEditing(true)}
                variant="ghost"
                size="sm"
                className="text-lofi-text-muted hover:text-lofi-accent p-2"
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => onDelete(todo.id)}
                variant="ghost"
                size="sm"
                className="text-lofi-text-muted hover:text-red-400 p-2"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
