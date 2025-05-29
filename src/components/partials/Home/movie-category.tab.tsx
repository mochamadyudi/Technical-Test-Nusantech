import React, {useState} from 'react';
import TheContainer from "@components/layouts/TheContainer.tsx";
import {Button} from "antd";
import MovieByCategory, {IMovieByCategoryProps} from "@partials/Home/movie-category.section.tsx";
import {
  GetMovieNowPlaying,
  GetMoviePopular,
  GetMovieTopRated,
  GetMovieTrend,
  GetMovieUpComing
} from "@state/actions/tmdb.ts";
import {Icons} from "@components/atoms/Icons.tsx";

type ItemMenuAttribute = {
  key: 'trends' | 'popular' | 'now-playing' | 'top-rated' | 'up-coming';
  label: string;
  icon: string;
  options: IMovieByCategoryProps,
}
const MovieCategoryTab: React.FC = () => {
  const items: ItemMenuAttribute[] = [
    {
      key: 'trends',
      label: "Trending",
      icon: "RiseOutlined",
      options: {
        stateKey: "trends",
        actions: GetMovieTrend,
      }
    },
    {
      key: 'popular',
      label: "Popular",
      icon: "FireFilled",
      options: {
        stateKey: "popular",
        page: 2,
        actions: GetMoviePopular,
      }
    },
    {
      key: 'now-playing',
      label: "Now Playing",
      icon: "AimOutlined",
      options: {
        stateKey: "now_playing",
        actions: GetMovieNowPlaying,
      }
    },
    {
      key: 'top-rated',
      label: "Top Rated",
      icon: "StarFilled",
      options: {
        stateKey: "top_rated",
        actions: GetMovieTopRated,
      }
    },
    {
      key: 'up-coming',
      label: "Up Coming",
      icon: "FieldTimeOutlined",
      options: {
        stateKey: "up_coming",
        actions: GetMovieUpComing,
      }
    },
  ]
  const [ activeKey, setActiveKey ] = useState<ItemMenuAttribute['key']>("trends");
  return (
    <React.Fragment>
      <TheContainer
        key="movie-category-tab"
        sectionId="movie-category"
        className="py-10 space-y-20"
        testId="movie-category-tab"
      >
        <div className="flex items-center justify-center gap-4">
          {items.map((item) => {
            return (
              <Button
                onClick={()=> setActiveKey(item.key)}
                key={item.key}
                type={item.key === activeKey ? "primary": 'default'}
                shape={'round'}
                size={'large'}
                icon={<Icons type={item.icon}/>}
              >{item.label}</Button>
            )
          })}
        </div>
        {
          items
            .filter((item) => item.key === activeKey)
            .map((item)=> {
              return (
                <MovieByCategory
                  key={`movie-category-${item.options.stateKey}`}
                  stateKey={item.options.stateKey}
                  page={item.options?.page ?? 1}
                  actions={item.options.actions}
                />
              )
            })
        }
      </TheContainer>
    </React.Fragment>
  )
};

export default MovieCategoryTab;
