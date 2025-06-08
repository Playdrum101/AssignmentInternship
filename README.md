# My Tasks App

**Author:** Sourabh

## Description
A simple and modern React Native app to manage your daily tasks. Add, complete, edit, prioritize, and delete tasks with ease. Get local notifications as reminders for your tasks. All data is saved locally and persists even after closing the app.

---

## Features
- **Add Tasks:** Enter a new task and add it to your list.
- **Task List Display:** See all your tasks in a scrollable list.
- **Task Completion:** Mark tasks as complete/incomplete with a checkbox and visual distinction.
- **Delete Task:** Remove tasks with a trash icon.
- **Local Notifications:** Get a reminder notification for each new task.

### Bonus Features
- **Data Persistence:** Tasks are saved locally using AsyncStorage and persist after app restarts.
- **Edit Task:** Edit the text of existing tasks.
- **Task Prioritization:** Set tasks as high, medium, or low priority with color coding.
- **Cancel Notifications:** When a task is marked complete, its notification is cancelled.
- **Modern UI:** Clean, user-friendly interface with icons and color highlights.

---

## Setup & Running the App

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/client) app on your iOS/Android device

### Steps
1. **Clone the repository:**
   ```
   git clone <your-repo-url>
   cd my-tasks-app
   ```
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Start the Expo server:**
   ```
   npx expo start
   ```
4. **Open the app:**
   - Scan the QR code in your terminal with the Expo Go app on your phone.
   - The app will load and you can start managing your tasks!

---

## Challenges & Design Choices
- **Expo Router:** The project uses the new Expo Router structure, so the main app code is in `app/(tabs)/index.tsx`.
- **TypeScript & JavaScript:** The main screen is in TypeScript, while the Task component is in JavaScript for simplicity and compatibility.
- **Notification Handling:** Notifications are scheduled for each task and cancelled if the task is completed.
- **Persistence:** AsyncStorage is used for reliable local data storage.
- **UI/UX:** The app uses color coding, icons, and a modern layout for a pleasant user experience.

---

## Author
Sourabh

---

If you have any questions or want to contribute, feel free to open an issue or pull request!

## Technical Details

- Built with React Native and Expo
- Uses AsyncStorage for data persistence
- Implements Expo Notifications for task reminders
- Follows modern React practices with hooks
- Implements proper error handling and user feedback

## Project Structure

```
my-tasks-app/
├── src/
│   └── components/
│       └── Task.js
├── App.js
├── package.json
└── README.md
```

## Contributing

Feel free to submit issues and enhancement requests! 
