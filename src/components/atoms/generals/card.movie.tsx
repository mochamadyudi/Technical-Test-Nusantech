import React from 'react'
import HttpUtil from '../../../utils/http.util.ts'
import { TmdbMovieItem } from '@state/reducers/tmdb.ts'
import { Classes, formatNumberShort } from '../../../utils'
import { Typography } from 'antd'
import dayjs from 'dayjs'
import { Icons } from '@components/atoms/Icons.tsx'
import { Link } from 'react-router-dom'

type CardCommonProps = {
  className?: string
  classNames?: {
    root?: string
    content?: string
  }
  style?: React.CSSProperties
  testId?: string
}

type CardPost<T = TmdbMovieItem | any> = {
  type: 'card-post'
  ratings?: boolean
  data: T
} & CardCommonProps
type CardImageProps<T = TmdbMovieItem | any> = {
  type: 'card-image'
  data: T
} & CardCommonProps

type ICardMovieProps = CardPost<TmdbMovieItem> | CardImageProps<TmdbMovieItem>

const CardMovie: React.FC<ICardMovieProps> = ({ data, type, ...props }) => {
  return (
    <React.Fragment>
      <Link to={`/movies/${data.id}`} style={{ cursor: 'pointer !important'}}>
        <div
          data-testid={props?.testId ?? `movie-${type}`}
          className={Classes('w-full flex flex-col', props?.classNames?.root)}
          style={props?.style ?? {}}
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={
                HttpUtil.getAssetTmdb(data?.poster_path, {
                  width: 150,
                  height: 150,
                  platform: 'bestv2',
                }) ?? ''
              }
              alt={`movie_poster`}
              className={Classes(
                'w-full h-full object-cover relative select-none',
                props?.className
              )}
              srcSet={[
                HttpUtil.getAssetTmdb(data?.poster_path, 'original'),
              ].join('')}
              loading="lazy"
            />
          </div>
          {type === 'card-post' && (
            <div
              className={Classes(
                'w-full pb-4 flex flex-col h-auto',
                props?.classNames?.content
              )}
            >
              <div className="h-10 pt-2">
                <Typography className="truncate text-lg text-white !font-bold !font-pro-bold">
                  {data.title}
                </Typography>
              </div>
              <div className="flex items-center justify-between">
                <Typography>
                  {dayjs(data.release_date, 'YYYY-MM-DD').year()}
                </Typography>
                <div className="flex items-center gap-2">
                  {data?.popularity && !isNaN(data?.popularity) && (
                    <span className="flex items-center gap-1">
                      <Icons type={'HeartFilled'} className="text-rose-500" />
                      <Typography>
                        {formatNumberShort(data.popularity)}
                      </Typography>
                    </span>
                  )}
                  {data?.vote_average && !isNaN(data?.vote_average) && (
                    <span className="flex items-center gap-1">
                      <Icons type={'StarFilled'} className="text-amber-400" />
                      <Typography>{data.vote_average.toFixed(1)}</Typography>
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </React.Fragment>
  )
}

export default CardMovie
