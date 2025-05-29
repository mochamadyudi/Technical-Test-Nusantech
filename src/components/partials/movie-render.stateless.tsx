import React from 'react'
import { ITmdbDefaultStateKey, TmdbMovieItem } from '@state/reducers/tmdb.ts'
import LottiesMolecul from '@components/molecul/lotties.molecul.tsx'
import Animation from '@/assets/lotties/loading-spinner-dots.json'
import CardMovie from '@components/atoms/generals/card.movie.tsx'
import { Col, Empty, Row } from 'antd'

interface MovieRenderStatelessProps<T = TmdbMovieItem> {
  state: ITmdbDefaultStateKey<T>
}

const MovieRenderStateless: React.FC<MovieRenderStatelessProps> = ({
  state,
}) => {
  return (
    <React.Fragment>
      <div className="relative w-full h-full flex flex-col">
        {state?.loading && (
          <div className="absolute top-0 left-0 h-full z-[2] w-full bg-black bg-opacity-30">
            <LottiesMolecul animation={Animation} width={200} />
          </div>
        )}
        <div className="relative z-[1]">
          {Array.isArray(state?.data) && state?.data.length > 0 ? (
            <React.Fragment>
              <Row gutter={[24, 24]}>
                {state?.data.map((item) => {
                  return (
                    <React.Fragment>
                      <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                        <CardMovie
                          testId={`movie-render-state-less`}
                          key={`movie-category-${item.id}`}
                          type="card-post"
                          className="col-span-1"
                          data={item}
                          ratings
                        />
                      </Col>
                    </React.Fragment>
                  )
                })}
              </Row>
            </React.Fragment>
          ) : (
            !state?.loading && (
              <div className="w-full">
                <Empty />
              </div>
            )
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default MovieRenderStateless
