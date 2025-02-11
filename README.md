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
```bash
git clone https://github.com/yourusername/task-cli.git
cd task-cli
```
###2️⃣ Install Dependencies
```bash
npm install
```
###3️⃣ Link it as a Global Command
```bash
npm link
```
Now you can use task-cli in your terminal!

📌 Usage Instructions
Run the following command to see available options:

```bash
task-cli
```
✅ Output:

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
  task-cli help                     # ```bashow usage instructions
  
✨ Examples
✅ Add a Task
```bash

task-cli add "Complete assignment"
```
🔹 Output:



✅ Task added: "Complete assignment"
✅ Update a Task
```bash

task-cli update 1 "Submit assignment to teacher"
```
🔹 Output:



✅ Task 1 updated!
✅ Delete a Task
```bash

task-cli delete 1
```
🔹 Output:


✅ Task 1 deleted successfully!
✅ Mark a Task as Completed
```bash

task-cli --done 2
```
🔹 Output:



✅ Task 2 marked as done!
✅ List All Tasks
```bash

task-cli list
```
🔹 Output:



📌 ALL TASKS:

1. Buy groceries (TODO) - Created: 12/02/2025
2. Complete the project (DONE) - Created: 11/02/2025
✅ List Only Completed Tasks
```bash

task-cli list done
```
🔹 Output:



📌 DONE TASKS:

2. Complete the project (DONE) - Created: 11/02/2025
✅ List Only In-Progress Tasks
```bash

task-cli list in-progress
```
🔹 Output:


❌ No in-progress tasks found.
🛠️ Uninstall
To remove the CLI:

```bash

npm unlink
```
📄 License
This project is open-source and available under the MIT License.

⭐ Contribute
Feel free to fork this project and submit pull requests if you'd like to improve it! 😃

