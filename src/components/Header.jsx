import React from 'react';
import { Trophy } from 'lucide-react';

const Header = () => {
    return (
        <header className="glass-card" style={{ padding: '20px 40px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '4px', borderRadius: '10px' }}>
                    <img src="/favicon.png" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="title-gradient" style={{ fontSize: '32px', margin: 0, lineHeight: 1 }}>GOLEADORES</h1>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '500', marginTop: '4px', letterSpacing: '1px' }}>
                        CLASIFICACIÓN HISTÓRICA DE GOLEADORES
                    </p>
                    <p style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: '600', marginTop: '2px', opacity: 0.8 }}>
                        ÚLTIMA ACTUALIZACIÓN: 25/02/2026 - 19:44
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
