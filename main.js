// main.js

document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var minYear = document.getElementById('minYear').value;
    var maxYear = document.getElementById('maxYear').value;
    // Get other filter values here
    var filteredCars = usedCars.filter(function(car) {
        return car.year >= minYear && car.year <= maxYear;
        // Add other filter conditions here
    });
    displayCars(filteredCars);
});

function displayCars(cars) {
    console.log("displayCars called");
    var carList = document.getElementById('carList');
    carList.innerHTML = '';
    cars.forEach(function(car) {
        // let carImg = car.make + car.model + ".jpg";
        let carImg = `./assets/img/${car.make} ${car.model}.jpg`;
        var carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
        <h2>${car.make} ${car.model}</h2>
        <img src="${carImg}" alt="${car.make} ${car.model}">
        <div class="car-details">
            <p>Year: ${car.year}</p>
            <p>Mileage: ${car.mileage}</p>
            <p>Price: ${car.price}</p>
            <p>Color: ${car.color}</p>
        </div>
        `;
        carList.appendChild(carElement);
    });
}

// Initial display of all cars
displayCars(usedCars);