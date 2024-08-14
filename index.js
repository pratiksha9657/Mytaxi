document.getElementById('book-now').addEventListener('click', function() {
    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const carType = document.getElementById('car-type').value;

    if (pickup === '' || drop === '') {
        alert('Please enter both pickup and drop locations.');
        return;
    }

    alert(`Booking confirmed! \n\nPickup: ${pickup} \nDrop: ${drop} \nCar Type: ${carType}`);
});
