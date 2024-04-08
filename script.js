"use strict";

const vegetarian = {
  name: "Vegetarian",
  description: "No meat, poultry, or fish",
  ingridients: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
  ],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: `Oatmeal with Honey:
      
      Instructions:
      In a small saucepan, bring the milk to a gentle simmer over medium heat.
      Stir in the rolled oats and reduce the heat to low.
      Cook the oats, stirring occasionally, for about 5 minutes or until they reach your desired consistency. Add more milk if needed.
      Once the oats are cooked, remove the saucepan from the heat.
      Stir in the honey or sweetener of your choice.
      Serve the oatmeal hot in a bowl.
      Add your favorite toppings such as sliced bananas, berries, nuts, seeds, or a sprinkle of cinnamon.
      Enjoy your delicious and nutritious oatmeal breakfast!`,
      ingredients: [
        "1/2 cup rolled oats",
        "1 cup milk (or water for a dairy-free option)",
        "1 tablespoon honey (or maple syrup for a vegan option)",
        "Optional toppings: sliced bananas, berries, nuts, seeds, cinnamon",
      ],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: `Fresh Garden Salad:
      Instructions:
      In a large bowl, combine the chopped lettuce, halved cherry tomatoes, and sliced cucumber. If using any optional add-ins, add them to the bowl as well.
      In a small bowl, whisk together the olive oil and balsamic vinegar (or lemon juice) to make the dressing. Season with salt and pepper to taste.
      Drizzle the dressing over the salad ingredients in the large bowl.
      Gently toss the salad until all the ingredients are evenly coated with the dressing.
      Serve the fresh garden salad immediately as a light and nutritious lunch option.
      Enjoy your delicious and healthy salad!`,
      ingredients: [
        "2 cups lettuce (any variety you prefer),washed and chopped",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, sliced",
        "Optional add-ins: sliced carrots, bell peppers, red onions, avocado, etc.",
        "2 tablespoons olive oil",
        "1 tablespoon balsamic vinegar (or lemon juice for a tangy option)",
        "Salt and pepper to taste",
      ],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: `Vegetable Stir-Fry
    
      Instructions:
      
      Heat olive oil in a large skillet or wok over medium-high heat.
      Add minced garlic and sliced onion to the skillet, and sauté for 2-3 minutes until fragrant and translucent.
      Add sliced bell pepper, julienned carrots, broccoli florets, snow peas, and sliced mushrooms to the skillet. Stir-fry the vegetables for 5-7 minutes until they are tender-crisp.
      Push the vegetables to one side of the skillet and add cubed tofu to the empty space. Cook the tofu for 3-4 minutes, allowing it to brown on all sides.
      Once the tofu is golden brown, combine it with the stir-fried vegetables in the skillet.
      Season the vegetable stir-fry with salt and pepper to taste. Drizzle soy sauce (or tamari) over the vegetables and tofu, and toss everything together to coat evenly.
      If desired, add sesame oil for extra flavor and toss again to combine.
      Remove the skillet from heat and serve the vegetable stir-fry hot over cooked rice or noodles.
      `,
      ingredients: [
        "2 cloves garlic, minced",
        "1 onion, thinly sliced",
        "1 bell pepper, thinly sliced (any color you prefer)",
        "2 carrots, julienned",
        "1 cup broccoli florets",
        "1 cup snow peas, trimmed",
        "1 cup mushrooms, sliced",
        "1 block firm tofu, drained and cubed",
        "Salt and pepper to taste",
        "2 tablespoons soy sauce (or tamari for a gluten-free option)",
        "1 tablespoon sesame oil (optional)",
        "Cooked rice or noodles for serving",
      ],
      calories: 500,
    },
  ],
};
const vegan = {
  name: "Vegan",
  description: "Excludes all animal products",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};

