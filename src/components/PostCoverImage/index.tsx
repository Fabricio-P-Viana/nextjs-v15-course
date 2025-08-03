import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { ComponentProps } from 'react'

type PostCoverImageProps = {
  imagemProps: ComponentProps<typeof Image>
  linkProps: ComponentProps<typeof Link>
}

function PostCoverImage({
  imagemProps,
  linkProps,
}: PostCoverImageProps ) {
  return (
   <Link
    className={clsx("w-full h-full overflow-hidden rounded-xl", linkProps.className)} {...linkProps}>
      <Image
        className={clsx("group-hover:scale-105 object-cover object-center transition w-full h-full", imagemProps.className)}
        {...imagemProps}
        alt={imagemProps.alt || 'Post Cover Image'}
      />
    </Link>
  )
}

export default PostCoverImage
