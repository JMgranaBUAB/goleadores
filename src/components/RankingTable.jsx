import React from 'react';
import { Trophy, Award, User } from 'lucide-react';
import { motion } from 'framer-motion';

const RankingTable = ({ data }) => {
    return (
        <div className="glass-card" style={{ padding: '30px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--glass-border)' }}>
                        <th style={{ padding: '16px 8px' }}>Rango</th>
                        <th>Jugador</th>
                        <th>Goles</th>
                        <th>Equipo Actual</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((player, index) => (
                        <motion.tr
                            key={player.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.01 }}
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
                            className="ranking-row"
                        >
                            <td style={{ padding: '20px 8px', fontWeight: 'bold', color: index < 3 ? 'var(--primary)' : 'inherit' }}>
                                {index < 3 ? <Award size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> : null}
                                #{index + 1}
                            </td>
                            <td style={{ padding: '16px 0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass)', overflow: 'hidden', border: '1px solid var(--glass-border)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {player.photo ? (
                                            <img
                                                src={player.photo}
                                                alt={player.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                            />
                                        ) : null}
                                        <User size={20} style={{ display: player.photo ? 'none' : 'block', color: 'var(--text-muted)' }} />
                                    </div>
                                    <img
                                        src={`https://flagcdn.com/w40/${player.countryCode.toLowerCase()}.png`}
                                        alt={player.country}
                                        title={player.country}
                                        style={{ width: '20px', borderRadius: '2px', objectFit: 'cover', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                                    />
                                    <span style={{ fontWeight: '600' }}>{player.name}</span>
                                </div>
                            </td>
                            <td style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '18px' }}>{player.goals}</td>
                            <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {player.teamName === 'Retirado' ? (
                                        <span style={{
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '10px',
                                            fontWeight: 'bold',
                                            background: 'rgba(239, 68, 68, 0.1)',
                                            color: '#ef4444',
                                            border: '1px solid rgba(239, 68, 68, 0.2)'
                                        }}>
                                            RETIRADO
                                        </span>
                                    ) : (
                                        <>
                                            <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {player.teamCrest ? (
                                                    <img
                                                        src={player.teamCrest}
                                                        alt={player.teamName}
                                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                                    />
                                                ) : null}
                                                <Trophy size={14} style={{ display: player.teamCrest ? 'none' : 'block', color: 'var(--text-muted)' }} />
                                            </div>
                                            <span style={{ fontSize: '14px', fontWeight: '500' }}>{player.teamName}</span>
                                        </>
                                    )}
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RankingTable;
