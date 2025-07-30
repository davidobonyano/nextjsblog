import Link from "next/link"
export default function ArticlePage(){
    return(
        <div>
              <Link href='/article/breaking-news-123?lang=en'>English</Link>
              <Link href='/article/breaking-news-123?lang=fr'>french</Link>
              <Link href='/article/breaking-news-123?lang=es'>spanish</Link>
            
        </div>
    )
}