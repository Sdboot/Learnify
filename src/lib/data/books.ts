export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  category: string;
  subject: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  pages: number;
  publishYear: number;
  isbn: string;
  rating: number;
  reviews: number;
}

export const dummyBooks: Book[] = [
  {
    id: 'book-001',
    title: 'The Adventure of Lost Kingdom',
    author: 'Sarah Johnson',
    description: 'Join Max on an epic adventure through a mysterious lost kingdom filled with magical creatures and ancient treasures.',
    coverUrl: '/adventure.jpg',
    category: 'Adventure',
    subject: 'Fantasy',
    level: 'intermediate',
    pages: 245,
    publishYear: 2022,
    isbn: '978-0-123456-01-1',
    rating: 4.8,
    reviews: 342
  },
  {
    id: 'book-002',
    title: 'Space Explorer Academy',
    author: 'Dr. Michael Chen',
    description: 'An exciting journey through the solar system learning about planets, stars, and the mysteries of outer space.',
    coverUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e3ffe02?w=400&h=600&fit=crop',
    category: 'Science',
    subject: 'Astronomy',
    level: 'beginner',
    pages: 180,
    publishYear: 2023,
    isbn: '978-0-123456-02-1',
    rating: 4.9,
    reviews: 521
  },
  {
    id: 'book-003',
    title: 'The Magical Rainbow Garden',
    author: 'Emily Roberts',
    description: 'A colorful tale about a girl who discovers a secret garden where flowers sing and animals dance.',
    coverUrl: 'https://images.unsplash.com/photo-1543959438-a75a89d5e936?w=400&h=600&fit=crop',
    category: 'Fantasy',
    subject: 'Magic',
    level: 'beginner',
    pages: 156,
    publishYear: 2021,
    isbn: '978-0-123456-03-1',
    rating: 4.7,
    reviews: 287
  },
  {
    id: 'book-004',
    title: 'Mystery of the Hidden Code',
    author: 'James Wilson',
    description: 'A thrilling mystery where young detectives must crack an ancient code to save their town from danger.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    category: 'Mystery',
    subject: 'Detective',
    level: 'intermediate',
    pages: 298,
    publishYear: 2023,
    isbn: '978-0-123456-04-1',
    rating: 4.6,
    reviews: 198
  },
  {
    id: 'book-005',
    title: 'The Last Dragon of Mountains',
    author: 'David Liu',
    description: 'Follow a brave young knight as she befriends a misunderstood dragon and saves the kingdom together.',
    coverUrl: '/adventure.jpg',
    category: 'Adventure',
    subject: 'Fantasy',
    level: 'intermediate',
    pages: 267,
    publishYear: 2022,
    isbn: '978-0-123456-05-1',
    rating: 4.9,
    reviews: 456
  },
  {
    id: 'book-006',
    title: 'Ocean\'s Deepest Secrets',
    author: 'Dr. Lisa Anderson',
    description: 'Dive deep into the ocean to discover amazing creatures and learn about marine biology in this underwater adventure.',
    coverUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop',
    category: 'Science',
    subject: 'Marine Life',
    level: 'beginner',
    pages: 192,
    publishYear: 2023,
    isbn: '978-0-123456-06-1',
    rating: 4.8,
    reviews: 389
  },
  {
    id: 'book-007',
    title: 'The Time Traveler\'s Quest',
    author: 'Sophie Martin',
    description: 'Travel through different time periods and help historical figures solve important problems in this exciting adventure.',
    coverUrl: '/adventure.jpg',
    category: 'Adventure',
    subject: 'History',
    level: 'advanced',
    pages: 345,
    publishYear: 2023,
    isbn: '978-0-123456-07-1',
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'book-008',
    title: 'Jungle Survival Guide',
    author: 'Alex Thompson',
    description: 'Learn survival skills and jungle facts while following a group of friends lost in the Amazon rainforest.',
    coverUrl: '/adventure.jpg',
    category: 'Adventure',
    subject: 'Nature',
    level: 'intermediate',
    pages: 218,
    publishYear: 2022,
    isbn: '978-0-123456-08-1',
    rating: 4.5,
    reviews: 167
  },
  {
    id: 'book-009',
    title: 'Code & Robotics for Kids',
    author: 'Dr. Mark Johnson',
    description: 'An fun introduction to coding and robotics concepts through exciting game-like challenges and projects.',
    coverUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=600&fit=crop',
    category: 'Technology',
    subject: 'Coding',
    level: 'beginner',
    pages: 176,
    publishYear: 2023,
    isbn: '978-0-123456-09-1',
    rating: 4.9,
    reviews: 512
  },
  {
    id: 'book-010',
    title: 'Princess of the Cloud Kingdom',
    author: 'Bella Crown',
    description: 'A charming tale of a princess who must protect her floating kingdom from darkness with the help of magical creatures.',
    coverUrl: 'https://images.unsplash.com/photo-1507842994249-a96faacf529e?w=400&h=600&fit=crop',
    category: 'Fantasy',
    subject: 'Magic',
    level: 'beginner',
    pages: 201,
    publishYear: 2021,
    isbn: '978-0-123456-10-1',
    rating: 4.8,
    reviews: 301
  },
  {
    id: 'book-011',
    title: 'Ancient Civilizations Unveiled',
    author: 'Prof. Robert Shaw',
    description: 'Discover the secrets of ancient Egypt, Rome, and Greece through interactive storytelling and historical adventures.',
    coverUrl: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff86?w=400&h=600&fit=crop',
    category: 'History',
    subject: 'Ancient History',
    level: 'advanced',
    pages: 412,
    publishYear: 2023,
    isbn: '978-0-123456-11-1',
    rating: 4.6,
    reviews: 278
  },
  {
    id: 'book-012',
    title: 'The Invisible Detective',
    author: 'Nancy Cooper',
    description: 'A young detective with special powers must solve supernatural mysteries in her small hometown.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    category: 'Mystery',
    subject: 'Supernatural',
    level: 'intermediate',
    pages: 276,
    publishYear: 2022,
    isbn: '978-0-123456-12-1',
    rating: 4.7,
    reviews: 213
  }
];

export const categories = ['Adventure', 'Fantasy', 'Science', 'Mystery', 'History', 'Technology'];
export const subjects = ['Fantasy', 'Astronomy', 'Magic', 'Detective', 'Marine Life', 'History', 'Nature', 'Coding', 'Supernatural', 'Ancient History'];
export const levels = ['beginner', 'intermediate', 'advanced'];
