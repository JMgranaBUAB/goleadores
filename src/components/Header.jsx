import React from 'react';
import { Trophy } from 'lucide-react';

const Header = () => {
    return (
        <header className="glass-card" style={{ padding: '20px 40px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '10px' }}>
                    <Trophy size={24} color="#000" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="title-gradient" style={{ fontSize: '32px', margin: 0, lineHeight: 1 }}>GOLEADORES</h1>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '500', marginTop: '4px', letterSpacing: '1px' }}>
                        CLASIFICACIÓN HISTÓRICA DE GOLEADORES
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
