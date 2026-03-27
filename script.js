// Button Click
document.getElementById("myBtn").addEventListener("click", function(){
    alert("Button clicked! Tumne button press kiya.");
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // page reload rokne ke liye
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if(age < 10 || age > 100){
        alert("Age 10 se 100 ke beech honi chahiye!");
        return;
    }

    alert("Thank you " + name + "! We received your details: " + email + ", Age: " + age);
    this.reset(); // form clear kar do
});
