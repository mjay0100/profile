const icon = document.querySelector(".fa-note-sticky");
const remove = document.querySelector(".fa-times");
const form = document.querySelector(".update-form");
const main = document.querySelector(".main");

icon.addEventListener("click", () => {
  form.classList.add("active");
  main.classList.add("active");
});
remove.addEventListener("click", () => {
  form.classList.remove("active");
  main.classList.remove("active");
});

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My Assessment",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 25, 15, 33, 20, 30, 40],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById("myChart"), config);
