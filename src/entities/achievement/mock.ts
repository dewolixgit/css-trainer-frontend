import { AchievementId } from './client';
import { ApiAchievementStatusType } from './server';

export const MOCK_ACHIEVEMENTS_API_DATA_MAP: Record<AchievementId, ApiAchievementStatusType> = {
  [1]: {
    data: {
      id: 1,
      name: 'Mock Achievement 1',
      description: 'This is a mock achievement. This is a mock achievement',
    },
    completed: true,
  },
  [2]: {
    data: {
      id: 2,
      name: 'Mock Achievement 2',
      description: 'This is another mock achievement',
    },
    completed: true,
  },
  [3]: {
    data: {
      id: 3,
      name: 'Mock Achievement 3',
      description: 'This is a mock achievement. This is a mock achievement',
    },
    completed: true,
  },
  [4]: {
    data: {
      id: 4,
      name: 'Mock Achievement 4',
      description: 'This is another mock achievement',
    },
    completed: true,
  },
  [5]: {
    data: {
      id: 5,
      name: 'Mock Achievement 5',
      description: 'This is a mock achievement. This is a mock achievement',
    },
    completed: true,
  },
  [6]: {
    data: {
      id: 6,
      name: 'Mock Achievement 6',
      description: 'This is another mock achievement',
    },
    completed: false,
  },
  [7]: {
    data: {
      id: 7,
      name: 'Mock Achievement 7',
      description: 'This is a mock achievement. This is a mock achievement',
    },
    completed: true,
  },
  [8]: {
    data: {
      id: 8,
      name: 'Mock Achievement 8',
      description: 'This is another mock achievement',
    },
    completed: false,
  },
  [9]: {
    data: {
      id: 9,
      name: 'Mock Achievement 9',
      description: 'This is a mock achievement. This is a mock achievement',
    },
    completed: true,
  },
  [10]: {
    data: {
      id: 10,
      name: 'Mock Achievement 10',
      description: 'This is another mock achievement',
    },
    completed: false,
  },
  [11]: {
    data: {
      id: 11,
      name: 'Mock Achievement 11',
      description: 'This is a mock achievement. This is a mock achievement',
    },
    completed: true,
  },
  [12]: {
    data: {
      id: 12,
      name: 'Mock Achievement 12',
      description: 'This is another mock achievement',
    },
    completed: false,
  },
  [13]: {
    data: {
      id: 13,
      name: 'Mock Achievement 13',
      description: 'This is a mock achievement. This is a mock achievement',
    },
    completed: false,
  },
  [14]: {
    data: {
      id: 14,
      name: 'Mock Achievement 14',
      description: 'This is another mock achievement',
    },
    completed: false,
  },
  [15]: {
    data: {
      id: 15,
      name: 'Mock Achievement 15',
      description:
        'This is a mock achievement. . This is a mock achievementThis is a mock achievement',
    },
    completed: false,
  },
  [16]: {
    data: {
      id: 16,
      name: 'Mock Achievement 16',
      description: 'This is another mock achievement. This is another mock achievement',
    },
    completed: false,
  },
  [17]: {
    data: {
      id: 17,
      name: 'Mock Achievement 17',
      description:
        'This is a mock achievement. . This is a mock achievementThis is a mock achievement',
    },
    completed: false,
  },
  [18]: {
    data: {
      id: 18,
      name: 'Mock Achievement 18',
      description: 'This is another mock achievement. This is another mock achievement',
    },
    completed: false,
  },
};

export const MOCK_ACHIEVEMENTS_API_DATA_LIST = [
  MOCK_ACHIEVEMENTS_API_DATA_MAP[1],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[2],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[3],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[4],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[5],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[6],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[7],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[8],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[9],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[10],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[11],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[12],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[13],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[14],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[15],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[16],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[17],
  MOCK_ACHIEVEMENTS_API_DATA_MAP[18],
];
