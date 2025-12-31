document.querySelectorAll(".social-links a").forEach(link => {
    link.addEventListener("click", function(){
        alert("You are visiting " + link.textContent);
    });
});