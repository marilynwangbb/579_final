import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import './App.css';
import NavBar from './components/NavBar';
import InteractiveTable from './components/ApplicationTracker/InteractiveTable';
import StatusTagsContainer from './components/ApplicationTracker/StatusTagsContainer';
import NewsList from './components/News/NewsList';
import AffirmationItem from './components/Affirmation/AffirmationItem';
import NotesManager from './components/Note/NotesManager';
function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />

      <h1 id="job-application">Job Application</h1>

      <AffirmationItem />
      <DndProvider backend={HTML5Backend}>
      <StatusTagsContainer />
      <InteractiveTable />
      </DndProvider>
      <NewsList />
      <h1 id="notes-manager">Note Manager</h1>
      <NotesManager />
    </div>
  );
}

export default App;