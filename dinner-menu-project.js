// Have the Main Menu and a Sides Menu
// You get one entree and two side choices at regular cost.
// - show them the entire menu (print out)
// - A user selects an entree.
// - “Waitress” makes a comment based on their selection
// - comment can either be a comparison of the two items, or random comment pulled from a comment vault.
// - Tell them the price
// - repeat the above options for side choices (comment and a price)
// - total up the cost

// BONUS
// Have breakfast, lunch, and dinner menu. Breakfast has different items, lunch and dinner have the same items but are different prices.

// BONUS: Allow for item customization (how items are prepared, decide additional cost implications)

// Main menu

mainMenu = {
    first: "steak",
    second: "fish",
    third: "pasta"
}
mainMenuPrice = 20

// Side Menu

sideMenu = {
    first: "fries",
    second: "sauce",
    third: "bread"
}

sideMenuPrice = 10

// Breakfast Menu

BFastMenu = {
    first: "coffee",
    second: "tea",
    third: "hot cocoa"
}

BFastMenuPrice = 15



// Lunch Menu

LunchMenu = {
    first: "salad",
    second: "chicken",
    third: "fish"
}

LunchMenuPrice = {
    first: 15,
    second: 5,
    third: 20
}

// Dinner Menu

DinnerMenu = {
    first: "salad",
    second: "chicken",
    third: "fish"
}

DinnerMenuPrice = {
    first: 15,
    second: 10,
    third: 5
}

// Custom items

CustomSalad = {
    first: "vegetal",
    second: "pasta"
}

CustomSaladPrice = 2

CustomMeatAndFish = {
    first: "almost raw",
    second: "Fifty-fifty",
    third: "overcooked"
}

CustomMeatPrice = 5

// printed menu

console.log(mainMenu)
console.log(sideMenu)
console.log(BFastMenu)
console.log(LunchMenu)
console.log(DinnerMenu)

// Have the Main Menu and a Sides Menu
// You get one entree and two side choices at regular cost.
// - show them the entire menu (print out)
// - A user selects an entree.
// - “Waitress” makes a comment based on their selection
// - comment can either be a comparison of the two items, or random comment pulled from a comment vault.
// - Tell them the price
// - repeat the above options for side choices (comment and a price)
// - total up the cost

// BONUS
// Have breakfast, lunch, and dinner menu. Breakfast has different items, lunch and dinner have the same items but are different prices.

// BONUS: Allow for item customization (how items are prepared, decide additional cost implications)

// Menu type

MenuType = {
    first: "Breakfast",
    second: "Lunch",
    third: "Dinner"
}
// Main menu

mainMenu = {
    first: "steak",
    second: "fish",
    third: "pasta"
}
mainMenuPrice = 20

// Side Menu

sideMenu = {
    first: "fries",
    second: "sauce",
    third: "bread"
}

sideMenuPrice = 10

// Breakfast Menu

BFastMenu = {
    first: "coffee",
    second: "tea",
    third: "hot cocoa"
}

BFastMenuPrice = 15



// Lunch Menu

LunchMenu = {
    first: "salad",
    second: "chicken",
    third: "fish"
}

LunchMenuPrice = {
    first: 15,
    second: 5,
    third: 20
}

// Dinner Menu

DinnerMenu = {
    first: "salad",
    second: "chicken",
    third: "fish"
}

DinnerMenuPrice = {
    first: 15,
    second: 10,
    third: 5
}

// Custom items

CustomSalad = {
    first: "vegetal",
    second: "pasta"
}

CustomSaladPrice = 2

CustomMeatAndFish = {
    first: "almost raw",
    second: "Fifty-fifty",
    third: "overcooked"
}

CustomMeatPrice = 5

// prompt to select the menu type

MenuChoice = prompt("Please, choose a menu type", "Enter your choice")
if (MenuChoice === MenuType.first || MenuChoice === MenuType.second || MenuChoice === MenuType.third); {
    alert("Good choice")
    console.log(MenuChoice) } else {
        throw Error("Choose a valid menu")
    }
    






// prompt to choose a menu