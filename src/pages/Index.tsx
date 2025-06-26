
import React from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoForm from '../components/TodoForm';
import TodoFilter from '../components/TodoFilter';
import TodoItem from '../components/TodoItem';
import PixelCat from '../components/PixelCat';

const Index = () => {
  const {
    todos,
    filter,
    todoCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
  } = useTodos();

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-lofi-text mb-4 bg-gradient-to-r from-lofi-purple to-lofi-accent bg-clip-text text-transparent">
            To-do List
          </h1>
          <p className="text-lofi-text-muted text-lg">
            sHeeesh, let's get things done! 
          </p>
        </div>

        {/* Add Todo Form */}
        <TodoForm onAdd={addTodo} />

        {/* Filter */}
        <TodoFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          todoCount={todoCount}
        />

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-xl text-lofi-text mb-2">
                {filter === 'all' ? 'Пока нет задач' : 
                 filter === 'active' ? 'Нет активных задач' : 
                 'Нет выполненных задач'}
              </h3>
              <p className="text-lofi-text-muted">
                {filter === 'all' ? 'Добавьте свою первую задачу!' : 
                 filter === 'active' ? 'Все задачи выполнены! 🎉' : 
                 'Пора браться за дело!'}
              </p>
            </div>
          ) : (
            todos.map((todo, index) => (
              <div key={todo.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <TodoItem
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              </div>
            ))
          )}
        </div>

        {/* Stats */}
        {todoCount.all > 0 && (
          <div className="glass-card p-6 mt-8 text-center">
            <div className="flex justify-center gap-8 text-sm text-lofi-text-muted">
              <div>
                <span className="text-lofi-accent font-semibold">{todoCount.all}</span>
                <span className="ml-1">всего</span>
              </div>
              <div>
                <span className="text-lofi-purple font-semibold">{todoCount.active}</span>
                <span className="ml-1">активных</span>
              </div>
              <div>
                <span className="text-green-400 font-semibold">{todoCount.completed}</span>
                <span className="ml-1">выполнено</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated Pixel Cat */}
      <PixelCat />
    </div>
  );
};

export default Index;
