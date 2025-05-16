'use client';

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/lib/posts';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import LocaleText from '@/components/ui/localeText';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/utils';

const ITEMS_PER_PAGE = 3;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(1)  // Get all posts at once
  });

  const filteredPosts = useMemo(() => {
    if (!data?.items) return [];
    return data.items.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    );
  }, [data?.items, search]);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPosts, page]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">
        <LocaleText name="blog" />
      </h1>

      <Input
        className="mb-6"
        placeholder={t('search_posts')}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);  // Reset page when search changes
        }}
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="grid gap-6 mb-6">
            {paginatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/post/${post.id}`}>
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="text-muted-foreground"
                      dangerouslySetInnerHTML={{ 
                        __html: post.content.substring(0, 200) + '...'
                      }}
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="flex gap-2 justify-center items-center">
              <Button 
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >
                Previous
              </Button>
              <span className="text-sm">
                Page {page} of {totalPages}
              </span>
              <Button 
                variant="outline"
                disabled={page >= totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              No posts found
            </div>
          )}
        </>
      )}
    </div>
  );
}