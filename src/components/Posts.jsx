import React, { useEffect, useState } from 'react'
const url = 'http://localhost:3001/postsList'

const Posts = () => {
    const [posts, setPosts] = useState([])

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
        <div className='w-[80%] gap-4 m-auto flex flex-wrap'>
            {posts.map((post) => (

                <div className="p-2 w-[22%] border border-stone-300 rounded-sm ">
                    <div className='w-full h-[130px]  rounded-xs'>
                        <img className='w-full h-full' src={post.image} alt={post.title} />
                    </div>
                    <h2>{post.title} </h2>
                </div>
            ))}

        </div>
    )
}

export default Posts
