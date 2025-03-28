import React, { useEffect, useState } from 'react'
const url = 'http://localhost:3001/postsList'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    function fetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPosts(data);

            })
    }
    console.log(posts);

    useEffect(() => {
        fetchData(url)
    }, [])

    return (
        <>
            <div className='w-[80%] gap-4 m-auto flex flex-wrap'>
                <h2 className='text-xl block w-full font-semibold'>Le nostre Ricette</h2>
                {posts.map((post) => (

                    <div key={`post-${post.slug}`} className="p-2 w-[22%] border border-stone-300 rounded-sm ">
                        <div className='w-full h-[130px]  rounded-xs'>
                            <img className='w-full h-full' src={post.image} alt={post.title} />
                        </div>
                        <h2 className='font-semibold '>{post.title} </h2>
                        {/* <div className='flex gap-2'>

                        {post.tags.map((tag) => (
                            <div className='bg-yellow-500 p-1 text-xs text-black rounded-lg'>{tag}</div>
                        ))}
                    </div> */}
                        <p className='text-[.85rem] text-stone-700 font-normal'>{post.content.length < 27 ? post.content : truncateText(post.content, 28)}</p>
                    </div>
                ))}


            </div>

        </>
    )
}

export default Posts
