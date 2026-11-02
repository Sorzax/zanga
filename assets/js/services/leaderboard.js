import { API } from '../../../config/api.js';
import { ORDER } from '../../../data/catalog.js';

// Prepared read client; a shared leaderboard is deliberately not populated from
// editable local XP. See docs/leaderboard-backend.md for the server contract.
export async function getLeaderboard({ subject = 'all', page = 1, limit = 20 } = {}, config = API) {
  if (!config.enabled) throw new Error('LEADERBOARD_NOT_CONFIGURED');
  if (subject !== 'all' && !ORDER.includes(subject)) throw new TypeError('Invalid subject');
  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 100) throw new TypeError('Invalid pagination');
  const query = new URLSearchParams({ subject, page: String(page), limit: String(limit) });
  const base = config.baseUrl.replace(/\/$/, '');
  const response = await fetch(`${base}/api/leaderboard?${query}`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(config.timeoutMs)
  });
  if (!response.ok) throw new Error(`LEADERBOARD_HTTP_${response.status}`);
  const data = await response.json();
  if (!Array.isArray(data.entries) || data.entries.some(entry =>
    !Number.isInteger(entry.rank) || entry.rank < 1 || typeof entry.userId !== 'string' ||
    typeof entry.displayName !== 'string' || !Number.isSafeInteger(entry.xp) || entry.xp < 0
  ) || !Number.isInteger(data.page) || typeof data.hasMore !== 'boolean') throw new Error('LEADERBOARD_INVALID_RESPONSE');
  return data;
}
