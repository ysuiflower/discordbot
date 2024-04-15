// index.js

// Glow - A minimalist platform designed to help users track their daily habits and cultivate positive routines.

// Glow functionality
class Glow {
    constructor() {
        this.habits = [];
        this.goals = [];
    }

    // Method to add a new habit
    addHabit(habitName, description) {
        const habit = {
            name: habitName,
            description: description
        };
        this.habits.push(habit);
    }

    // Method to add a new goal
    addGoal(goalName, description, startDate, endDate) {
        const goal = {
            name: goalName,
            description: description,
            startDate: startDate,
            endDate: endDate
        };
        this.goals.push(goal);
    }

    // Method to display all habits and goals
    displayActivities() {
        console.log("Habits:");
        this.habits.forEach(habit => {
            console.log(`- ${habit.name}: ${habit.description}`);
        });

        console.log("\nGoals:");
        this.goals.forEach(goal => {
            console.log(`- ${goal.name}: ${goal.description} (Start Date: ${goal.startDate}, End Date: ${goal.endDate})`);
        });
    }
}

// Example usage:
const glowApp = new Glow();

// Adding habits
glowApp.addHabit("Exercise", "Exercise for at least 30 minutes daily");
glowApp.addHabit("Meditation", "Practice meditation for 10 minutes every morning");

// Adding goals
glowApp.addGoal("Read More Books", "Read at least one book per week", "March 1, 2024", "December 31, 2024");
glowApp.addGoal("Learn a New Language", "Study Spanish for 30 minutes daily", "January 1, 2024", "December 31, 2024");

// Displaying habits and goals
glowApp.displayActivities();
