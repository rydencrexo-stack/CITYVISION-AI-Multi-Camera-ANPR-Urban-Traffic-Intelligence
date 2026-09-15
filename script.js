/* =========================================
   CITYVISION AI
   Interactive Dashboard JavaScript
========================================= */

/* ================= CLOCK ================= */

function updateClock() {
  const clock = document.getElementById("clock");

  if (!clock) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");

  const minutes = String(now.getMinutes()).padStart(2, "0");

  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();

setInterval(updateClock, 1000);

/* ================= TRAFFIC CHART ================= */

const trafficData = [
  32, 29, 35, 31, 40, 48, 53, 61, 74, 59, 44, 37, 31, 28, 34, 42, 36, 30,
];

const chart = document.getElementById("trafficChart");

trafficData.forEach((value, index) => {
  const bar = document.createElement("div");

  bar.className = "traffic-bar";

  bar.style.height = `${value * 1.35}px`;

  chart.appendChild(bar);
});

/* ================= SIDEBAR ================= */

const navigation = document.querySelectorAll(".nav");

navigation.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.forEach((nav) => {
      nav.classList.remove("active");
    });

    item.classList.add("active");
  });
});

/* ================= VIEW BUTTONS ================= */

const viewButtons = document.querySelectorAll("table button");

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");

    const plate = row.children[1].textContent;

    alert(`Vehicle Intelligence\n\nPlate: ${plate}`);
  });
});

/* ================= TRAJECTORY ================= */

const trajectory = document.querySelector(".trajectory");

trajectory.addEventListener("click", () => {
  alert("Opening vehicle trajectory for MH01EF1234...");
});

/* ================= ALERT CLICK ================= */

const alerts = document.querySelectorAll(".alert");

alerts.forEach((alert) => {
  alert.addEventListener("click", () => {
    const plate = alert.querySelector("div:nth-child(2) strong");

    if (plate) {
      alert(`Incident selected:\n${plate.textContent}`);
    }
  });
});

/* ================= LIVE ANIMATION ================= */

const liveIndicator = document.querySelector(".live i");

setInterval(() => {
  liveIndicator.style.opacity =
    liveIndicator.style.opacity === "0.3" ? "1" : "0.3";
}, 700);

/* ================= MAP MARKER ================= */

const markers = document.querySelectorAll(".map-marker");

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    marker.style.transform = "scale(1.4)";

    setTimeout(() => {
      marker.style.transform = "scale(1)";
    }, 500);
  });
});
