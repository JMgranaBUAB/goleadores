import React from 'react';
import Header from './components/Header';
import RankingTable from './components/RankingTable';
import { TOP_SCORERS } from './data/rankings';
import './styles/theme.css';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Header />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key="ranking"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <RankingTable data={TOP_SCORERS} />
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
