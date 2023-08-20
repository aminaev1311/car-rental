import './car-list.styles.css';
import CarItem from '../CarItem/car-item.component'

const CarList = ({cars, totalDays, setCar}) => {
    return (
        <div className='car-cards-list'>
            {cars.map( el => <CarItem car={el} totalDays={totalDays} setCar={setCar} key={el.id}/>)}
        </div>
    );
}

export default CarList;