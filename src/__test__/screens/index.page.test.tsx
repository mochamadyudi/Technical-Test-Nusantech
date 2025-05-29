import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Page from '../../views/screens'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

// setup mock store
const mockStore = configureStore([])
const store = mockStore({})

const renderWithStore = (route = '/') =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/movie/:movieId" element={<Page />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

vi.mock('react-lottie', () => ({
  default: () => <div data-testid="lottie-mock" />,
}))
vi.mock('@utils/http.util.ts', () => ({
  default: {
    getAssetTmdb: vi.fn(() => 'https://image.tmdb.org/t/p/original/test.jpg'),
  },
}))
vi.mock('@components/partials/Home/hero.section.tsx', () => ({
  default: () => <div data-testid="hero-section">Hero Section</div>,
}))
vi.mock('@partials/Home/movie-category.tab.tsx', () => ({
  default: () => <div data-testid="movie-category-tab">Movie Tab</div>,
}))

describe('[page]: HOME', () => {
  beforeEach(() => {
    // pastikan scrollY di-reset dan scrollTo tidak error
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 9999,
    })
    window.scrollTo = vi.fn()
  })

  it('should render HeroSection and MovieCategoryTab', async () => {
    renderWithStore()

    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('movie-category-tab')).toBeInTheDocument();
  })
})
