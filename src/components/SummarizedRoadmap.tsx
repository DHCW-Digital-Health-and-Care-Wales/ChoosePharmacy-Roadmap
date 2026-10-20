/**
 * Summarized Roadmap Component
 * Displays the roadmap in a 3-column layout suitable for presentations and single-slide views.
 * Optimized for PowerPoint export and projection.
 */

import React from 'react';
import { summarizedRoadmap } from '@/data/roadmap-summary';
import styles from './SummarizedRoadmap.module.css';

export const SummarizedRoadmap: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Choose Pharmacy Roadmap</h1>
        <p className={styles.subtitle}>Strategic Priorities Overview</p>
      </header>

      <div className={styles.columnsGrid}>
        {summarizedRoadmap.horizons.map((horizon) => (
          <div key={horizon.id} className={styles.column}>
            <div className={`${styles.columnHeader} ${styles[`column-${horizon.id}`]}`}>
              <h2>{horizon.label.en}</h2>
            </div>

            <div className={styles.itemsList}>
              {horizon.items.map((item, index) => (
                <div key={`${horizon.id}-${index}`} className={styles.item}>
                  <h3 className={styles.itemTitle}>{item.title.en}</h3>
                  <p className={styles.itemSummary}>{item.summary.en}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>Updated September 2026 • Choose Pharmacy Team, DHCW</p>
      </footer>
    </div>
  );
};

export default SummarizedRoadmap;
