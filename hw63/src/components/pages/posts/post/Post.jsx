import './Post.css';

export default function Post({date, title, description, image, choosePost, index}) {
    return (
        <>
            <div className="post__card-container" onClick={() => choosePost(index) }>
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