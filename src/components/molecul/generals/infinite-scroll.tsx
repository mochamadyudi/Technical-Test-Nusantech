import React, { useCallback, useEffect } from 'react';
import { Col, Row } from 'antd';
import LottiesMolecul from '@components/molecul/lotties.molecul.tsx';
import Animation from '@/assets/lotties/sending-announcement.json';
type InfiniteScrollProps<T = any> = {
  data: T[]
  page: number
  renderItem: (item: T, index: number) => React.ReactNode
  max_scroll: number
  loading: boolean
  hasMore: boolean
  loadMore: () => void
  threshold: number
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  hasMore,
  loadMore,
  page,
  data,
  loading,
  renderItem,
  threshold,
}) => {
  const handleScroll = useCallback(() => {
    if (!hasMore) return

    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    if (scrollY + viewportHeight >= fullHeight - threshold && !loading) {
      loadMore()
    }
  }, [hasMore, loadMore, threshold])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <Row gutter={[24, 24]}>
      {data.map((item, index) => {
        return (
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            key={`item-infinite-scroll-${index}`}
          >
            {renderItem(item, index)}
          </Col>
        )
      })}
      {loading &&
        Array.from({ length: 6 - (data.length % 6) }).map((_: any) => {
          return (
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={6}
              xl={4}
              key={`item-infinite-scroll-${Math.random()}`}
            >
              <div className="w-full min-h-80 h-full rounded-xl">
                <div className="animate-pulse rounded-lg border p-4 shadow-md space-y-4">
                  <div className="h-[260px] bg-white bg-opacity-40 rounded-md" />
                  <div className="h-4 bg-white bg-opacity-40 rounded w-3/4" />
                  <div className="h-4 bg-white bg-opacity-40 rounded w-1/2" />
                </div>
              </div>
            </Col>
          )
        })}
      {!hasMore && !loading && page > 2 && (
        <Col key={`item-infinite-scroll-${Math.random()}`} span={24}>
          <div
            className="bg-[--ant-color-primary-bg] p-6 rounded-xl border border-[--ant-color-primary-border-hover]">
            <div className="flex items-center justify-start">
              <LottiesMolecul animation={Animation} height={300} />
              <div>

                <h3 className="ant-typography text-3xl css-io5xuo css-var-r4">
                  Tidak Ada Lagi Konten
                </h3>
                <div className="ant-typography text-lg css-io5xuo css-var-r4">
                  Anda telah mencapai bagian paling bawah dari halaman. Kami akan terus memperbarui konten, jadi
                  pastikan
                  untuk kembali lagi nanti!
                </div>
              </div>
            </div>

          </div>
        </Col>
      )}
    </Row>
  )
}

export default InfiniteScroll
