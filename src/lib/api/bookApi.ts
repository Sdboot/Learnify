import axios from 'axios';

const OPEN_LIBRARY_API = 'https://openlibrary.org/api';
const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1';

export interface OpenLibraryBook {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  isbn?: string[];
}

export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
      small: string;
      medium: string;
      large: string;
    };
    publishedDate?: string;
    pageCount?: number;
  };
}

export async function searchOpenLibrary(query: string, limit = 10): Promise<OpenLibraryBook[]> {
  try {
    const response = await axios.get(`${OPEN_LIBRARY_API}/search.json`, {
      params: {
        q: query,
        limit,
        fields: 'key,title,author_name,first_publish_year,cover_i,isbn'
      }
    });
    return response.data.docs || [];
  } catch (error) {
    console.error('Open Library API error:', error);
    return [];
  }
}

export async function searchGoogleBooks(query: string, limit = 10): Promise<GoogleBook[]> {
  try {
    const response = await axios.get(`${GOOGLE_BOOKS_API}/volumes`, {
      params: {
        q: query,
        maxResults: limit,
        key: 'AIzaSyDOccccccccccccccccccccccccccccccc' // Placeholder key
      }
    });
    return response.data.items || [];
  } catch (error) {
    console.error('Google Books API error:', error);
    return [];
  }
}

export function getOpenLibraryCoverUrl(coverId: number, size = 'M'): string {
  return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
}

export function getGoogleBooksCoverUrl(imageLink: string): string {
  return imageLink;
}
