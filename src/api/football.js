const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3'; // '3' is a reliable public key

export const fetchPlayers = async (search) => {
  if (!search) return [];
  try {
    const response = await fetch(`${API_BASE}/searchplayers.php?p=${search}`);
    const data = await response.json();
    // Normalize data to match previous structure where possible
    return (data.player || []).map(p => ({
      player: {
        id: p.idPlayer,
        name: p.strPlayer,
        photo: p.strThumb,
        nationality: p.strNationality,
        age: p.dateBorn ? (new Date().getFullYear() - new Date(p.dateBorn).getFullYear()) : '?'
      }
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchPlayerStats = async (playerId) => {
  try {
    const response = await fetch(`${API_BASE}/lookupplayer.php?id=${playerId}`);
    const data = await response.json();
    const p = data.players?.[0]; // TheSportsDB uses 'players' for lookup

    if (!p) return null;

    return {
      player: {
        name: p.strPlayer,
        photo: p.strThumb
      },
      statistics: [
        {
          league: { name: p.strLeague || 'Liga Principal' },
          team: { name: p.strTeam || 'Equipo Actual' },
          games: { appearences: p.strNumber || '?' },
          goals: { total: 'Ver detalles', assists: '?' }
        }
      ]
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
