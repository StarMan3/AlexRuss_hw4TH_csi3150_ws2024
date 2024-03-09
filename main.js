// main.js

document.getElementById('filterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var minYear = document.getElementById('minYear').value;
    var maxYear = document.getElementById('maxYear').value;
    var maxMileage = document.getElementById('maxMileage').value;
    var minPrice = document.getElementById('minPrice').value;
    var maxPrice = document.getElementById('maxPrice').value;
    // var make = Array.from(document.getElementById('makeFilter').selectedOptions).map(option => option.value);
    // var color = Array.from(document.getElementById('color').selectedOptions).map(option => option.value);

    const makeFilterCheckboxes = document.querySelectorAll('input[name="make"]');
    const colorFilterCheckboxes = document.querySelectorAll('input[name="colorFilter"]');
    const selectedMake = Array.from(makeFilterCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    const selectedColors = Array.from(colorFilterCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    minYear = minYear ? parseInt(minYear) : 0;
    maxYear = maxYear ? parseInt(maxYear) : Infinity;
    maxMileage = maxMileage ? parseInt(maxMileage) : Infinity;
    minPrice = minPrice ? parseInt(minPrice) : 0;
    maxPrice = maxPrice ? parseInt(maxPrice) : Infinity;

    var filteredCars = usedCars.filter(function (car) {
        return car.year >= minYear && car.year <= maxYear &&
            (selectedMake.length === 0 || selectedMake.includes(car.make)) &&
            (selectedColors.length === 0 || selectedColors.includes(car.color)) &&
            car.mileage <= maxMileage &&
            car.price >= minPrice && car.price <= maxPrice;
    });

    displayCars(filteredCars);
});

function displayCars(cars) {
    console.log("displayCars called");
    var carList = document.getElementById('carList');
    carList.innerHTML = '';
    cars.forEach(function (car) {
        // let carImg = `./assets/img/${car.make} ${car.model}.jpg`;
        let carImg = `./assets/img/${car.image}`
        var carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
        <img src="${carImg}" alt="${car.make} ${car.model}">
        <div class="car-details">
            <div><h1>${car.make} ${car.model}</h1></div>
            <div class="car-details-2">
                <p>Year: ${car.year}</p>
                <p>Mileage: ${car.mileage}</p>
                <p>Price: ${car.price}</p>
                <div class="car-color-section">
                    <p>Color: ${car.color}</p>
                    <span class="color-container" style="background-color: ${car.color}"></span>
                </div>
            </div>
        </div>
        `;
        carList.appendChild(carElement);
    });
}

// Initial display of all cars
displayCars(usedCars);