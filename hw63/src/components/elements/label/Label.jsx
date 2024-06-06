import './Label.css';

export default function Label({label}) {
    return (
      <>
        <div className="label__container">
            <h1 className="label">{label}</h1>
        </div>
      </>
    );
}