# Jannik's Chess Coach — Mobile Android Setup Guide

This project is configured as a single unified codebase for both **Web** and **Android** using **Capacitor**.

---

## 🚀 How to Build & Install the App on Your Android Phone

### Step 1: Open the Project in Android Studio
1. Launch **Android Studio**.
2. Click **Open** (or `File > Open`).
3. Select the `android` folder inside this project:
   ```
   c:\Users\janni\CodingProjects\ChessApp\android
   ```
4. On the very first open, Android Studio will take 1–2 minutes to automatically download the Android build tools and sync Gradle.

---

### Step 2: Install on Your Phone (2 Options)

#### Option A: Direct One-Click USB Install (Fastest for testing)
1. On your Android phone, enable **Developer Options** and turn on **USB Debugging**:
   - Go to phone **Settings > About Phone**.
   - Tap **Build Number** 7 times until it says *"You are now a developer!"*.
   - Go to **Settings > System / Additional Settings > Developer Options** and enable **USB Debugging**.
2. Connect your phone to your computer with a USB cable (allow USB debugging prompt on phone).
3. In Android Studio, your phone will appear in the top device toolbar dropdown.
4. Click the green ▶ **Run** button. The app will compile, install on your phone, and launch automatically!

#### Option B: Build a Standalone `.apk` File (To share or install without USB debugging)
1. In Android Studio, click:
   ```
   Build > Build Bundle(s) / APK(s) > Build APK(s)
   ```
2. Once the build completes (usually 30–60 seconds), a pop-up appears in the bottom right corner with a **"locate"** link.
3. Clicking **locate** opens the folder containing:
   ```
   app-debug.apk
   ```
4. Transfer this `.apk` to your phone (via USB, Google Drive, email, or WhatsApp), tap the file on your phone, and tap **Install**!

---

## 🔄 Making Future Updates to the App
When you make changes to HTML, CSS, JavaScript, or add new puzzles in `puzzles.js`:

1. Run this single command in your terminal:
   ```bash
   npm run sync
   ```
   *(This copies the latest web changes into the Android app project in 1 second).*
2. In Android Studio, click ▶ **Run** or **Build APK** again to generate the updated app.

---

## 🎨 Customizing the App Icon (Optional)
Android Studio has a built-in icon creator:
1. In Android Studio, right-click the `app` folder in the project sidebar.
2. Select **New > Image Asset**.
3. Choose **Asset Type: Image** or **Clip Art** (or select `favicon.svg`), customize background color, and click **Finish**.
