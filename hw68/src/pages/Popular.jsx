import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Popular() {
    const posts = useSelector(state => state.posts);
    const sortedPosts = posts.slice().sort((a, b) => b.visited - a.visited);
    return (
        <>
            <h1>Popular</h1>
            <div className="all__posts-container">
                {sortedPosts?.map(post => {
                    return (
                        <Link to={`/posts/${post.id}`} key={post.id}>
                            <PostCard
                                id={post.id}
                                image={post.image}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                likes={post.likes}
                                dislikes={post.dislikes}
                                marked={post.marked}
                            />
                        </Link>
                    );
                })}
            </div>
        </>
    );
}