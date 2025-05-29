import React from 'react';
import HeroSection from '@components/partials/Home/hero.section.tsx';
import MovieCategoryTab from "@partials/Home/movie-category.tab.tsx";
import { FloatButton } from 'antd'

export default function Page() {
  return (
    <React.Fragment>
      <div className="app-page-full">
        <HeroSection/>
        <MovieCategoryTab/>
      </div>
      <FloatButton.BackTop/>
    </React.Fragment>
  )
}
