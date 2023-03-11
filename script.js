function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  fetch("https://upadhayay.github.io/db.json")
  .then(response => response.json())
  .then(data => {
    const papersContainer = document.querySelector(".paper_div");
    data.books.forEach((paper, index) => {
      if (paper.published) {
        const paperBlock = `
          <div class="paper">
            <p>${index + 1}: ${paper.title}</p>
            <a href="#">Read More</a>
          </div>
        `;
        papersContainer.insertAdjacentHTML("beforeend", paperBlock);
      }
    });
  })
  














