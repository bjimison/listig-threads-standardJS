// Modal section 

// open camo modal
document.getElementById("camo-btn").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
});

// open black modal
document.getElementById("black-btn").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
});

// open brown modal
document.getElementById("brown-btn").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
});

// close modal
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
});