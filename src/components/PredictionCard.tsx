import React from 'react';
import { PredictionStats } from '../services/predictionService';

interface PredictionCardProps {
  home: string;
  away: string;
  stats: PredictionStats;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ home, away, stats }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-neon mb-6">
      <h2 className="text-xl mb-4 neon-glow">{home} vs {away}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>Matches Played: {stats.matchesPlayed}</div>
        <div>Home Win %: {stats.homeWin}</div>
        <div>Draw %: {stats.draw}</div>
        <div>Away Win %: {stats.awayWin}</div>
        <div>Avg Goals (H/A): {stats.avgGoals.home}/{stats.avgGoals.away}</div>
        <div>Both Scored %: {stats.bothScored}</div>
        <div>Form Index (H/A): {stats.formIndex.home}/{stats.formIndex.away}</div>
        <div className="col-span-2 text-right font-bold neon-glow">Prediction Score: {stats.predictionScore}</div>
      </div>
    </div>
  );
};

export default PredictionCard;
