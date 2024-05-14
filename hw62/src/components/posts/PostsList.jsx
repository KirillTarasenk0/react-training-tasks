import './PostsList.css';
import PostCard from "./PostCard/PostCard";
import {useEffect, useState} from "react";

export default function PostsList() {
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
              {data?.map(item => {
                  return (
                      <PostCard
                          date={item.date}
                          title={item.title}
                          description={item.description}
                          image={item.image}
                      />
                  );
              })}
          </div>
      </>
    );
}