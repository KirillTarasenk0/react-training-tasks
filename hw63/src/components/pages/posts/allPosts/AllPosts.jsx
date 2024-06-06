import './AllPosts.css';
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function AllPosts({choosePost, select}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
            .then(response => response.json())
            .then(json => json.results)
            .then(results => setData(results));
    }, []);
    return (
        <>
            <div className="posts_list-container">
                {select === undefined && data?.map((item, index) => {
                    return (
                        <Post
                            date={item.date}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            choosePost={choosePost}
                            index={index}
                        />
                    );
                })}
                {(select !== undefined) &&
                    <Post
                        date={data[select]?.date}
                        title={data[select]?.title}
                        description={data[select]?.description}
                        image={data[select]?.image}
                        choosePost={choosePost}
                        index={select}
                    />
                }
            </div>
        </>
    );
}