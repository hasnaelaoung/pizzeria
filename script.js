// Tableau pour stocker les articles du panier
let cartItems = [];

// Fonction pour ajouter un article au panier
function addToCart(itemName, itemPrice) {

    cartItems.push({ name: itemName, price: itemPrice });
    displayCart();//mise à jour
}

// Fonction pour afficher le contenu du panier
function displayCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    
    let total = 0;
    
    // Boucle à travers les articles du panier
    cartItems.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}dh`;
        cartList.appendChild(li);
        
        // l'Ajoute le prix de l'article au total de la commande
        total += item.price;
    });
    
    // Met à jour l'affichage du total de la commande
    document.getElementById('total').textContent = `${total}dh`;
}


