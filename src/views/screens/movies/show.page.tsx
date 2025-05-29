import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ITmdbState} from "@state/reducers/tmdb.ts";
import {useParams} from "react-router-dom";
import {GetMovieDetail} from "@state/actions/tmdb.ts";
import TheContainer from "@components/layouts/TheContainer.tsx";
import {Button, Divider, Flex, FloatButton, Input, Rate, Typography} from "antd";
import {Icons} from "@components/atoms/Icons.tsx";
import {formatNumberShort} from "@utils/index.ts";
import HttpUtil from "@utils/http.util.ts";
import CastingSection from "@partials/MoviesDetail/casting.section.tsx";
import MediaSection from "@partials/MoviesDetail/media.section.tsx";
import RecommendationsSection from "@partials/MoviesDetail/recommendations.section.tsx";

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Page: React.FC = () => {
  const param = useParams<'movieId'>();
  const dispatch = useDispatch();
  const languages = useSelector<any, ITmdbState['languages']>((state) => state.tmdb.languages);
  const state = useSelector<any, ITmdbState['movies']['show']>((state) => state.tmdb.movies.show) as ITmdbState['movies']['show'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [param]);

  useEffect(() => {
    if(param.hasOwnProperty('movieId') && param.movieId){
      if(!isNaN(parseInt(param?.movieId))){
        dispatch(GetMovieDetail({
          movieId: parseInt(param.movieId),
          params: {
            language: languages.current?.iso_639_1 ?? 'en-US'
          }
        }))
      }
    }
  }, [param, languages.current]);

  return (
    <React.Fragment>
      <div className="w-full app-content-full app-page-pt flex flex-col relative overflow-hidden">
        <section className="flex flex-col items-center pt-10 flex-1">
          <TheContainer className="z-10 space-y-20 flex flex-col flex-1">
            <div className="space-y-10 flex-1">
              <div className="w-1/4">
                <Input
                  prefix={<Icons type={'SearchOutlined'} className="text-base"/>}
                  placeholder="Search..."
                  size="large"
                  classNames={{
                    input: "placeholder:text-white !text-white !text-base"
                  }}
                  className="!bg-white bg-opacity-20 border-none"
                />
              </div>
              <Typography.Title level={1}
                                className="text-7xl">{state.loading ? 'Loading...' : state.data?.title}</Typography.Title>
              <Typography className="text-2xl">{state.data?.overview}</Typography>

              <Flex gap={10} align="center">
                {
                  state.data?.vote_average &&
                  !isNaN(state.data?.vote_average) && (
                    <React.Fragment>
                      <Rate
                        disabled
                        defaultValue={Math.floor(state.data.vote_average) / 2}
                        value={Math.floor(state.data.vote_average) / 2} tooltips={desc}
                      />
                      <Divider type="vertical"/>
                    </React.Fragment>
                  )
                }

                {
                  state.data?.popularity &&
                  !isNaN(state.data?.popularity) && (
                    <span className="flex items-center gap-1">
                      <Icons type={'HeartFilled'} className="text-rose-500"/>
                      <Typography>{formatNumberShort(state.data.popularity)}</Typography>
                    </span>
                  )
                }
              </Flex>
              <Flex gap={10}>
                <Button
                  size="large"
                  type="primary"
                  shape="round"
                  className="px-10 flex items-center text-base"
                  icon={<Icons type={'PlayCircleOutlined'} className="h-6 text-lg"/>}
                >Watching</Button>
                <Button
                  size="large"
                  type="primary"
                  ghost>Trailer</Button>
              </Flex>
            </div>
          </TheContainer>
        </section>
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[1]"/>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-[1]"/>
        <div className="absolute top-0 left-0 w-full app-content-full z-0">
          <img
            src={HttpUtil.getAssetTmdb(state.data?.backdrop_path, 'original') as string}
            alt="backdrop-image"
            loading="lazy"
            className="relative w-full h-full inset-0 object-cover brightness-[0.3]"
          />
        </div>
      </div>
      <CastingSection/>
      <MediaSection/>
      <RecommendationsSection/>
      <FloatButton.BackTop/>
    </React.Fragment>
  )
};

export default Page;
