import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Provider } from 'react-redux'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import Page from '../../views/screens/movies/show.page';
import { formatNumberShort } from '@utils/index.ts';

vi.mock('react-lottie', () => ({
  default: () => <div data-testid="lottie-mock" />,
}))
vi.mock('@utils/http.util.ts', () => ({
  default: {
    getAssetTmdb: vi.fn(() => 'https://image.tmdb.org/t/p/original/test.jpg'),
  },
}))

const mockStore = configureStore([])

const renderWithStore = (store: any, route = '/movie/18032') =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/movie/:movieId" element={<Page />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  )

describe('Movie Show Page', () => {

  it('[state]: renders loading state', () => {
    const store = mockStore({
      tmdb: {
        languages: { current: { iso_639_1: 'en-US' } },
        movies: { show: { loading: true, data: null } },
      },
    })

    renderWithStore(store)
    expect(screen.getByTestId('lottie-mock')).toBeInTheDocument()
  });

  it('[hero-section]: should display title, tagline,  release date', () => {
    const store = mockStore({
      tmdb: {
        languages: {
          current: { iso_639_1: 'en-US' },
        },
        movies: {
          show: {
            loading: false,
            data: {
              title: 'Inception',
              overview: 'A thief who steals corporate secrets...',
              tagline: 'Your mind is the scene of the crime.',
              vote_average: 8.5,
              popularity: 400000,
              backdrop_path: '/test.jpg',
              status: 'Released',
              release_date: '2010-07-16',
            }
          }
        }
      }
    });
    renderWithStore(store);

    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText(/corporate secrets/i)).toBeInTheDocument()
    expect(screen.getByText(/scene of the crime/i)).toBeInTheDocument()
    expect(screen.getByText('Release 16 July, 2010')).toBeInTheDocument()
  });

  it('[hero-section]: should display correct rating based on vote_average', () => {
    const vote = 7.6
    const store = mockStore({
      tmdb: {
        languages: { current: { iso_639_1: 'en-US' } },
        movies: {
          show: {
            loading: false,
            data: {
              title: 'Test Movie',
              vote_average: vote,
              popularity: 5000,
              backdrop_path: null,
              status: 'Released',
              release_date: '2020-01-01',
            },
          },
        },
      },
    })

    const { container } = renderWithStore(store)
    const stars = container.querySelectorAll('.ant-rate-star-full, .ant-rate-star-half')
    expect(stars.length).toBeGreaterThan(0);
  })

  it('[hero-section]: Should render backdrop image with correct URL', () => {
    const store = mockStore({
      tmdb: {
        languages: {
          current: {
            iso_639_1: 'en-US',
          }
        },
        movies: {
          show: {
            loading: false,
            data: {
              title: 'Movie with Backdrop',
              vote_average: 8.5,
              popularity: 1000,
              backdrop_path: '/test.jpg',
              status: 'Released',
              release_date: '2022-01-01',
            }
          }
        }
      }
    });

    renderWithStore(store);

    const image = screen.getByAltText('backdrop-image') as HTMLImageElement;
    expect(image.src).toBe('https://image.tmdb.org/t/p/original/test.jpg');
  });

  it('[hero-section]: should render popularity with correct formatted number', () => {
    const popularity = 123456
    const store = mockStore({
      tmdb: {
        languages: { current: { iso_639_1: 'en-US' } },
        movies: {
          show: {
            loading: false,
            data: {
              title: 'Popular Movie',
              vote_average: 8,
              popularity: popularity,
              backdrop_path: null,
              status: 'Released',
              release_date: '2021-06-01',
            },
          },
        },
      },
    });

    renderWithStore(store);

    expect(screen.getByText(formatNumberShort(popularity))).toBeInTheDocument();
  });


})
