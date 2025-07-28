import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ChartSection from './components/ChartSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="cards-container">
          <Card title="Revenue" value="$12,340" />
          <Card title="Users" value="1,024" />
          <Card title="Conversions" value="13.2%" />
          <Card title="Growth" value="4.7%" />
        </div>

        {/* Add this below the cards */}
        <ChartSection />
      </div>
    </>
  );
}

export default App;
