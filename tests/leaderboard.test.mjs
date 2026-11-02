import test from 'node:test';
import assert from 'node:assert/strict';
import { getLeaderboard } from '../assets/js/services/leaderboard.js';

const config = { enabled: true, baseUrl: 'https://example.invalid', timeoutMs: 500 };

test('leaderboard uses server entries and subject pagination', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async url => {
    assert.equal(url, 'https://example.invalid/api/leaderboard?subject=net&page=2&limit=10');
    return new Response(JSON.stringify({ entries: [{ rank: 11, userId: 'u-1', displayName: 'Sora', xp: 240 }], page: 2, hasMore: false }));
  };
  try {
    const result = await getLeaderboard({ subject: 'net', page: 2, limit: 10 }, config);
    assert.equal(result.entries[0].xp, 240);
  } finally { globalThis.fetch = originalFetch; }
});

test('disabled, invalid, and failed leaderboard requests do not invent scores', async () => {
  await assert.rejects(getLeaderboard(), /NOT_CONFIGURED/);
  await assert.rejects(getLeaderboard({ subject: 'bad' }, config), /Invalid subject/);
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = async () => new Response('Unavailable', { status: 503 });
    await assert.rejects(getLeaderboard({}, config), /HTTP_503/);
    globalThis.fetch = async () => new Response(JSON.stringify({ entries: [{ rank: 1, xp: -10 }], page: 1, hasMore: false }));
    await assert.rejects(getLeaderboard({}, config), /INVALID_RESPONSE/);
  } finally { globalThis.fetch = originalFetch; }
});
