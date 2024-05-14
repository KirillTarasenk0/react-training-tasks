import './PostCard.css';

export default function PostCard({date, title, description, image}) {
    return (
      <>
        <div className="post__card-container">
            <div className="post__card-info">
                <p className="post__card-date">{date}</p>
                <h2 className="post__card-title">{title}</h2>
                <p className="post__card-description">{description}</p>
            </div>
            <div className="post__card-image">
                <img className="post__image" src={image} alt="Image photo"/>
            </div>
        </div>
      </>
    );
}