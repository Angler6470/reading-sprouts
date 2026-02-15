// src/content/reading.js
export const pack = {
  id: 'reading',
  title: 'Reading Sprouts',
  modes: [
    { key: 'words', label: 'Theme Words' },
    { key: 'sightwords', label: 'Sight Words' },
    { key: 'stories', label: 'Stories' }
  ],
  themes: ['garden', 'ocean', 'space'],
  difficulties: ['beginner', 'intermediate', 'advanced'],

  banks: {
    words: {
      garden: {
        beginner: ['bud', 'leaf', 'seed', 'bee', 'root', 'pot', 'soil', 'sprout'],
        intermediate: ['garden', 'flower', 'butterfly', 'watering', 'pumpkin', 'petal'],
        advanced: ['photosynthesis', 'pollination', 'germinate', 'transplant', 'compost']
      },
      ocean: {
        beginner: ['fish', 'wave', 'sand', 'reef', 'crab', 'seal', 'oar', 'shell'],
        intermediate: ['octopus', 'seahorse', 'turtle', 'dolphin', 'coral', 'current'],
        advanced: ['bioluminescent', 'ecosystem', 'plankton', 'migration', 'pressure']
      },
      space: {
        beginner: ['star', 'moon', 'rock', 'ship', 'mars', 'ring', 'orbit', 'cosy'],
        intermediate: ['rocket', 'planet', 'galaxy', 'comet', 'asteroid', 'orbiting'],
        advanced: ['constellation', 'atmosphere', 'gravity', 'telescope', 'astronaut']
      }
    },

    sightwords: {
      beginner: [
        { word: 'the', distractors: ['and', 'that', 'this'] },
        { word: 'and', distractors: ['but', 'for', 'the'] },
        { word: 'to', distractors: ['at', 'it', 'as'] },
        { word: 'a', distractors: ['an', 'is', 'as'] },
        { word: 'I', distractors: ['it', 'in', 'is'] },
        { word: 'you', distractors: ['your', 'our', 'out'] },
        { word: 'we', distractors: ['me', 'he', 'be'] },
        { word: 'see', distractors: ['she', 'be', 'me'] }
      ],
      intermediate: [
        { word: 'said', distractors: ['say', 'sail', 'sad'] },
        { word: 'come', distractors: ['some', 'home', 'game'] },
        { word: 'here', distractors: ['hear', 'her', 'were'] },
        { word: 'what', distractors: ['that', 'want', 'when'] },
        { word: 'when', distractors: ['where', 'then', 'what'] },
        { word: 'they', distractors: ['them', 'then', 'that'] },
        { word: 'were', distractors: ['where', 'wear', 'we'] },
        { word: 'from', distractors: ['form', 'for', 'from'] }
      ],
      advanced: [
        { word: 'through', distractors: ['though', 'thought', 'throw'] },
        { word: 'thought', distractors: ['through', 'threw', 'taught'] },
        { word: 'enough', distractors: ['tough', 'though', 'dough'] },
        { word: 'people', distractors: ['purple', 'paper', 'pupil'] },
        { word: 'different', distractors: ['difficult', 'different', 'diffident'] },
        { word: 'another', distractors: ['other', 'mother', 'brother'] },
        { word: 'between', distractors: ['before', 'beneath', 'behind'] },
        { word: 'because', distractors: ['before', 'become', 'believe'] }
      ]
    },

    stories: {
      garden: [
        { t: 'The {__} grew from a tiny seed.', a: 'plant', d: ['rock', 'cloud'] },
        { t: 'A {__} buzzed by the flowers.', a: 'bee', d: ['train', 'moon'] },
        { t: 'We water the {__} to help them grow.', a: 'plants', d: ['stars', 'shoes'] }
      ],
      ocean: [
        { t: 'The {__} swims near the coral reef.', a: 'fish', d: ['kite', 'leaf'] },
        { t: 'A {__} pinches with its claws.', a: 'crab', d: ['book', 'star'] },
        { t: 'Big waves splash the {__}.', a: 'shore', d: ['desk', 'garden'] }
      ],
      space: [
        { t: 'The rocket blasts into {__}.', a: 'space', d: ['sand', 'puddle'] },
        { t: 'The {__} shines at night.', a: 'moon', d: ['carrot', 'fish'] },
        { t: 'A {__} orbits a planet.', a: 'satellite', d: ['mushroom', 'boot'] }
      ]
    }
  }
};

// Extract named exports for App.js
export const READING_WORDS = pack.banks.words;
export const READING_SIGHTWORDS = pack.banks.sightwords;
export const READING_STORIES = pack.banks.stories;
export const READING_MODES = pack.modes;
