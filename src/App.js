import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import TeamSection from './sections/TeamSection';
import GameSection from './sections/GameSection';
import GameDetailModal from './components/GameDetailModal';
import FanArtSection from './sections/FanArtSection';
import FanArtDetailModal from './components/FanArtDetailModal'; // Import the new modal
import Footer from './components/Footer';

import { teamMembersData, gamesData, fanArtsData } from './data/data';


function App() {
  const [loading, setLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedFanArt, setSelectedFanArt] = useState(null); // New state for fan art modal

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleGameCardClick = (game) => {
    setSelectedGame(game);
  };

  const handleCloseGameDetail = () => {
    setSelectedGame(null);
  };

  // New handlers for Fan Art Modal
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
                <section id="team">
                  <TeamSection teamMembers={teamMembersData} />
                </section>
                <section id="games">
                  <GameSection games={gamesData} onGameCardClick={handleGameCardClick} />
                </section>
                {/* Pass the new click handler to FanArtSection */}
                <section id="fanart">
                  <FanArtSection fanArts={fanArtsData} onFanArtCardClick={handleFanArtCardClick} />
                </section>
              </>
            } />
          </Routes>

          {selectedGame && (
            <GameDetailModal game={selectedGame} onClose={handleCloseGameDetail} />
          )}
          {/* Render the new FanArtDetailModal */}
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