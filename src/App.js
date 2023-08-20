import './App.css';
import { cars } from './data';

import CarCategoryList from './components/CarCategoryList/car-category-list.component';

import { useState, useEffect } from 'react';
import { localDatetimeToday, localDatetimeTommorow, localDatetimePlusThreeDays, calculateDiffInDaysBetweenDates } from './utils/dates_converter';

let App = () => {
  console.log(cars);

  const [pickupDate, setPickupDate] = useState(localDatetimeTommorow);
  const [returnDate, setReturnDate] = useState(localDatetimePlusThreeDays);
  const [totalDays, setTotalDays] = useState(2);
  const [car, setCar] = useState(null);
  const [privateName, setPrivateName] = useState('');
  const [familyName, setFamilyName]=useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [telegramUserName, setTelegramUserName] = useState('');
  const [placeOfRent, setPlaceOfRent] = useState('office');

  useEffect( () => {
    let diffInDays = calculateDiffInDaysBetweenDates(returnDate, pickupDate);
    setTotalDays(diffInDays);
  }, [pickupDate, returnDate] ); 

  const onInputPickupHandler = (e) => {
    setPickupDate(e.target.value);
  }

  const onInputReturnHandler = (e) => {
    setReturnDate(e.target.value);
  }

  return (
    <div className="App">
      <form className='header' onSubmit={ (e)=> {
        e.preventDefault();
        console.log({pickupDate, returnDate, totalDays, car, placeOfRent,privateName, familyName, phone, address, telegramUserName} );
        } }>
        <h1>Rent a car in Belgrade with a delivery to your adress</h1>
        <h3>no credit card required. no fees for going out of Serbia. additional driver for free.</h3>
        <div>
          <label>Pick-up{' '}
            <input type='datetime-local' min={localDatetimeToday} value={pickupDate} onChange={onInputPickupHandler}/>
          </label>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <label>Return{' '}
            <input type='datetime-local' min={pickupDate} value={returnDate} onChange={onInputReturnHandler}/>
          </label>
        </div>
        <div>days of rent: {totalDays}</div>
        <div>car chosen: {car ? `${car.name} ${car.year}` : 'select a car!' }</div>
        <div>pick-up date: {new Date(pickupDate).toString()}, return date: {new Date(returnDate).toString()}</div>
        <label>Private Name:
          <input name='privateName' type='text' placeholder='Ivan' onChange={ (e)=>{setPrivateName(e.target.value)}} value={privateName}/>
        </label>
        <label>Family Name:
          <input name='familyName' type='text' placeholder='Petrov' onChange={ (e)=>{setFamilyName(e.target.value)}} value={familyName}/>
        </label>
        <label>Serbian phone:
          <input type='tel' placeholder='+38160111111' minLength="10" maxLength="13" onChange={ (e)=>{setPhone(e.target.value)}} value={phone}/>
        </label>

        <div>
          <label htmlFor='placeOfRent'>Place of rent:</label>
          <select name="placeOfRent" id="placeOfRent" value={placeOfRent} onChange={(e)=>setPlaceOfRent(e.target.value)} >
            <optgroup label="Free Delivery">
              <option value="office" >Office | Belgrade center: hotel Garni, trg Slavija, Svetog Save 2</option>
              <option value="workshop">Workshop | Belgrade, Zvezdara - Bulevar kralja Aleksandra 439</option>
            </optgroup>
            <optgroup label="Paid Delivery - Belgrade / New Belgrade / Zemun – 20/30/40€">
              <option value="Belgrade">Home | Delivery to and pick-up from your address in Belgrade – 20€</option>
              <option value="New Belgrade">Home | Delivery to and pick-up from your address in New Belgrade – 30€</option>
              <option value="Zemun">Home | Delivery to and pick-up from your address in Zemun – 40€</option>
            </optgroup>

          </select>
        </div>

        <div>
          <div>
            <label>Your home address in Belgrade or Zemun for a delivery:
              <input type='text' size='30' value={address} placeholder={"Trg Republike 2, Beograd"} onChange={(e)=>setAddress(e.target.value)}/>
            </label>
          </div>
          <div>
          <label>Telegram username for clarifications:
            <input type='text' value={telegramUserName} placeholder='@telegramUserName' onChange={e=>setTelegramUserName(e.target.value)} />
          </label>
          </div>
        </div>

        <div>
          Rent price: {car ? totalDays*car.dayPrice : 'choose a car'}
        </div>
        <div>
          Delivery price: {placeOfRent==='Belgrade' ? 20 : 0}
        </div>

        <div>
          Deposit: {car ? car.deposit : 'choose a car'}
        </div>

        <div>
          <button type='submit'>Order</button>
        </div>
      </form>

        <div className='car-total-list'>
          {cars.map( el => 
            <CarCategoryList cars={el.cars} totalDays={totalDays} category={el.category} setCar={setCar} key={el.id}/>)
          }
        </div>
      </div>
  );
}

export default App;