const pescetarian = {
  name: "Pescetarian",
  description: "No meat or poultry, but includes fish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};

const flexitarian = {
  name: "Flexitarian",
  description: "Primarily vegetarian but occasionally eats meat or fish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
    "Fish",
    "Poultry",
    "Meat",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const pollotarian = {
  name: "Pollotarian",
  description: "Eats poultry but not meat or fish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
    "Poultry",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const lactoVegetarian = {
  name: "Lacto-Vegetarian",
  description: "Vegetarian plus dairy",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const ovoVegetarian = {
  name: "Ovo-Vegetarian",
  description: "Vegetarian plus eggs",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Eggs",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const lactoOvoVegetarian = {
  name: "Lacto-Ovo Vegetarian",
  description: "Vegetarian plus dairy and eggs",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Eggs",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const rawVegan = {
  name: "Raw Vegan",
  description: "Vegan plus uncooked food",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const macrobiotic = {
  name: "Macrobiotic",
  description: "Vegan plus whole grains",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Whole grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const glutenFree = {
  name: "Gluten-Free",
  description: "No gluten",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const keto = {
  name: "Keto",
  description: "High fat, low carb",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Meat",
    "Poultry",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const paleo = {
  name: "Paleo",
  description: "No grains, legumes, or dairy",
  ingridientsTheyCanEat: ["Fruits", "Vegetables", "Nuts", "Seeds", "Meat"],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const mediterranean = {
  name: "Mediterranean",
  description: "Based on traditional Mediterranean diet",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const halal = {
  name: "Halal",
  description: "No pork",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Poultry",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};
const kosher = {
  name: "Kosher",
  description: "No pork or shellfish",
  ingridientsTheyCanEat: [
    "Fruits",
    "Vegetables",
    "Grains",
    "Legumes",
    "Nuts",
    "Seeds",
    "Dairy",
    "Poultry",
    "Fish",
  ],
  recipes: [],
  dailyMenu: [
    {
      name: "Breakfast",
      recipe: "Oatmeal",
      ingredients: ["Oats", "Milk", "Honey"],
      calories: 300,
    },
    {
      name: "Lunch",
      recipe: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumbers"],
      calories: 400,
    },
    {
      name: "Dinner",
      recipe: "Grilled Chicken",
      ingredients: ["Chicken", "Salt", "Pepper"],
      calories: 500,
    },
  ],
};

const dietaryLifestyles = [
  vegetarian,
  vegan,
  pescetarian,
  flexitarian,
  pollotarian,
  lactoVegetarian,
  ovoVegetarian,
  lactoOvoVegetarian,
  rawVegan,
  macrobiotic,
  glutenFree,
  keto,
  paleo,
  mediterranean,
  halal,
  kosher,
];

// aboutContainer.innerHTML = about;
// Sticky Navigation
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
// };
// const signupObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });
// signupObserver.observe(signupForm);

// Get the signup and login buttons
const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");
const aboutUs = document.querySelector("#tab3");
const buttons = document.querySelectorAll(".btn");
const tabs = document.querySelectorAll(".tab");
const thanksForSignUp = document.querySelector("#thanksForSignup");
const title = document.querySelector(".title");
const cookiesBtn = document.getElementById("accept-cookies");
const cookiesMessage = document.getElementById("cookies-message");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

thanksForSignUp.classList.add("hidden");
signupForm.classList.add("hidden-btn");
loginForm.classList.add("hidden-btn");
aboutUs.classList.add("hidden-btn");
cookiesBtn.classList.remove("hideCookies");
cookiesMessage.classList.remove("hideCookies");
tab1.classList.add("hidden-btn");
tab2.classList.add("hidden-btn");

const hideForms = () => {
  signupForm.classList.toggle("hidden");
  loginForm.classList.toggle("hidden");
};

// Add event listener to the buttons
cookiesBtn.addEventListener("click", (e) => {
  cookiesMessage.style.display = "none";
  cookiesBtn.classList.add("hideCookies");
});

// Add event listener to the signup button
const landPage = buttons.forEach((b, index) => {
  b.addEventListener("click", function (e) {
    e.preventDefault();

    const tabId = this.dataset.tab;

    // Show the signup form when the signup button is clicked
    if (tabId === "tab1") {
      signupForm.classList.remove("hidden-btn");
      document
        .getElementById(`${tabId}`)
        .classList.remove("hidden-btn", "hidden");
      // move #tab1 to the top of the screen
      document.getElementById(`${tabId}`);
    }
    tabs.forEach((tab) => {
      tab.classList.add("hidden-btn");
    });

    // Hide all buttons when one of them is clicked
    buttons.forEach((button) => {
      button.style.display = "none";
    });

    // show the login form when the login button is clicked
    if (tabId === "tab2") {
      loginForm.classList.remove("hidden-btn");
    }
    document.getElementById(`${tabId}`).classList.remove("hidden-btn");

    // Show the about section when the about button is clicked
    if (tabId === "tab3") {
      aboutUs.classList.remove("hidden");
      section2.scrollIntoView({ behavior: "smooth" });
      landPage();
    }
  });
  hideForms();

  // Add some style to the buttons
  b.style.margin = "10px";
  b.style.padding = "10px";
  b.style.backgroundColor = "orange"; // Green
  b.style.border = "none";
  b.style.color = "white";
  b.style.textAlign = "center";
  b.style.textDecoration = "none";
  b.style.display = "inline-block";
  b.style.fontSize = "25px";
  b.style.transitionDuration = "0.4s";
  b.style.cursor = "pointer";

  // Position the buttons vertically and in the middle of the screen
  b.style.position = "absolute";
  b.style.top = `calc(35% + ${index * 70}px)`;
  b.style.left = "50%";
  b.style.transform = "translate(-50%, -50%)";

  // Change the color when mouse hovers over the button
  b.onmouseover = function () {
    this.style.backgroundColor = "orangered"; // Darker green
    this.style.boxShadow =
      "0 0 10px orangered, 0 0 20px orangered, 0 0 40px orangered"; // Add lighting effect
  };

  // Change the color back when mouse leaves the button
  b.onmouseout = function () {
    this.style.backgroundColor = "orange"; // Green
    this.style.boxShadow = "none"; // Remove lighting effect
  };
});

// Add observer to the title

// Add event listener to the login form's submit button
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginForm.classList.remove("hidden-btn");
  const email = document.querySelector("#Lemail").value;
  const password = document.querySelector("#Lpassword").value;

  const user = accounts.find((account) => account.email === email);
  if (user.password === password) {
    console.log("Login successful");
  } else {
    console.log("Login failed");
  }
});
// Add event listener to the signup form's submit button
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const ThanksForSignUp = document.querySelector("#thanksForSignup");

  // Create a new user object
  const user = {
    name: name,
    surname: surname,
    email: email,
    password: password,
    username: `${surname}`.toLowerCase() + `${name[0]}`.toLowerCase(),
  };
  // Show the thanks for signing up message
  ThanksForSignUp.classList.remove("hidden-btn");

  setTimeout(() => {
    ThanksForSignUp.classList.add("hidden-btn");
    loginForm.classList.remove("hidden-btn");
    tab2.classList.remove("hidden-btn");
  }, 2000);
  document.getElementById("tab1").classList.toggle("hidden-btn");

  // Push user to the accounts array
  accounts.push(user);
  console.log(accounts);
  signupForm.classList.add("hidden-btn");
});
// User Accounts
const accounts = [];

// Main Application

// Choose Your Dietary Lifestyle
const chooseDiet = (dietList) => {
  let dietOptions = dietList
    .map((diet, i) => `${i + 1}: ${diet.name}`)
    .join("\n");
  const chosenDiet = Number(
    prompt(`Choose Your Dietary Lifestyle:\n${dietOptions}`) - 1
  );
  return chosenDiet;
};
const selectedDiet = chooseDiet(dietaryLifestyles);
const preference = dietaryLifestyles[selectedDiet];
const dailyRandom = preference.dailyMenu[Math.trunc(Math.random() * 3)].name;

let dailyMenuIndex = preference.dailyMenu.findIndex(
  (menu) => menu.name === dailyRandom
);
const ingredients = preference.dailyMenu[dailyMenuIndex].ingredients
  .map((ingredient) => ingredient)
  .join("\n");
console.log(
  `You have chosen ${preference.name} diet and here is your daily recipe for ${dailyRandom}, will be with ingredients: \n${ingredients} and calories: ${preference.dailyMenu[dailyMenuIndex].calories}, and these are the insturctions: ${preference.dailyMenu[dailyMenuIndex].recipe}`
);

// Display daily menu with recipes
// Filter recipes based on dietary preferences
// Calculate total daily calorie intake
// Track user streak for following dish recipes
// Offer premium subscription for monthly meal planning
// Choose Your Dietary Lifestyle

startApp();

function startApp() {
  displayDailyMenu();
  filterRecipes();
  // filterAlergy()
  calculateCalories();
  trackStreak();
  offerSubscription();
}

function displayDailyMenu() {
  // Display daily menu with recipes
}

function filterRecipes() {
  // Allow users to filter recipes based on diet preferences
}

function calculateCalories() {
  // Calculate total daily calorie intake
}

function trackStreak() {
  // Track user streak for following dish recipes
}

function offerSubscription() {
  // Offer premium subscription for weekly/monthly meal planning
  // Handle subscription purchase
}
