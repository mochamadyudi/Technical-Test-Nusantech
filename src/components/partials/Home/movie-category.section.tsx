import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ITmdbState} from "@state/reducers/tmdb.ts";

import {TMDBParams} from "../../../services/interfaces/tmdb-service.interface.ts";
import {ActionRedux} from "@/types/global";
import {Empty} from "antd";
import CardMovie from "@components/atoms/generals/card.movie.tsx";
import LottiesMolecul from "@components/molecul/lotties.molecul.tsx";
import Animation from '@/assets/lotties/loading-spinner-dots.json';
export interface IMovieByCategoryProps {
  page?: number;
  stateKey: 'popular' | 'now_playing' | 'top_rated' | 'up_coming' | 'trends';
  actions: ((payload: Pick<TMDBParams, 'region' | 'language' | 'page'>) => ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>) |
    ((payload: { timeWindow: 'day' | 'week', language: TMDBParams['language'] }) => ActionRedux<{
      timeWindow: 'day' | 'week',
      language: TMDBParams['language']
    }>)
}

const MovieByCategory: React.FC<IMovieByCategoryProps> = ({actions, stateKey, ...props}) => {
  const dispatch = useDispatch();
  const tmdb = useSelector<any, ITmdbState>((state) => state.tmdb);

  const [params, _] = useState<{ page: number }>(() => {
    return {
      page: props?.page ?? 1,
    }
  });

  useEffect(() => {
    if (stateKey === 'trends') {
      dispatch(actions({
        timeWindow: 'day',
        language: tmdb.languages.current?.iso_639_1 ?? 'en-US'
      }));
    } else {
      dispatch(actions({
        timeWindow: 'day',
        region: 'id',
        page: params.page,
        language: tmdb.languages.current?.iso_639_1 ?? 'en-US'
      }));
    }

  }, [tmdb.languages.current, params]);

  if (typeof (tmdb.movies[stateKey]) == 'undefined') {
    return null;
  }

  const states = tmdb.movies[stateKey];
  return (
    <div className="relative w-full h-full flex flex-col">
      {
        states.loading && (
          <div className="absolute top-0 left-0 h-full z-[2] w-full bg-black bg-opacity-30">
            <LottiesMolecul
              animation={Animation}
              width={200}
            />
          </div>
        )
      }
      <div className="relative z-[1]">
        {
          Array.isArray(states.data) &&
          states.data.length > 0 ?
            <React.Fragment>
              <div className="grid grid-cols-5 gap-4">
                {
                  states.data.map((item) => {
                    return (
                      <React.Fragment>
                        <CardMovie
                          testId={`movie-category-${stateKey}`}
                          key={`movie-category-${stateKey}-${item.id}`}
                          type="card-post"
                          className="col-span-1"
                          data={item}
                          ratings
                        />
                      </React.Fragment>
                    )
                  })
                }
              </div>
            </React.Fragment>
            : !states.loading && (
            <div className="w-full">
              <Empty/>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default MovieByCategory;
