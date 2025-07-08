// Subscribe Button
document.addEventListener("DOMContentLoaded", () => {
  const subscribeButtons = document.querySelectorAll(".subscribe-button");
  subscribeButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thank you for subscribing.");
    });
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.elements["name"].value;
      const email = contactForm.elements["email"].value;
      const message = contactForm.elements["message"].value;
      localStorage.setItem("contactData", JSON.stringify({ name, email, message }));
      alert("Thank you for your message!");
      contactForm.reset();
    });
  }
});

// Gallery Cart Features
let cart = [];

function addToCart(item) {
  cart.push(item);
  sessionStorage.setItem("cartItems", JSON.stringify(cart));
  alert("Item added to the cart");
}

function clearCart() {
  cart = [];
  sessionStorage.removeItem("cartItems");
  alert("Cart cleared");
}

function processOrder() {
  if (cart.length > 0) {
    alert("Thank you for your order");
    cart = [];
    sessionStorage.removeItem("cartItems");
  } else {
    alert("Cart is empty");
  }
}

// Load cart from sessionStorage if it exists
document.addEventListener("DOMContentLoaded", () => {
  const storedCart = sessionStorage.getItem("cartItems");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
});

