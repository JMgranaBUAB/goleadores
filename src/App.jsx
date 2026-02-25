import React, { useState } from 'react';
import Header from './components/Header';
import RankingTable from './components/RankingTable';
import { TOP_SCORERS } from './data/rankings';
import './styles/theme.css';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [filter, setFilter] = useState('All'); // 'All', 'Active', 'Retired'

  const filteredData = TOP_SCORERS
    .filter(p => filter === 'All' ? true : p.status === filter)
    .sort((a, b) => b.goals - a.goals)
    .slice(0, 100);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Header />

      <main>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px',
          padding: '10px'
        }}>
          {['All', 'Active', 'Retired'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                background: filter === type ? 'var(--primary)' : 'var(--glass)',
                color: filter === type ? '#000' : 'var(--text)',
                border: '1px solid var(--glass-border)',
                padding: '10px 24px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: filter === type ? '0 0 20px rgba(245, 197, 24, 0.3)' : 'none',
                transform: filter === type ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {type === 'All' ? 'TODOS' : type === 'Active' ? 'EN ACTIVO' : 'RETIRADOS'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <RankingTable data={filteredData} />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px', borderTop: '1px solid var(--glass-border)', padding: '20px' }}>
        <p>© 2026 Goleadores - Datos verificados de los máximos artilleros del fútbol mundial.</p>
      </footer>
    </div>
  );
}

export default App;
