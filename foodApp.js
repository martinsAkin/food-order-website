let currentPrice = 0;
document.querySelectorAll('.add-to-list').forEach(button => {
 button.addEventListener('click', function full_description() {
     const name = this.getAttribute('food-name');
     const price = parseFloat(this.getAttribute('food-price'));
     const image_link = button.getAttribute('image-link');
     const floatCard = document.getElementById('full-food-description')
     document.getElementById('image-full-description').src = image_link;

      document.getElementById('name').innerHTML = name;
      document.getElementById('price').innerHTML = `$${price.toFixed(2)}`
      
      floatCard.style.display = 'block'
      floatCard.style.transform = 'translate(-10px, -1100px)'
      document.getElementById('display').style.opacity = '5%';

    let cancel_btn = document.getElementById('cancel');
    
    cancel_btn.addEventListener('click', function() {
        floatCard.style.display = 'none'
        document.getElementById('display').style.opacity = '100%';
    })

        currentPrice = price;
 });
});


// counter
var count = document.getElementById('value').innerHTML;

function increment(value) {

    if (value == 0) {
        count++;
        document.getElementById('value').innerHTML = count;
        document.getElementById('number').innerHTML = count
    }
    else{
        if ( document.getElementById('value').innerHTML > 0) {
            count--;
            document.getElementById('value').innerHTML = count;
        }
    }

    document.getElementById('price2').innerHTML = ('$ ' + count * currentPrice);
    
}

// like reaction
const heartIcons = document.querySelectorAll('.fa-heart');
heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        if (this.style.color === 'red') {
            this.style.color = 'black';
        }
        else{
            this.style.color = 'red';
        }
    })
})

const cart_prompt = document.getElementById('add-to-cart');
cart_prompt.addEventListener('click', function() {
    alert('Cart Updated');    
})

