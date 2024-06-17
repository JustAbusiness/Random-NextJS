import { useParams } from 'next/navigation'
import React, { ReactNode, ReactPortal } from 'react'

interface Props {
  params: {blogId: string}
}

export const generateMetadata = () => {
  return {
    title: "Blog detail"
  };
};


export default function BlogDetail({params}: Props) {
  console.log("params", params);
  return (
    <div>
      Blog Detail {params.blogId}
    </div>
  )
}
