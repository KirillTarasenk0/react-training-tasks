import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addVisited} from "../slices/postSlice";

export default function PostDetail() {
    const {id} = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === Number(id)));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addVisited(Number(id)));
    }, []);
    return (
        <>
            <div className="card__container">
                <div>
                    <span className="card__id">{post.id}</span>
                    <h1 className="card__title">{post.title}</h1>
                    <p className="card__description">{post.description}</p>
                    <div className="card__date">{post.date}</div>
                </div>
                <div className="card__image-container">
                    <img className="card__image" src={post.image} alt="Post image"/>
                </div>
            </div>
        </>
    );
}