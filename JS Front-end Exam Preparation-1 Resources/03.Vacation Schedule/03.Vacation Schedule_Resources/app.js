const baseURL = "http://localhost:3030/jsonstore/tasks";

const loadVacationBtn = document.getElementById('load-vacations');
loadVacationBtn.addEventListener('click', (e) => {
    fetch(baseURL)
        .then(res => res.json())
        .then(data => console.log(Object.entries(data)))
});

/*
<div class="container">
    <h2>Carren Davis</h2>
    <h3>2023-06-09</h3>
    <h3>5</h3>
    <button class="change-btn">Change</button>
    <button class="done-btn">Done</button>
</div>
*/