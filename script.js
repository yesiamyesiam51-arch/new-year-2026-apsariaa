let pages = document.querySelectorAll(".page");
let current = 0;
let answers = [];
let herName = "";

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  pages[current].classList.add("active");

  if (pages[current].querySelector("#summary")) {
    showSummary();
  }
}

function saveName() {
  herName = document.getElementById("nameInput").value || "You";
  document.querySelectorAll(".name").forEach(n => n.innerText = herName);
  nextPage();
}

function saveAndNext() {
  let input = pages[current].querySelector("input");
  answers.push(input.value || "—");
  nextPage();
}

function showSummary() {
  const labels = [
    "Best memory with me",
    "Happiest moment",
    "Saddest moment",
    "Angriest moment",
    "Favourite song",
    "Favourite movie",
    "Special wish"
  ];

  document.getElementById("summary").innerHTML =
    labels.map((l, i) =>
      `<p><strong>${l}:</strong> ${answers[i]}</p>`
    ).join("");

  setTimeout(() => nextPage(), 6000);
}

/* HEARTS */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);
