// Open Modal Function
document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("modal-img");
      modal.style.display = "block";
      modalImg.src = item.src;
    });
  });
  
  // Close Modal Function
  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });