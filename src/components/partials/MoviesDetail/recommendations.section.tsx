import React from 'react'
import TheContainer from '@components/layouts/TheContainer.tsx'
import { Typography } from 'antd'
import MovieRenderStateless from '@partials/movie-render.stateless.tsx'
import { useSelector } from 'react-redux'
import { ITmdbState } from '@state/reducers/tmdb.ts'

const RecommendationsSection: React.FC = () => {
  const state = useSelector<
    any,
    ITmdbState['movies']['show']['recommendations']
  >((state: any) => {
    return state.tmdb.movies.show.recommendations
  }) as ITmdbState['movies']['show']['recommendations']

  return (
    <React.Fragment>
      <TheContainer className="py-10 space-y-20">
        <Typography.Title level={2} className="!text-4xl">
          Recommendations
        </Typography.Title>
        <MovieRenderStateless state={state} />
      </TheContainer>
    </React.Fragment>
  )
}

export default RecommendationsSection
