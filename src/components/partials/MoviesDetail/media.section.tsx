import React from 'react';
import { Col, Empty, Image, Row, Spin, Tabs, Typography } from 'antd'
import TheContainer from "@components/layouts/TheContainer.tsx";
import {useSelector} from "react-redux";
import {ITmdbState} from "@state/reducers/tmdb.ts";
import HttpUtil from "@utils/http.util.ts";
import {Classes} from "@utils/index.ts";
import {MovieImageBackdropOrLogo} from "@/types/tmdb";

interface MediaItemProps {
  stateKey: 'posters' | 'backdrops' | 'logos';
}
const MediaItem: React.FC<MediaItemProps> = ({ stateKey }) => {
  const state = useSelector<any, ITmdbState['movies']['show']>((state) => state.tmdb.movies.show) as ITmdbState['movies']['show'];
  return (
    <div className="w-full ">
      {
        state.images?.loading ? (
            <div className="w-full flex items-center justify-center">
              <Spin/>
            </div>
          ) :
          <Row gutter={[24, 24]}>
            {
              typeof(state.images?.data[stateKey]) !== 'undefined' &&
              Array.isArray(state.images?.data[stateKey]) &&
              state.images?.data[stateKey].length > 0 ?
                state.images?.data[stateKey].slice(0, 6)
                  .map((item: MovieImageBackdropOrLogo) => {
                    return (
                      <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                        <Image.PreviewGroup
                          items={[
                            HttpUtil.getAssetTmdb(item?.file_path, 'original') ?? '',
                            ...state.images.data[stateKey].map((child: MovieImageBackdropOrLogo) => HttpUtil.getAssetTmdb(child?.file_path, 'original') ?? '')
                          ]}
                        >
                          <Image
                            src={HttpUtil.getAssetTmdb(item?.file_path, 'original') ?? ''}
                            alt={`movie_poster`}
                            className={Classes(
                              'w-full h-full min-h-[250px] object-cover relative rounded-2xl',
                            )}
                            preview={{
                              mask: <Typography>View More {state.images.data[stateKey].length}</Typography>
                            }}
                            srcSet={[
                              HttpUtil.getAssetTmdb(item?.file_path, 'original'),
                            ].join('')}
                            loading="lazy"
                          />
                        </Image.PreviewGroup>
                      </Col>
                    )
                  })
                :
                <Empty/>
            }
          </Row>
      }
    </div>
  )
}
const MediaSection: React.FC = () => {

  const state = useSelector<any, ITmdbState['movies']['show']>((state) => state.tmdb.movies.show) as ITmdbState['movies']['show'];
  return (
    <React.Fragment>
      <TheContainer className="py-10">
        <Typography.Title level={2}>Media</Typography.Title>
        <Tabs
          className="!border-none"
          rootClassName="!border-none"
          items={[
            {
              key: "poster",
              label: `Posters ${Array.isArray(state.images?.data?.posters) ? `(${state.images?.data?.posters.length})` : ''}`,
              children: <MediaItem stateKey={'posters'}/>
            },
            {
              key: "backdrop",
              label: `Backdrops ${Array.isArray(state.images?.data?.backdrops) ? `(${state.images?.data?.backdrops.length})` : ''}`,
              children: <MediaItem stateKey={'backdrops'}/>
            },
            {
              key: "logos",
              label: `Logo ${Array.isArray(state.images?.data?.logos) ? `(${state.images?.data?.logos.length})` : ''}`,
              children: <MediaItem stateKey={'logos'}/>
            },
          ]}
        />
      </TheContainer>
    </React.Fragment>
  )
};

export default MediaSection;
