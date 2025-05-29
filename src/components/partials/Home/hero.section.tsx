import React, {useEffect, useState} from 'react';
import {Button, Carousel, Divider, Flex, Input, Rate, Typography} from "antd";
import HttpUtil from "@utils/http.util.ts";
import {ITmdbState, TmdbMovieItem} from "@state/reducers/tmdb.ts";
import {useSelector} from "react-redux";
import {Icons} from "@components/atoms/Icons.tsx";
import CardMovie from "@components/atoms/generals/card.movie.tsx";
import TheContainer from "@components/layouts/TheContainer.tsx";
import {first, formatNumberShort} from "@utils/index.ts";
import TmdbService from "../../../services/tmdb.service.ts";

const HeroSection: React.FC = () => {
  const tmdb = useSelector<any, ITmdbState>((state) => state.tmdb)

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<TmdbMovieItem[]>([]);

  useEffect(() => {
    setLoading(true);
    if(tmdb.rehydrate){
      TmdbService.getMoviesPopular({
        region: 'id',
        language: tmdb.languages.current?.iso_639_1 ?? 'en-US',
        page: 1,
      })
        .then((response) => {
          setData(response?.data?.results ?? []);
          setLoading(false);
        })
        .catch(()=> {
          setData([])
          setLoading(false);
        })
    }
  }, [tmdb.languages.current, tmdb.rehydrate]);


  const showCase = first<TmdbMovieItem>(data as TmdbMovieItem[] ?? []);

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
                                className="text-7xl">{loading ? 'Loading...' : showCase?.title}</Typography.Title>
              <Typography className="text-2xl">{showCase?.overview}</Typography>

              <Flex gap={10} align="center">
                {
                  showCase?.vote_average &&
                  !isNaN(showCase?.vote_average) && (
                    <Rate value={Math.floor(showCase.vote_average) / 2} />
                  )
                }
                <Divider type="vertical"/>
                {
                  showCase?.popularity &&
                  !isNaN(showCase?.popularity) && (
                    <span className="flex items-center gap-1">
                      <Icons type={'HeartFilled'} className="text-rose-500"/>
                      <Typography>{formatNumberShort(showCase.popularity)}</Typography>
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
            {
              Array.isArray(data) &&
              data.length > 1 && (
                <div className="space-y-6 pb-10">
                  <Typography.Title level={2}>Populars</Typography.Title>
                  <div className="bg-white w-full bg-opacity-30 p-4 px-2 rounded-xl relative">
                    <Carousel
                      infinite
                      effect={'scrollx'}
                      centerMode={false}
                      slidesToScroll={3}
                      slidesToShow={6} autoplay draggable>
                      {
                        data.slice(1).map((item) => {
                          return (
                            <React.Fragment>
                              <CardMovie
                                className="h-72"
                                key={`movie-top-related-${item.id}`}
                                type="card-image"
                                data={item}
                              />
                            </React.Fragment>
                          )
                        })
                      }
                    </Carousel>
                  </div>
                </div>
              )
            }

          </TheContainer>
        </section>
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[1]"/>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-[1]"/>
        <div className="absolute top-0 left-0 w-full app-content-full z-0">
          <img
            src={HttpUtil.getAssetTmdb(first<TmdbMovieItem>(data as TmdbMovieItem[])?.backdrop_path, 'original') as string}
            alt="backdrop-image"
            loading="lazy"
            className="relative w-full h-full inset-0 object-cover brightness-[0.3]"
          />
        </div>
      </div>
    </React.Fragment>
  )
};

export default HeroSection;
