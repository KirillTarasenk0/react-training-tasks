import './Title.css';

export default function Title({title}) {
    return (
      <>
          <div className='title__container'>
              <span className='title'>{title}</span>
          </div>
      </>
    );
}