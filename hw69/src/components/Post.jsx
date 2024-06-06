import './Post.css';

export const Post = ({date, title, description, image}) => {
    return (
        <>
            <div className="post">
                <div className="post-content">
                    <span className="post-date">{date}</span>
                    <h2 className="post-title">{title}</h2>
                    <p className="post-description">{description}</p>
                </div>
                <div className="post-image">
                    <img src={image} alt="post image"/>
                </div>
            </div>
        </>
    );
}