import {useDispatch, useSelector} from "react-redux";
import PostCard from "../components/PostCard";
import './All.css';
import {Link} from "react-router-dom";

export default function All() {
    const posts = useSelector(state => state.posts);
    return (
        <>
            <div className="all__posts-container">
                {posts?.map(post => {
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