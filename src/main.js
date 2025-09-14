// import './style.css'

// const counterContainer = document.querySelector("#lessonApp");
// let shownNumber = counterContainer.querySelector("#number");

// let num = 0;

// function shoWwarning() {
//     const warningElement = document.createElement("p");
//     warningElement.id = "warning-element";
//     warningElement.innerHTML = `Warning: Number is negative`;
//     shownNumber.after(warningElement);
// }

// function removeWarning() {
//     console.warn("the value is no longer negative");
//     const warningElement = counterContainer.querySelector("#warning-element");
//     if (!warningElement) return;
//     warningElement.remove();
// }

// counterContainer.querySelector("#button-1").addEventListener("click", () => {
//     num++; // increment
//     if (num === 0) removeWarning();
//     shownNumber.innerHTML = num;
// });

// counterContainer.querySelector("#button-2").addEventListener("click", () => {
//     num--; // decrement
//     if (num === -1) shoWwarning();
//     shownNumber.innerHTML = num;
// });