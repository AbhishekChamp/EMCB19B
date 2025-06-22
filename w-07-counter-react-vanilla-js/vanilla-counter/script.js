let counters = [];
let counterId = 0;

const countersContainer = document.getElementById("counters-container");
const addCounterBtn = document.getElementById("add-counter");
const totalValueEl = document.getElementById("total-value");

function updateTotal() {
    const total = counters.reduce((sum, counter) => sum + counter.value, 0);
    totalValueEl.textContent = total;
}

function createCounterElement(counter) {
    const counterEl = document.createElement("div");
    counterEl.className = "counter";
    counterEl.dataset.id = counter.id;

    counterEl.innerHTML = `
        <button class="decrement-btn">-</button>
        <span class="counter-value">${counter.value}</span>
        <button class="increment-btn">+</button>
        <button class="reset-btn">Reset</button>
        <button class="delete-btn">Delete</button>
    `;

    // Attach event listeners
    counterEl.querySelector(".decrement-btn").addEventListener("click", () => {
        counter.value--;
        counterEl.querySelector(".counter-value").textContent = counter.value;
        updateTotal();
    });

    counterEl.querySelector(".increment-btn").addEventListener("click", () => {
        counter.value++;
        counterEl.querySelector(".counter-value").textContent = counter.value;
        updateTotal();
    });

    counterEl.querySelector(".reset-btn").addEventListener("click", () => {
        counter.value = 0;
        counterEl.querySelector(".counter-value").textContent = 0;
        updateTotal();
    });

    counterEl.querySelector(".delete-btn").addEventListener("click", () => {
        counters = counters.filter((c) => c.id !== counter.id);
        counterEl.remove();
        updateTotal();
    });

    return counterEl;
}

addCounterBtn.addEventListener("click", () => {
    const newCounter = {
        id: counterId++,
        value: 0,
    };
    counters.push(newCounter);
    countersContainer.appendChild(createCounterElement(newCounter));
    updateTotal();
});

// Initialize with one counter
addCounterBtn.click();
