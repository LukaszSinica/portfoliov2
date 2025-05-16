'use client';

import Link from 'next/link';
import { getFeaturedPosts } from '@/lib/posts';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LocaleText from '@/components/ui/localeText';

export default function FeaturedPosts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: getFeaturedPosts
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold"><LocaleText name="recent_posts" /></h2>
          <Link href="/blog" className="text-primary hover:underline">
            <LocaleText name="view_all_posts" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.items.map((post) => (
            <Link key={post.id} href={`/blog/post/${post.id}`}>
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="line-clamp-3 text-muted-foreground"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content.substring(0, 150) + '...' 
                    }} 
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}