import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { usePrediction } from '../hooks/usePrediction';
import PredictionCard from '../components/PredictionCard';

const defaultPairs = [
  { home: 'Manchester Blue', away: 'Unknown' },
  { home: 'Fulham', away: 'West Ham' },
];

const PredictionResultsPage: React.FC = () => {
  const { search } = useLocation();
  const { home, away } = queryString.parse(search) as { home?: string; away?: string };
  const pairs = home && away ? [{ home, away }] : defaultPairs;

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-3xl mb-8 neon-glow">Prediction Results</h1>
      <div>
        {pairs.map(({ home, away }) => (
          <SinglePrediction key={`${home}-${away}`} home={home} away={away} />
        ))}
      </div>
    </div>
  );
};

const SinglePrediction: React.FC<{ home: string; away: string }> = ({ home, away }) => {
  const { stats, loading, error, refetch } = usePrediction(home, away);

  return (
    <div className="mb-8">
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {stats && <PredictionCard home={home} away={away} stats={stats} />}
      <button
        onClick={refetch}
        className="py-2 px-4 rounded bg-neon text-black font-bold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neon transition-opacity"
      >
        Run Predictions
      </button>
    </div>
  );
};

export default PredictionResultsPage;
