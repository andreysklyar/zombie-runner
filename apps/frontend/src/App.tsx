import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { GameScreen } from './screens/GameScreen';
import { TopPlayersScreen } from './screens/TopPlayersScreen';
import { ReviewsScreen } from './screens/ReviewsScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="game" element={<GameScreen />} />
          <Route path="top" element={<TopPlayersScreen />} />
          <Route path="reviews" element={<ReviewsScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
