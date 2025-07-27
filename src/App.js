import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import LoadingScreen from './components/LoadingScreen';
import HeroSection from './sections/HeroSection'; // Import the new HeroSection
import TeamSection from './sections/TeamSection';
import GameSection from './sections/GameSection';
import GameDetailModal from './components/GameDetailModal';
import FanArtSection from './sections/FanArtSection';
import FanArtDetailModal from './components/FanArtDetailModal';
import Footer from './components/Footer';
import './index.css'; // Ensure global styles are applied


import { teamMembersData, gamesData, fanArtsData } from './data/data';


function App() {
  const [loading, setLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedFanArt, setSelectedFanArt] = useState(null);

  useEffect(() => {
    // Simulate loading time, adjust as needed
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading screen
  }, []);

  const handleGameCardClick = (game) => {
    setSelectedGame(game);
  };

  const handleCloseGameDetail = () => {
    setSelectedGame(null);
  };

  const handleFanArtCardClick = (art) => {
    setSelectedFanArt(art);
  };

  const handleCloseFanArtDetail = () => {
    setSelectedFanArt(null);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection /> {/* Include the HeroSection here */}
                <section id="team">
                  <TeamSection teamMembers={teamMembersData} />
                </section>
                <section id="games">
                  <GameSection games={gamesData} onGameCardClick={handleGameCardClick} />
                </section>
                <section id="fanart">
                  <FanArtSection fanArts={fanArtsData} onFanArtCardClick={handleFanArtCardClick} />
                </section>
              </>
            } />
          </Routes>

          {selectedGame && (
            <GameDetailModal game={selectedGame} onClose={handleCloseGameDetail} />
          )}
          {selectedFanArt && (
            <FanArtDetailModal art={selectedFanArt} onClose={handleCloseFanArtDetail} />
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;