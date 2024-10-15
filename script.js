document.getElementById('listingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const imageFile = document.getElementById('image').files[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        const listingItem = document.createElement('li');
        listingItem.innerHTML = `
            <strong>${title}</strong> - ${description} - Money: ${price} - Payment Method: ${paymentMethod}<br>
            <div class="image-container">
                <img src="${reader.result}" alt="Product Image">
            </div>
            <button class="delete-button">Delete</button>
        `;

      
        listingItem.querySelector('.delete-button').addEventListener('click', function() {
            listingItem.remove();
        });

        document.getElementById('listingList').appendChild(listingItem);
    }

   
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }

    
    document.getElementById('listingForm').reset();
});


document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('listingForm').reset();
});
