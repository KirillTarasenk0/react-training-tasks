import './Post.css';

export default function Post({title, id, date}) {
    return (
      <>
        <div className="post__container">
            <h1 className="post__title">{title}</h1>
            <p className="post__id">{id}</p>
            <p className="post__date">{date}</p>
        </div>
      </>
    );
}