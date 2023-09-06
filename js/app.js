class CalorieTracker {
	constructor() {
		this._calorieLimit = 2000;
		this._totalCalories = 0;
		this._meals = [];
		this._workouts = [];

		this._displayCaloriesTotal();
	}

	/* Public Мethods/API */
	addMeal(meal) {
		this._meals.push(meal);
		this._totalCalories += meal.calories;
		this.meal = meal;
		this._render();
	}
	addWorkout(workout) {
		const meal = this.meal;
		this._workouts.push(workout);
		this._totalCalories -= workout.calories;
		this.workout = workout;
		this._render();
	}

	/*  Private Methods */

	_displayCaloriesTotal() {
		const totalCaloriesEl = document.getElementById('calories-total');
		totalCaloriesEl.innerHTML = this._totalCalories;
	}

	_render() {
		this._displayCaloriesTotal();
	}
}

class Meal {
	constructor(name, calories) {
		this.id = Math.random().toString(16).slice(2);
		this.name = name;
		this.calories = calories;
	}
}

class Workout {
	constructor(name, calories) {
		this.id = Math.random().toString(16).slice(2);
		this.name = name;
		this.calories = calories;
	}
}

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
const lunch = new Meal('Lunch', 350);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);

const run = new Workout('run', 300);
tracker.addWorkout(run);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);
