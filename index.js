#!/usr/bin/env node
const fs = require("fs");

const fileName = "tasks.json";

// Ensure the file exists
if (!fs.existsSync(fileName)) {
  fs.writeFileSync(fileName, "[]");
}

// Read existing tasks
let tasks = JSON.parse(fs.readFileSync(fileName, "utf-8") || "[]");

// Get command-line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("\nUsage:");
  console.log('  task-cli add "Task description"     # Add a new task');
  console.log("  task-cli update <id> <new task>    # Update a task description");
  console.log("  task-cli delete <id>              # Delete a task");
  console.log("  task-cli --done <id>              # Mark a task as completed");
  console.log("  task-cli --todo <id>              # Mark a task as todo");
  console.log("  task-cli --in-progress <id>       # Mark a task as in-progress");
  console.log("  task-cli list                     # List all tasks");
  console.log("  task-cli list done                # List completed tasks");
  console.log("  task-cli list todo                # List pending tasks");
  console.log("  task-cli list in-progress         # List in-progress tasks\n");
  process.exit(1);
}

// ✅ Update task description
if (args[0] === "update" && args[1]) {
  const taskId = parseInt(args[1]);
  const newTask = args.slice(2).join(" ");

  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    console.log(`❌ Task with ID ${taskId} not found.`);
    process.exit(1);
  }

  task.task = newTask;
  task.updatedAt = new Date().toLocaleString();

  fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
  console.log(`✅ Task ${taskId} updated!`);
  process.exit(0);
}

// ✅ Delete task
if (args[0] === "delete" && args[1]) {
  const taskId = parseInt(args[1]);

  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    console.log(`❌ Task with ID ${taskId} not found.`);
    process.exit(1);
  }

  tasks.splice(taskIndex, 1);
  fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
  console.log(`✅ Task ${taskId} deleted successfully!`);
  process.exit(0);
}

// ✅ Mark task as completed, todo, or in-progress
const statusUpdates = {
  "--done": "done",
  "--todo": "todo",
  "--in-progress": "in-progress",
};

if (statusUpdates[args[0]] && args[1]) {
  const taskId = parseInt(args[1]);

  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    console.log(`❌ Task with ID ${taskId} not found.`);
    process.exit(1);
  }

  task.status = statusUpdates[args[0]];
  task.updatedAt = new Date().toLocaleString();

  fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
  console.log(`✅ Task ${taskId} marked as ${task.status}!`);
  process.exit(0);
}

// ✅ Add a new task
if (args[0] === "add") {
  const task = args.slice(1).join(" ");
  tasks.push({
    id: tasks.length + 1,
    task,
    status: "todo",
    createdAt: new Date().toLocaleString(),
    updatedAt: "",
  });

  fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
  console.log(`✅ Task added: "${task}"`);
  process.exit(0);
}

// ✅ List tasks (all, done, todo, in-progress)
if (args[0] === "list") {
  let filteredTasks = tasks;

  if (args[1]) {
    filteredTasks = tasks.filter((task) => task.status === args[1]);
    if (filteredTasks.length === 0) {
      console.log(`❌ No ${args[1]} tasks found.`);
      process.exit(0);
    }
  } else if (tasks.length === 0) {
    console.log("❌ No tasks found.");
    process.exit(0);
  }

  console.log(`\n📌 ${args[1] ? args[1].toUpperCase() : "ALL"} TASKS:\n`);
  filteredTasks.forEach((task) => {
    console.log(
      `${task.id}. ${task.task} (${task.status.toUpperCase()}) - Created: ${task.createdAt}`
    );
  });
  console.log("\n");
  process.exit(0);
}

// If no valid command is found
console.log("❌ Invalid command. Use `task-cli` for help.");
process.exit(1);
