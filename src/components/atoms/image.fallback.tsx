import React, { useState } from 'react'

type ImageWithFallbackProps = {
  src: string
  alt: string
  fallbackSrc: string
  className?: string
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
}) => {
  const [imgSrc, setImgSrc] = useState(src)

  function onError(){
    setImgSrc(fallbackSrc ?? '/img/image-not-found.png')
  }

  return (
    <picture>
      <source srcSet={imgSrc} type="image/webp" />
      <img
        src={imgSrc}
        srcSet={`${imgSrc}, /img/image-not-found.png`}
        alt={alt}
        className={className}
        onError={onError} />
    </picture>


  )
}

export default ImageWithFallback
