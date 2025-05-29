import React from 'react';
import { Tag, Typography } from 'antd'
import dayjs from 'dayjs';
import { FieldTimeOutlined } from '@ant-design/icons';
import Utils, { Classes } from '../../../utils'
import { Link } from 'react-router-dom'
import ImageWithFallback from '../image.fallback.tsx'

type classNamesType = {
  image?: string;
  root?: string;
  content?: string;
};
type CardPlacement = 'horizontal' | 'vertical';
type CardSize = 'large' | 'default' | 'small';
type CardItemType = {
  image_url: string;
  title: string;
  [k: string]: any;
};
interface CardPostInterface {
  placement?: CardPlacement;
  size?: CardSize;
  item: CardItemType;
  classNames?: classNamesType;
  type: 'foto' | 'post' | 'page' | 'category';
}

class CardPost extends React.Component<CardPostInterface, any> {
  render() {
    return (
      <div
        className={Classes(
          this.props?.classNames?.root,
          this.props?.placement === 'horizontal' ? 'flex-row' : 'flex-col',
          'w-full h-full rounded-2xl flex flex-1 overflow-hidden'
        )}
      >
        <Link
          to={Utils.getUrlPost(this.props.item, 'uuid')}
          className={Classes(
            'overflow-hidden',
            this.props?.placement === 'horizontal'
              ? this.props.size === 'large'
                ? 'w-full max-w-[200px]'
                : 'max-w-[140px]'
              : 'w-full',
          )}
        >
          <div
            className={Classes(
              'w-full overflow-hidden',
              this.props?.placement === 'vertical'
                ? 'rounded-t-2xl'
                : 'rounded-l-2xl',
              this.props.placement === 'vertical'
                ? this.props.size === 'large'
                  ? '!h-[350px]'
                  : this.props.size === 'small'
                    ? '!h-[150px]'
                    : 'h-[220px]'
                : 'h-full max-h-[200px]',
              this.props?.classNames?.image,
              '!bg-slate-500'
            )}
          >
            <ImageWithFallback
              fallbackSrc={'/img/image-not-found.png'}
              src={this.props?.item?.image_url}
              alt={this.props?.item?.image_url}
              className={
                '!h-full w-full !object-cover transition duration-200 transform scale-100 group-hover:scale-110'
              }
            />
          </div>
        </Link>
        <div
          className={Classes(
            'w-full h-full',
            'bg-white flex-1 dark:bg-slate-700 p-4',
            this.props?.placement === 'vertical' ? 'rounded-b-2xl' : ''
          )}
        >
          <div
            className={Classes(
              'space-y-4 flex flex-col !h-full justify-between'
            )}
          >
            <div className="space-y-2 h-full flex-1 flex flex-col">
              <div
                className={Classes(
                  this.props.size === 'large'
                    ? '!max-h-[80px]'
                    : this.props.size === 'default'
                      ? ' '
                      : ' ',
                )}
              >
                <Link to={Utils.getUrlPost(this.props.item, 'uuid')}>
                  <Typography.Title
                    level={4}
                    className={Classes(
                      '!line-clamp-2 !p-0 !m-0',
                      'transition duration-200 hover:!text-[--ant-color-primary]',
                      this.props.size === 'large'
                        ? '!text-3xl'
                        : this.props.size === 'default'
                          ? '!text-xl !leading-6'
                          : '!text-lg !leading-6'
                    )}
                  >
                    {this.props?.item?.title}
                  </Typography.Title>
                </Link>
              </div>
              <div className='flex-1'>
                { this.props?.item?.content && (
                  <div
                    className={Classes(
                      this.props?.size === 'large'
                        ? '!text-base line-clamp-3'
                        : '!line-clamp-2',
                      'dark:text-slate-300 min-h-[50px]',
                    )}
                  >
                    <Typography className="text-xs">
                      {Utils.stripHtml(this.props?.item?.content)}
                    </Typography>
                  </div>

                )}
              </div>
              {
                dayjs(this.props?.item?.created_at).isValid() && (
                  <div className='flex gap-2'><Typography className="text-sm"><FieldTimeOutlined/></Typography><Typography className="text-sm">{dayjs(this.props?.item?.created_at).isValid() ? dayjs(this.props?.item?.created_at).format("DD MMM HH:mm") : ""}</Typography></div>
                )
              }

            </div>
            <div className={''}>
              <Tag
                color={'purple'}
                className={Classes('!px-4 !py-1 rounded-full')}
              >
                {this.props?.item?.destination}
              </Tag>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPost;
