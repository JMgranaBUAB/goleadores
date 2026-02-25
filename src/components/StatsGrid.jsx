import React from 'react';
import { Target, Shield, MapPin } from 'lucide-react';

const StatBox = ({ label, value, icon: Icon, color }) => (
    <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px' }}>
            <Icon size={16} />
            <span>{label}</span>
        </div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: color || '#fff' }}>{value}</div>
    </div>
);

const StatsGrid = ({ stats }) => {
    if (!stats) return null;

    const totalGoals = stats.statistics?.reduce((acc, s) => acc + (s.goals.total || 0), 0);
    const totalAssists = stats.statistics?.reduce((acc, s) => acc + (s.goals.assists || 0), 0);
    const totalMatches = stats.statistics?.reduce((acc, s) => acc + (s.games.appearences || 0), 0);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Target color="var(--primary)" /> Estadísticas de Carrera
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <StatBox label="Goles Totales" value={totalGoals} icon={Target} color="var(--primary)" />
                <StatBox label="Asistencias" value={totalAssists} icon={Activity} />
                <StatBox label="Partidos" value={totalMatches} icon={Shield} />
            </div>

            <div className="glass-card" style={{ padding: '24px' }}>
                <h3 style={{ marginBottom: '16px' }}>Desglose por Competición</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--glass-border)' }}>
                            <th style={{ padding: '12px 0' }}>Liga / Equipo</th>
                            <th>Pj</th>
                            <th>Goles</th>
                            <th>Asist.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.statistics?.map((s, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '16px 0' }}>
                                    <div style={{ fontWeight: '600' }}>{s.league.name}</div>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{s.team.name}</div>
                                </td>
                                <td>{s.games.appearences}</td>
                                <td style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{s.goals.total}</td>
                                <td>{s.goals.assists || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StatsGrid;
