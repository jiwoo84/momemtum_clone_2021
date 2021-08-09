const planForm = document.getElementById("plan-form");
const planInput = planForm.querySelector("input");
const planList = document.getElementById("plan-list");

let plans = [];

const PLANS_KEY = "plans";

function savePlans() {
  localStorage.setItem(PLANS_KEY, JSON.stringify(plans));
}

function deletePlan(event) {
  const li = event.target.parentElement;
  li.remove();
  plans = plans.filter((item) => item.id !== parseInt(li.id));
  savePlans();
}

function paintPlan(newPlan) {
  const li = document.createElement("li");
  li.id = newPlan.id;
  const span = document.createElement("span");
  span.innerText = newPlan.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deletePlan);
  li.appendChild(span);
  li.appendChild(button);
  planList.appendChild(li);
}

function handlePlanSubmit(event) {
  event.preventDefault();
  const newPlan = planInput.value;
  planInput.value = "";
  const newPlanObj = {
    text: newPlan,
    id: Date.now(),
  };
  plans.push(newPlanObj);
  paintPlan(newPlanObj);
  savePlans();
}

planForm.addEventListener("submit", handlePlanSubmit);

const savedPlans = localStorage.getItem(PLANS_KEY);

if (savedPlans !== null) {
  const parsedPlans = JSON.parse(savedPlans);
  plans = parsedPlans;
  parsedPlans.forEach(paintPlan);
}
