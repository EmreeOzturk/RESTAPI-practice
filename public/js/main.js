const input = document.querySelector(".input__field");
const button = document.querySelector(".addBtn");
const ul = document.querySelector(".places");

const displayPlaces = async () => {
  ul.innerHTML = null;
  await fetch("http://localhost:3000/api/places/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((place) => {
        const li = document.createElement("li");
        li.textContent = place.placeName;
        ul.appendChild(li);
      });
    });
};
displayPlaces();
button.addEventListener("click", async (e) => {
  let placeName = input.value;
  await fetch("http://localhost:3000/api/places/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ placeName: placeName }),
  });
  const li = document.createElement("li");
  li.textContent = placeName;
  ul.appendChild(li);
  input.value = "";
});
