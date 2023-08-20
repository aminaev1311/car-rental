const masterCars = [
    { id: 1, name: "Ford Fiesta", year: 2017, engine: '1.6L', imgUrl: './assets/ford_fiesta.jpeg', transmission: "manual", dayPrice: 25, deposit: 300, category: "Econom Manual" },
    { id: 2, name: "Skoda Fabia", year: 2018, engine: '1.6L', imgUrl: './assets/skoda_fabia.jpeg', transmission: "manual", dayPrice: 25, deposit: 300, category: "Econom Manual" },
    { id: 3, name: "Skoda Rapid", year: 2019, engine: '1.6L', imgUrl: './assets/skoda_rapid.jpeg', transmission: "manual", dayPrice: 30, deposit: 300, category: "Econom+ Manual"},
    { id: 4, name: "Volkswagen Golf", year: 2021, engine: '1.6L', imgUrl: './assets/volkswagen_golf_caravan.jpeg', transmission: "automatic", dayPrice: 45, deposit: 500, category: "Comfort Automatic" },
    { id: 5, name: "Mercedes B class", year: 2021, engine: '1.6L', imgUrl: './assets/mercedes_bclass.jpeg', transmission: "automatic", dayPrice: 50, deposit: 500, category: "Comfort Automatic" },
    { id: 6, name: "Renault Conquest", year: 2020, engine: '1.6L', imgUrl: './assets/renault_conquest.jpeg', transmission: "automatic", dayPrice: 65, deposit: 500, category: "Comfort+ Automatic" },
    { id: 7, name: "Qudi Q3", year: 2022, engine: '1.6L', imgUrl: './assets/audi_q3.jpeg', transmission: "automatic", dayPrice: 65, deposit: 500, category: "Comfort+ Automatic" },
    { id: 8, name: "Mercedes E Class", year: 2022, engine: '2.5L', imgUrl: './assets/mercedes_eclass.jpeg', transmission: "automatic", dayPrice: 100, deposit: 1000, category: "Business" },
    { id: 9, name: "Mercedes E Class de Lux", year: 2021, engine: '2.5L', imgUrl: './assets/mercedes_eclass_delux.jpeg', transmission: "automatic", dayPrice: 150, deposit: 1000, category: "Business" },
    { id: 10, name: "Opel Astra", year: 2020, engine: '1.8L', imgUrl: './assets/opel_astra.jpeg', transmission: "manual", dayPrice: 40, deposit: 300, category: "Econom+ Manual" }
  ];

const sortedCars = masterCars.sort( (a, b) => a.dayPrice - b.dayPrice );

console.log('sorted cars: ', sortedCars);

const cars = [];

let category = null;
let i=0;

masterCars.forEach( car => {
    const newCategory = (category, elementCategory) => {
        return category !== elementCategory;
    };

    let car_element = {
        id: i,
        category: car.category,
        cars: Array.of(car)
    };

    if (newCategory(category, car.category)) {      
        cars.push(car_element);
        i++;
    } else {
        cars.forEach( el => el.category===car.category ? el.cars.push(car) : null );
    }

    category = car.category;
})

// console.log(cars);

export { masterCars };

export {cars};