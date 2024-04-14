import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import './App.css'; // Assuming you have some basic styles
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import ApplicationList from './components/ApplicationTracker/ApplicationList';
import StatusTagsContainer from './components/ApplicationTracker/StatusTagsContainer';
import NewsList from './components/News/NewsList';
import AffirmationItem from './components/Affirmation/AffirmationItem';
function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />

      <h1>Job Application</h1>

      <AffirmationItem />
      <Dashboard />
      <DndProvider backend={HTML5Backend}>
      <StatusTagsContainer />
      <ApplicationList />
      </DndProvider>
      <NewsList />
    </div>
  );
}

export default App;