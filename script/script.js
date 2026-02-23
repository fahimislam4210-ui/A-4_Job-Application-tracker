
// ================== SELECTORS ==================
const totalEl = document.getElementById("total");
const interviewEl = document.getElementById("total-interview");
const rejectedEl = document.getElementById("total-rejected");

const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");

const jobCards = document.querySelectorAll("#jobs-list > div");

// ================== INITIAL COUNT ==================
updateCounts();

// ================== CARD LOGIC ==================


jobCards.forEach(card => {
  const interviewBtn = card.querySelector("button:nth-child(1)");
  const rejectedBtn = card.querySelector("button:nth-child(2)");
  const statusBadge = card.querySelector("span");
  const deleteBtn = card.querySelector(".fa-trash-can").parentElement;



  // INTERVIEW BUTTON

  interviewBtn.addEventListener("click", () => {
    card.dataset.status = "interview";
    statusBadge.innerText = "INTERVIEW";
    statusBadge.className =
      "inline-block mt-4 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-md";
    updateCounts();
  });



  // REJECTED BUTTON

  rejectedBtn.addEventListener("click", () => {
    card.dataset.status = "rejected";
    statusBadge.innerText = "REJECTED";
    statusBadge.className =
      "inline-block mt-4 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-md";
    updateCounts();
  });

  // DELETE BUTTON

  deleteBtn.addEventListener("click", () => {
    card.remove();
    updateCounts();
  });
});

// ================== FILTER TABS ==================
function toggleStyle(activeId) {
  [allBtn, interviewBtn, rejectedBtn].forEach(btn => {
    btn.classList.remove("bg-gray-900", "text-white");
    btn.classList.add("bg-gray-200");
  });

  const activeBtn = document.getElementById(activeId);
  activeBtn.classList.remove("bg-gray-200");
  activeBtn.classList.add("bg-gray-900", "text-white");

  filterJobs(activeId);
}

function filterJobs(type) {
  jobCards.forEach(card => {
    const status = card.dataset.status || "all";

    if (type === "all-filter-btn") {
      card.style.display = "flex";
    } else if (type === "interview-filter-btn") {
      card.style.display = status === "interview" ? "flex" : "none";
    } else if (type === "rejected-filter-btn") {
      card.style.display = status === "rejected" ? "flex" : "none";
    }
  });
}

// ================== UPDATE COUNTS ==================
function updateCounts() {
  const cards = document.querySelectorAll("#jobs-list > div");

  let interviewCount = 0;
  let rejectedCount = 0;

  cards.forEach(card => {
    if (card.dataset.status === "interview") interviewCount++;
    if (card.dataset.status === "rejected") rejectedCount++;
  });

  totalEl.innerText = cards.length;
  interviewEl.innerText = interviewCount;
  rejectedEl.innerText = rejectedCount;
}



