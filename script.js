const days = document.querySelector("[days]").children;
const data = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }
]
Array.from(days).forEach((x, i) => {
    const { amount } = data[i]
    let maxAmount = 60 // % en 60
    const percent = (amount * 100 / maxAmount).toFixed(2) + "%"
    x.setAttribute("data-tooltip", "$" + amount)
    x.style.setProperty("--percent", percent)
})