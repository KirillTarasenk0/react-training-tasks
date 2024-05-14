import './Tabs.css';
import {useState} from "react";

export default function Tabs() {
    const [clickedTab, setClickedTab] = useState('');
    const openTabContent = (tabContent) => {
        setClickedTab(tabContent);
    };
    return (
      <>
        <div className="tabs__container">
            <span className='tabs__container-item' onClick={() => openTabContent('All')}>
                All
            </span>
            <span className='tabs__container-item' onClick={() => openTabContent('My favourites')}>
                My favourites
            </span>
            <span className='tabs__container-item' onClick={() => openTabContent('Popular')}>
                Popular
            </span>
        </div>
        <div className="tabs__content-container">
            {clickedTab === 'All' ? <div className="tab__content">{clickedTab}</div> : <div className="tab__content"> </div>}
            {clickedTab === 'My favourites' ? <div className="tab__content">{clickedTab}</div> : <div className="tab__content"> </div>}
            {clickedTab === 'Popular' ? <div className="tab__content">{clickedTab}</div> : <div className="tab__content"> </div>}
        </div>
      </>
    );
}