import { createProgressStore } from '../sprouts-engine';

const progressStore = createProgressStore({
  storageKey: 'reading_sprouts_progress',
  modes: ['phonics', 'sight', 'story']
});

export const { loadProgress, saveProgress, recordAnswer, recordSessionStart, recordSessionEnd } = progressStore;
