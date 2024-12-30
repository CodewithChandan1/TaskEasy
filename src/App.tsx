import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { FooterNav } from './components/Layout/FooterNav';
import { NoteEditor } from './features/notes/components/NoteEditor';
import { NoteList } from './features/notes/components/NoteList';
import { ReminderForm } from './features/reminders/components/ReminderForm';
import { ReminderList } from './features/reminders/components/ReminderList';
import { TaskForm } from './features/tasks/components/TaskForm';
import { TaskList } from './features/tasks/components/TaskList';
import { ProjectBoard } from './features/projects/components/ProjectBoard';
import { ProjectCard } from './features/projects/components/ProjectCard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="pt-16 pb-20 lg:pl-64 min-h-screen">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard project={{
                  id: '1',
                  name: 'Sample Project',
                  description: 'This is a sample project to demonstrate the UI.',
                  tasks: [],
                  progress: 0,
                  dueDate: new Date(),
                }} />
              </div>
            } />
            <Route path="/notes" element={
              <div className="space-y-6">
                <NoteEditor />
                <NoteList />
              </div>
            } />
            <Route path="/reminders" element={
              <div className="space-y-6">
                <ReminderForm />
                <ReminderList />
              </div>
            } />
            <Route path="/tasks" element={
              <div className="space-y-6">
                <TaskForm />
                <TaskList />
              </div>
            } />
            <Route path="/projects" element={<ProjectBoard tasks={[]} />} />
          </Routes>
        </div>
      </main>
      
      <FooterNav />
    </div>
  );
}

export default App;