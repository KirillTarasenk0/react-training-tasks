import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";

export default function MyFavourites() {
    let posts = useSelector(state => state.posts);
    posts = posts.filter((post) => post.marked)
    return (
        <>
            <div className="all__posts-container">
                {posts?.map(post => {
                    return (
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
                    );
                })}
            </div>
        </>
    );
}