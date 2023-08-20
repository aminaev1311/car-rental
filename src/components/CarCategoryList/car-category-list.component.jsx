import './car-category-list.styles.css';
import CarList from '../CarList/car-list.component';

const CarCategoryList = ({cars, totalDays, category, setCar}) => {

    return (
        <div className='car-category-list'>
            <div className='car-category-list-title'>
                {category}
            </div>

            <CarList cars={cars} totalDays={totalDays} setCar={setCar} />
      </div>
    );
};

export default CarCategoryList;