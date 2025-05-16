'use client';

import { useQuery } from '@tanstack/react-query';
import { getPostById } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default function PostPage({ params }: { params: { id: string } }) {
  const { data, isLoading } = useQuery({
    queryKey: ['post', params.id],
    queryFn: () => getPostById(parseInt(params.id))
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data?.post) return notFound();

  return (
    <div className="container py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{data.post.title}</h1>
      <div 
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: data.post.content }}
      />
    </div>
  );
}