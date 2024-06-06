import './PostsList.css';
import Post from "./post/Post";
import Pagination from "./pagination/Pagination";
import Filter from "./filter/Filter";
import {useEffect, useState} from "react";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [buttonNumber, setButtonNumber] = useState(1);
    useEffect(() => {
        fetch('https://jsonplaceholder.org/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json.slice(0, 10));
                setAllPosts(json)
            });
    }, []);
    const clickPaginationButton = buttonPageNumber => {
        setButtonNumber(buttonPageNumber);
    };
    useEffect(() => {
        const startPosition = (buttonNumber - 1) * 10;
        const finishedPosition = startPosition + 10;
        const newPosts = allPosts.slice(startPosition, finishedPosition);
        setPosts(newPosts);
    }, [buttonNumber]);
    const filterPosts = inputValue => {
        setPosts(allPosts.filter(item => item.title.includes(inputValue)));
    };
    return (
      <>
          <div className="filter__container">
              <Filter
                filterPosts={filterPosts}
              />
          </div>
          <div className="posts__container">
              {posts?.map(post => {
                  return (
                      <Post
                          title={post.title}
                          id={post.id}
                          date={post.publishedAt}
                      />
                  );
              })}
          </div>
          <div className="posts__pagination-container">
              {allPosts &&
                  <Pagination
                      postsCount={allPosts.length}
                      clickPaginationButton={clickPaginationButton}
                  />
              }
          </div>
      </>
    );
}