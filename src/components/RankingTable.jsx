import React from 'react';
import { Trophy, Award, User } from 'lucide-react';
import { motion } from 'framer-motion';

const RankingTable = ({ data }) => {
    const sortedData = [...data].sort((a, b) => b.goals - a.goals);

    return (
        <div className="glass-card" style={{ padding: '30px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--glass-border)' }}>
                        <th style={{ padding: '16px 8px' }}>Rango</th>
                        <th>Jugador</th>
                        <th>Goles</th>
                        <th>País</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((player, index) => (
                        <motion.tr
                            key={player.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
                            className="ranking-row"
                        >
                            <td style={{ padding: '20px 8px', fontWeight: 'bold', color: index < 3 ? 'var(--primary)' : 'inherit' }}>
                                {index < 3 ? <Award size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> : null}
                                #{player.rank}
                            </td>
                            <td style={{ padding: '16px 0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass)', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                                        {player.photo ? <img src={player.photo} alt={player.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <User size={20} style={{ margin: '10px' }} />}
                                    </div>
                                    <span style={{ fontWeight: '600' }}>{player.name}</span>
                                </div>
                            </td>
                            <td style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '18px' }}>{player.goals}</td>
                            <td>{player.country}</td>
                            <td>
                                <span style={{
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    background: player.status === 'Active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                    color: player.status === 'Active' ? '#22c55e' : '#ef4444'
                                }}>
                                    {player.status.toUpperCase()}
                                </span>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RankingTable;
