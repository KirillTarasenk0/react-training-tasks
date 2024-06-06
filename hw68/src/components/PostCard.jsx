import './PostCard.css';
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { addLike, addDislike, addToFavourites, deleteFromFavourites } from '../slices/postSlice';
import { useDispatch } from 'react-redux';
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

export default function PostCard({id, image, title, description, date, likes, dislikes, marked}) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="card__container">
                <div>
                    <span className="card__id">{id}</span>
                    <h1 className="card__title">{title}</h1>
                    <p className="card__description">{description}</p>
                    <div className="card__date">{date}</div>
                    <div className="down-row">
                        <div className="like">
                            <SlLike onClick={() => dispatch(addLike(id))}/>
                            <span>{likes}</span>
                        </div>
                        <div className="like">
                            <SlDislike onClick={() => dispatch(addDislike(id))}/>
                            <span>{dislikes}</span>
                        </div>
                        {!marked ?
                            <CiBookmark className='bookmark' onClick={() => dispatch(addToFavourites(id))}/> :
                            <IoBookmark className='bookmark' onClick={() => dispatch(deleteFromFavourites(id))} />
                        }

                    </div>
                </div>
                <div className="card__image-container">
                    <img className="card__image" src={image} alt="Post image"/>
                </div>
            </div>
        </>
    );
}