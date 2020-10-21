import React from 'react';

const Filter = props => {
    return (
        <div className='filter'>
            <h3>Filters</h3>
            <div className='filterSection'><p>Launch Year</p>
                <div className='buttonContainer'>{props.yearList.map((year) => <button key={year} className={props.year === year ? 'active' : null} id={`year-${year}`} onClick={props.onClick} value={year}>{year}</button>)}
                </div>
            </div>
            <div className='filterSection'>
                <p>Successful Launch</p>
                <div className='buttonContainer'>
                    <button id='launchTrue' className={props.launch === 'true' ? 'active' : null} onClick={props.onClick} value={true} >True</button>
                    <button id='launchFalse' className={props.launch === 'false' ? 'active' : null} onClick={props.onClick} value={false} >False</button>
                </div>
            </div>
            <div className='filterSection'>
                <p>Successful Landing</p>
                <div className='buttonContainer'>
                    <button id='landTrue' className={props.land === 'true' ? 'active' : null} onClick={props.onClick} value={true} >True</button>
                    <button id='landFalse' className={props.land === 'false' ? 'active' : null} onClick={props.onClick} value={false} >False</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;