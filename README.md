# 📝 Task CLI - Command Line Task Manager

Task CLI is a **simple and efficient command-line tool** for managing tasks.  
You can **add, update, delete, and list tasks** directly from your terminal.

## 🚀 Features
- ✅ **Add tasks**
- ✅ **Update task descriptions**
- ✅ **Delete tasks**
- ✅ **Mark tasks as done, todo, or in-progress**
- ✅ **List all tasks or filter by status**
- ✅ **Simple and easy-to-use interface**

---

## 📦 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/task-cli.git
cd task-cli
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Make the Script Executable
sh
Copy
Edit
chmod +x index.js
4️⃣ Link it as a Global Command
sh
Copy
Edit
npm link
Now you can use task-cli anywhere in your terminal!

📌 Usage Instructions
Run the following command to see available options:

sh
Copy
Edit
task-cli help
✅ Output:

bash
Copy
Edit
📌 Task CLI Usage:

  task-cli add "Task description"     # Add a new task
  task-cli update <id> <new task>    # Update a task description
  task-cli delete <id>              # Delete a task
  task-cli --done <id>              # Mark a task as completed
  task-cli --todo <id>              # Mark a task as todo
  task-cli --in-progress <id>       # Mark a task as in-progress
  task-cli list                     # List all tasks
  task-cli list done                # List completed tasks
  task-cli list todo                # List pending tasks
  task-cli list in-progress         # List in-progress tasks
  task-cli help                     # Show usage instructions
✨ Examples
✅ Add a Task
sh
Copy
Edit
task-cli add "Complete assignment"
🔹 Output:

arduino
Copy
Edit
✅ Task added: "Complete assignment"
✅ Update a Task
sh
Copy
Edit
task-cli update 1 "Submit assignment to teacher"
🔹 Output:

arduino
Copy
Edit
✅ Task 1 updated!
✅ Delete a Task
sh
Copy
Edit
task-cli delete 1
🔹 Output:

arduino
Copy
Edit
✅ Task 1 deleted successfully!
✅ Mark a Task as Completed
sh
Copy
Edit
task-cli --done 2
🔹 Output:

arduino
Copy
Edit
✅ Task 2 marked as done!
✅ List All Tasks
sh
Copy
Edit
task-cli list
🔹 Output:

yaml
Copy
Edit
📌 ALL TASKS:

1. Buy groceries (TODO) - Created: 12/02/2025
2. Complete the project (DONE) - Created: 11/02/2025
✅ List Only Completed Tasks
sh
Copy
Edit
task-cli list done
🔹 Output:

yaml
Copy
Edit
📌 DONE TASKS:

2. Complete the project (DONE) - Created: 11/02/2025
✅ List Only In-Progress Tasks
sh
Copy
Edit
task-cli list in-progress
🔹 Output:

pgsql
Copy
Edit
❌ No in-progress tasks found.
🛠️ Uninstall
To remove the CLI:

sh
Copy
Edit
npm unlink
📄 License
This project is open-source and available under the MIT License.

⭐ Contribute
Feel free to fork this project and submit pull requests if you'd like to improve it! 😃

