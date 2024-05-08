function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "advice-id"
      ).textContent = `ADVICE #${data.slip.id}`;
      document.getElementById("advice").textContent = `"${data.slip.advice}"`;
    })
    .catch((error) => console.error("Error:", error));
}

// Initial advice fetch
window.onload = fetchAdvice;
