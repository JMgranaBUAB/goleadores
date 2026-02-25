import React from 'react';
import { motion } from 'framer-motion';
import { Activity, User } from 'lucide-react';

const PlayerCard = ({ player, onClick }) => {
    if (!player) return null;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card"
            onClick={() => onClick(player)}
            style={{ padding: '24px', cursor: 'pointer', display: 'flex', gap: '20px', alignItems: 'center' }}
        >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--primary)', overflow: 'hidden' }}>
                {player.photo ? <img src={player.photo} alt={player.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <User size={40} color="var(--primary)" />}
            </div>

            <div>
                <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{player.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '8px' }}>{player.nationality} • {player.age} años</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(245, 197, 24, 0.1)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
                        <Activity size={14} /> ACTIVE
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default PlayerCard;
