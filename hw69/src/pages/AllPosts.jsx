import {useGetTotalPostsQuery, useGetAllPostsQuery} from "../slices/postSlice";
import {Post} from "../components/Post";
import './AllPosts.css';
import {useEffect, useState} from "react";

export const AllPosts = () => {
    const {data: totalData, error: totalError, isLoading: isTotalLoading} = useGetTotalPostsQuery();
    const [limit, setLimit] = useState(10);
    const {data: posts, error, isLoading} = useGetAllPostsQuery(limit);
    useEffect(() => {
        if (totalData && totalData.count) {
            setLimit(totalData.count);
        }
    }, [totalData]);
    return (
        <>
            <div className="all-posts-container">
                <h1 className="all-posts-title">All Posts</h1>
                {isLoading && <div className="loading-message">Loading...</div>}
                {error && <div className="error-message">Error: {error}</div>}
                <div className="posts-list">
                    {posts &&
                        posts.results?.map(post => (
                            <Post
                                key={post.id}
                                date={post.date}
                                title={post.title}
                                description={post.description}
                                image={post.image}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}