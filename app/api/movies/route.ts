import { type NextRequest, NextResponse } from 'next/server';
import type { GetMoviesResponse } from './route.types';
import { fetchMovies, getMoviesUrl } from './route.utils';
import { getCurrentYear } from '@/app/utils';
import { DEFAULT_ERROR_MESSAGE } from './route.constants';

/**
 * Fetches the top movies based on query and release year.
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<GetMoviesResponse>} The response containing the top movies or an error.
 */
export async function GET(request: NextRequest): Promise<GetMoviesResponse> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const releaseYear = searchParams.get('release_year') || String(getCurrentYear());
    const query = searchParams.get('query');

    const moviesUrl = getMoviesUrl(query, releaseYear);
    const movies = await fetchMovies(moviesUrl);

    return NextResponse.json({ data: movies });
  } catch (error) {
    return NextResponse.json({ error: DEFAULT_ERROR_MESSAGE }, { status: 500 });
  }
}
