import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { useNavigate } from 'react-router-dom';

const teams = [
  'Manchester Blue',
  'Fulham',
  'West Ham',
  'Chelsea',
  'Arsenal',
  'Liverpool',
  'Manchester United',
  'Tottenham Hotspur',
  'Unknown',
];

const TeamSelectionPage: React.FC = () => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const navigate = useNavigate();

  const handleRun = () => {
    navigate(
      `/3/alapindex?home=${encodeURIComponent(homeTeam)}&away=${encodeURIComponent(
        awayTeam
      )}`
    );
  };

  const isDisabled = !homeTeam || !awayTeam;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl mb-8 neon-glow">Sports Match Prediction</h1>
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-md border border-neon">
        <Dropdown
          label="Select Home Team"
          options={teams}
          value={homeTeam}
          onChange={setHomeTeam}
        />
        <Dropdown
          label="Select Away Team"
          options={teams}
          value={awayTeam}
          onChange={setAwayTeam}
        />
        <button
          onClick={handleRun}
          disabled={isDisabled}
          className={`w-full mt-4 py-2 rounded bg-neon text-black font-bold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neon transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Run Predictions
        </button>
      </div>
    </div>
  );
};

export default TeamSelectionPage;
