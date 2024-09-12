import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticle } from '@/lib/api'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import { Components } from 'react-markdown'
import { ArrowLeft } from 'lucide-react'
import { Article } from '@/types/article'

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

const getImageUrl = (url: string) => {
  if (url.startsWith('http')) {
    return url
  }
  return `${strapiUrl}${url}`
}

const components: Components = {
  img: (props) => (
    <Image
      src={getImageUrl(props.src || '')}
      alt={props.alt || ''}
      width={800}
      height={450}
      className="rounded-md object-cover aspect-[16/9] my-8"
    />
  ),
  h1: ({children}) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
  h2: ({children}) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
  h3: ({children}) => <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>,
  h4: ({children}) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
  h5: ({children}) => <h5 className="text-lg font-semibold mt-3 mb-1">{children}</h5>,
  h6: ({children}) => <h6 className="text-base font-semibold mt-2 mb-1">{children}</h6>,
  p: ({children}) => <p className="mb-4">{children}</p>,
}

export default async function StrapiArticlePage({ params }: { params: { id: string } }) {
  const article: Article = await getArticle(params.id)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-15">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
          
          <h1 className="text-4xl font-bold mb-2">{article.attributes.title}</h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt={article.attributes.author} />
                <AvatarFallback>{article.attributes.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-muted-foreground">{article.attributes.author}</span>
            </div>
            <Separator orientation="vertical" />
            <span className="text-muted-foreground">
              Published on {new Date(article.attributes.release).toLocaleDateString()}
            </span>
          </div>
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={components}
            >
              {article.attributes.content}
            </ReactMarkdown>
          </article>
        <div className="flex justify-center items-center">
        {article.attributes.cta_url && (
          <Button asChild className="mt-6 p-6 font-bold text-lg">
            <a href={article.attributes.cta_url}>
                {article.attributes.cta_btn}
            </a>
          </Button>
        )}
        </div>
        </div>
      </section>
    </div>
  )
}