import { useState, useEffect, useCallback } from 'react';
import { getPredictionStats, PredictionStats } from '../services/predictionService';

export const usePrediction = (home: string, away: string) => {
  const [stats, setStats] = useState<PredictionStats | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getPredictionStats(home, away);
      setStats(res);
    } catch (e) {
      setError('Failed to fetch prediction stats');
    } finally {
      setLoading(false);
    }
  }, [home, away]);

  useEffect(() => {
    if (home && away) {
      fetchStats();
    }
  }, [home, away, fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
};
