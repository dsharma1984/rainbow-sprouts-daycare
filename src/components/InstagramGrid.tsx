'use client'

import { useState, useEffect } from 'react'
import { client } from '../sanity/client'
import { Loader2, Instagram } from 'lucide-react'

// The GROQ Query to fetch posts ordered by newest first
const POSTS_PER_PAGE = 6
const query = `*[_type == "instagramEmbed"] | order(publishedAt desc) [$start...$end] {
  _id,
  url,
  title,
  image {
    asset-> {
      url
    }
  }
}`

interface InstagramPost {
  _id: string
  url: string
  title: string
  image?: {
    asset?: {
      url: string
    }
  }
}

export default function InstagramGrid() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    async function loadInitialPosts() {
      try {
        const initialPosts = await client.fetch(query, { start: 0, end: POSTS_PER_PAGE })
        setPosts(initialPosts)
        setHasMore(initialPosts.length === POSTS_PER_PAGE)
      } catch (err) {
        console.error('Failed to load instagram posts', err)
      } finally {
        setLoading(false)
      }
    }
    loadInitialPosts()
  }, [])

  const loadMore = async () => {
    setLoadingMore(true)
    const currentLength = posts.length
    try {
      const morePosts = await client.fetch(query, { start: currentLength, end: currentLength + POSTS_PER_PAGE })
      setPosts((prev) => [...prev, ...morePosts])
      setHasMore(morePosts.length === POSTS_PER_PAGE)
    } catch (err) {
      console.error('Failed to load more posts', err)
    } finally {
      setLoadingMore(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-[#8B5CF6]" />
      </div>
    )
  }

  if (posts.length === 0) {
    return null; // Don't show the section if she hasn't added any links yet
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative magical blobs behind the grid - Hidden on mobile, visible on desktop */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl -z-10 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -z-10 animate-pulse hidden md:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl -z-10 hidden md:block"></div>

      <div className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-24 text-4xl animate-bounce text-yellow-400 z-10" style={{ animationDuration: '3s' }}>✨</div>
        <div className="absolute bottom-0 right-1/2 translate-x-32 text-3xl animate-bounce text-purple-400 z-10" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>✦</div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 font-heading relative z-20">
          Magic on <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Instagram</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-4 mb-4"></div>
        <p className="mt-4 text-xl leading-8 text-gray-500 font-medium max-w-2xl mx-auto">
          Peek into our colorful world of learning, play, and endless imagination!
        </p>
      </div>

      {/* The UI layout logic: Flex Swipe Carousel on Mobile -> Grid on Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide relative z-20">
        {posts.map((post, i) => (
          <a
            key={post._id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full min-w-[85vw] md:min-w-0 max-w-[340px] snap-center bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(236,72,153,0.1)] hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)] transition-all duration-500 hover:-translate-y-2 border-4 border-white group relative shrink-0 text-left block"
          >
            {/* Playful corner accent - Visible only on desktop to reduce noise */}
            <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 hidden md:block ${i % 2 === 0 ? 'bg-pink-400' : 'bg-purple-400'}`}></div>
            
            <div className="relative z-10 w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-100">
               {post.image?.asset?.url ? (
                  <img src={post.image.asset.url} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                    <Instagram className="w-12 h-12 mb-2 opacity-50" />
                    <span className="text-sm font-medium">Image needed in Sanity Studio</span>
                  </div>
               )}
               
               {/* Hover Glass Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/90 p-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.2)] transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                     <Instagram className="w-8 h-8 text-pink-500" />
                  </div>
               </div>
            </div>
            
            {/* Title / Description */}
            <div className="pt-5 pb-3 px-2 flex justify-between items-center z-10 relative">
               <span className="font-bold text-gray-800 line-clamp-1 group-hover:text-pink-500 transition-colors">{post.title}</span>
               <span className="text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full shadow-md ml-2 shrink-0">View Post</span>
            </div>
          </a>
        ))}
      </div>

      {/* Performance Load More Limiter */}
      {hasMore && (
        <div className="mt-16 flex justify-center pb-8">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-4 text-lg font-bold text-white shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 disabled:opacity-50 flex items-center gap-3 transition-all transform hover:-translate-y-1"
          >
            {loadingMore && <Loader2 className="w-5 h-5 animate-spin" />}
            {loadingMore ? 'Mixing Magic...' : 'Load More Magic ✨'}
          </button>
        </div>
      )}
    </div>
  )
}
