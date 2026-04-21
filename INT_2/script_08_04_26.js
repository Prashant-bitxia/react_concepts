// ===================> 8/04/26 <=================================================================================
// how to can we achive the two way data binding in the js
// Reactive binding using getters & setters)

const input = document.createElement("input");

const state = { val: "hi" };

model(state, input);
document.body.appendChild(input);

function model(state, input) {
  input.value = state.val;

  input.addEventListener("input", (e) => {
    state.val = e.target.value;
  });

  let internalValue = state.val;

  Object.defineProperty(state, "val", {
    get() {
      return internalValue;
    },
    set(newValue) {
      internalValue = newValue;
      input.value = newValue;
    },
  });
}

console.log("Input Value -> ", input.value);
console.log("State value --> ", state.val);
