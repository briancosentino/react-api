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
        <div className='w-[60%] m-auto flex flex-wrap'>
            {posts.map((post) => (
                <div className="p-4 border border-stone-300 rounded-sm ">{post.title}</div>
            ))}

        </div>
    )
}

export default Posts
