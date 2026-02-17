import { createParentSettingsStore } from 'sprouts-engine';

const parentSettingsStore = createParentSettingsStore({
  storageKey: 'reading_sprouts_parent_settings',
  allowedModes: ['phonics', 'sight', 'story']
});

export const {
  loadParentSettings,
  saveParentSettings,
  isThemeAllowed,
  isDifficultyAllowed,
  isModeAllowed
} = parentSettingsStore;
