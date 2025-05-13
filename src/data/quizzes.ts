import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'q1',
    title: 'The Ultimate Space Quiz',
    description: 'Test your knowledge about our solar system and beyond',
    categoryId: 'science',
    difficulty: 'medium',
    timeLimit: 10,
    questions: [
      {
        id: 'q1-1',
        text: 'Which planet has the most moons?',
        options: [
          { id: 'q1-1-a', text: 'Jupiter' },
          { id: 'q1-1-b', text: 'Saturn' },
          { id: 'q1-1-c', text: 'Uranus' },
          { id: 'q1-1-d', text: 'Neptune' }
        ],
        correctOptionId: 'q1-1-b',
        explanation: 'Saturn has 82 confirmed moons, while Jupiter has 79.'
      },
      {
        id: 'q1-2',
        text: 'How long does it take for light from the Sun to reach Earth?',
        options: [
          { id: 'q1-2-a', text: '8 minutes' },
          { id: 'q1-2-b', text: '8 hours' },
          { id: 'q1-2-c', text: '8 seconds' },
          { id: 'q1-2-d', text: '8 days' }
        ],
        correctOptionId: 'q1-2-a'
      },
      {
        id: 'q1-3',
        text: 'What is the hottest planet in our solar system?',
        options: [
          { id: 'q1-3-a', text: 'Mercury' },
          { id: 'q1-3-b', text: 'Venus' },
          { id: 'q1-3-c', text: 'Mars' },
          { id: 'q1-3-d', text: 'Jupiter' }
        ],
        correctOptionId: 'q1-3-b',
        explanation: 'Venus is the hottest planet, with surface temperatures around 900°F (475°C).'
      },
    ],
    createdAt: '2023-09-15',
    createdBy: 'Astronomy Enthusiast',
    featured: true,
    tags: ['space', 'astronomy', 'planets'],
    timesPlayed: 1245,
    averageScore: 68,
    thumbnailUrl: 'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'q2',
    title: 'Modern Web Development',
    description: 'Test your knowledge about React, JavaScript, and modern web technologies',
    categoryId: 'technology',
    difficulty: 'hard',
    timeLimit: 15,
    questions: [
      {
        id: 'q2-1',
        text: 'Which hook is used for side effects in React?',
        options: [
          { id: 'q2-1-a', text: 'useState' },
          { id: 'q2-1-b', text: 'useEffect' },
          { id: 'q2-1-c', text: 'useContext' },
          { id: 'q2-1-d', text: 'useReducer' }
        ],
        correctOptionId: 'q2-1-b'
      },
      {
        id: 'q2-2',
        text: 'What does CSS stand for?',
        options: [
          { id: 'q2-2-a', text: 'Creative Style Sheets' },
          { id: 'q2-2-b', text: 'Cascading Style Sheets' },
          { id: 'q2-2-c', text: 'Computer Style Sheets' },
          { id: 'q2-2-d', text: 'Colorful Style Sheets' }
        ],
        correctOptionId: 'q2-2-b'
      },
    ],
    createdAt: '2023-10-05',
    createdBy: 'Tech Guru',
    featured: true,
    tags: ['web development', 'react', 'javascript'],
    timesPlayed: 987,
    averageScore: 72,
    thumbnailUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'q3',
    title: 'Ancient Rome Quiz',
    description: 'Journey back to the times of gladiators, emperors, and the Roman Republic',
    categoryId: 'history',
    difficulty: 'medium',
    timeLimit: 10,
    questions: [
      {
        id: 'q3-1',
        text: 'Who was the first Emperor of Rome?',
        options: [
          { id: 'q3-1-a', text: 'Julius Caesar' },
          { id: 'q3-1-b', text: 'Augustus' },
          { id: 'q3-1-c', text: 'Nero' },
          { id: 'q3-1-d', text: 'Constantine' }
        ],
        correctOptionId: 'q3-1-b'
      },
      {
        id: 'q3-2',
        text: 'What year did the Western Roman Empire fall?',
        options: [
          { id: 'q3-2-a', text: '312 CE' },
          { id: 'q3-2-b', text: '476 CE' },
          { id: 'q3-2-c', text: '509 BCE' },
          { id: 'q3-2-d', text: '1453 CE' }
        ],
        correctOptionId: 'q3-2-b'
      },
    ],
    createdAt: '2023-07-22',
    createdBy: 'History Buff',
    featured: false,
    tags: ['rome', 'ancient history', 'emperors'],
    timesPlayed: 756,
    averageScore: 65,
    thumbnailUrl: 'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'q4',
    title: 'World Capitals Challenge',
    description: 'Test your knowledge of capital cities around the globe',
    categoryId: 'geography',
    difficulty: 'easy',
    timeLimit: 5,
    questions: [
      {
        id: 'q4-1',
        text: 'What is the capital of Australia?',
        options: [
          { id: 'q4-1-a', text: 'Sydney' },
          { id: 'q4-1-b', text: 'Melbourne' },
          { id: 'q4-1-c', text: 'Canberra' },
          { id: 'q4-1-d', text: 'Brisbane' }
        ],
        correctOptionId: 'q4-1-c'
      },
    ],
    createdAt: '2023-11-12',
    createdBy: 'Geography Teacher',
    featured: false,
    tags: ['capitals', 'cities', 'geography'],
    timesPlayed: 1532,
    averageScore: 82,
    thumbnailUrl: 'https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'q5',
    title: 'Literary Masterpieces',
    description: 'How well do you know classic literature?',
    categoryId: 'arts',
    difficulty: 'hard',
    timeLimit: 12,
    questions: [],
    createdAt: '2023-06-08',
    createdBy: 'Book Lover',
    featured: true,
    tags: ['literature', 'classics', 'books'],
    timesPlayed: 623,
    averageScore: 59,
    thumbnailUrl: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'q6',
    title: 'Football World Cup Trivia',
    description: 'Test your knowledge about the biggest football tournament',
    categoryId: 'sports',
    difficulty: 'medium',
    timeLimit: 8,
    questions: [],
    createdAt: '2023-10-28',
    createdBy: 'Sports Fan',
    featured: true,
    tags: ['football', 'world cup', 'sports'],
    timesPlayed: 1876,
    averageScore: 75,
    thumbnailUrl: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];