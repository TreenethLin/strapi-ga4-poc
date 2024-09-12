import React from 'react'
import { getArticles } from '@/lib/api'
import { Article } from '@/types/article'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const revalidate = 30 // revalidate at most every 30 seconds

export default async function StrapiArticlesPage() {
  const articles = await getArticles()

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Looklook Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: Article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader>
              {article.attributes.cover?.data && (
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${article.attributes.cover.data.attributes.formats.thumbnail.url}`}
                    alt={article.attributes.title || 'Article cover'}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <CardTitle className="text-lg">{article.attributes.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">Author: {article.attributes.author}</p>
              <p className="text-sm text-muted-foreground mb-2">
                Release Date: {new Date(article.attributes.release).toLocaleDateString()}
              </p>
              <div className="prose dark:prose-invert line-clamp-3">
                <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full text-md font-semibold">
                <Link href={`/article/${article.id}`}>
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}