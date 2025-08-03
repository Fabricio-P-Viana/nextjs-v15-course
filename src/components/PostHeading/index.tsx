import clsx from 'clsx';
import Link from 'next/link'
import React, { ReactNode } from 'react'

type PostHeadingProps = {
  children: ReactNode;
  url: string;
  as?: 'h1' | 'h2';
}

const PostHeading = ({ children, url, as: Tag = 'h2' }: PostHeadingProps) => {
  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-2xl/tight',
  }

  const commonClasses = 'text-slate-900'

  return (
    <Tag className={clsx(headingClassesMap[Tag],commonClasses)}>
      {/* Using Link to wrap the heading for navigation */}
      <Link href={url} className={clsx('hover:text-slate-600 transition-colors font-bold')}>
        {children}
      </Link>
    </Tag>
  )
}

export default PostHeading
