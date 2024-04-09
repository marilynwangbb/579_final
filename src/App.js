import React from 'react'
import './App.css'; // Assuming you have some basic styles
import Dashboard from './components/Dashboard';
import ApplicationList from './components/ApplicationTracker/ApplicationList';
import NewsList from './components/News/NewsList';
import AffirmationItem from './components/Affirmation/AffirmationItem';
function App() {
  return (
    <div className="App">
      <h1>Job Application Helper</h1>
      <Dashboard />
      <ApplicationList />
      <NewsList />
      <AffirmationItem />
    </div>
  );
}

export default App;