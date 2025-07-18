export interface PredictionStats {
  matchesPlayed: number;
  homeWin: string;
  draw: string;
  awayWin: string;
  avgGoals: { home: number; away: number };
  bothScored: string;
  formIndex: { home: number; away: number };
  predictionScore: number;
}

export const getPredictionStats = async (
  home: string,
  away: string
): Promise<PredictionStats> => {
  await new Promise((r) => setTimeout(r, 500));
  return {
    matchesPlayed: 8,
    homeWin: "45%",
    draw: "25%",
    awayWin: "30%",
    avgGoals: { home: 1.4, away: 1.1 },
    bothScored: "62%",
    formIndex: { home: 6.2, away: 5.1 },
    predictionScore: +(Math.random() * 5 + 5).toFixed(2),
  };
};
