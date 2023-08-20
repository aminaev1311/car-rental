import './car-item.styles.css';

const CarItem = ({car, totalDays, setCar}) => {
    // console.log(car, totalPrice);

    const {name, year, transmission, engine, deposit, dayPrice, imgUrl} = car;

    const clickHandler = ()=> {
        setCar(car);
    };

    return (
        <div className='car-card'>
            <img alt={`${name} ${year}`} src={imgUrl} className='car-img'/>
            <p>{`${name} ${year}`}</p>
            <p>engine: {engine}</p>
            <p>transmission: {transmission}</p>
            <p>{totalDays*dayPrice} EUR</p>
            <p>{dayPrice} EUR per day</p>
            <p>deposit: {deposit} EUR</p>
            <button onClick={clickHandler} className='car-card-select-btn'>Select</button>
        </div>
    )
};

export default CarItem;