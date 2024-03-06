document.getElementById('age').addEventListener('input', function() {
    var age = parseInt(this.value);
    var quantityBlock = document.getElementById('quantityBlock');
    if (age >= 0) {
        quantityBlock.style.display = 'block';
    } else {
        quantityBlock.style.display = 'none';
    }
});

document.getElementById('zooForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var age = parseInt(document.getElementById('age').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = document.getElementById('price');
    var totalPrice = 0;

    if (age >= 0 && age <= 3) {
        totalPrice = 0;
    } else if (age > 3 && age <= 12) {
        totalPrice = 100;
    } else if (age > 12 && age <= 18) {
        totalPrice = 150;
    } else if (age > 18 && age <= 65) {
        totalPrice = 200;
    } else if (age > 65) {
        totalPrice = 0;
    }

    var finalPrice = totalPrice * quantity;
    price.value = 'R' + finalPrice.toFixed(2);
});
            
