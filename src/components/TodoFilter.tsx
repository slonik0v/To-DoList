
import React from 'react';
import { FilterType } from '../types/todo';
import { Button } from './ui/button';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  todoCount: {
    all: number;
    active: number;
    completed: number;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange, todoCount }) => {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'Все', count: todoCount.all },
    { key: 'active', label: 'Активные', count: todoCount.active },
    { key: 'completed', label: 'Выполненные', count: todoCount.completed },
  ];

  return (
    <div className="glass-card p-4 mb-6">
      <div className="flex gap-2 justify-center">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            variant={currentFilter === filter.key ? 'default' : 'ghost'}
            className={`px-4 py-2 rounded-xl transition-all duration-200 ${
              currentFilter === filter.key
                ? 'bg-lofi-purple text-white shadow-lg'
                : 'text-lofi-text-muted hover:text-lofi-text hover:bg-lofi-surface-light'
            }`}
          >
            {filter.label}
            <span className="ml-2 text-sm opacity-70">({filter.count})</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilter;
