import { Card } from '@/components/Card'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Photos from '@/components/Photos'
import Resume from '@/components/Resume'
import { formatDate } from '@/lib/formateDate'
import { ArticleWithSlug, getAllArticles } from "@/lib/article"
import React from 'react'
import NowPlaying from '@/components/NowPlaying'


const Article = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow>{formatDate(article.date)}</Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};


export default async function Home(){
  let articles = (await getAllArticles()).slice(0, 4);
  
  return (
    <main>
      <Hero/>
      <Photos/>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <NowPlaying />
          </div>
        </div>
      </Container>
    </main>
  )
}
