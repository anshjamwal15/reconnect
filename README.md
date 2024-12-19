# Reconnect Hybrid Mobile Application

## Overview

Reconnect is a mobile application designed for recycling and sustainability. It allows users to create an appointment for picking up recyclable items. These are done by volunteers who have been verified already. The app, created with HTML5, CSS, and TypeScript, uses the newest frameworks to run seamlessly on both Android and iOS systems.

It should be an intuitive, user-friendly, and effective application for recyclers and volunteers alike to make the process of recycling pickups very smooth and efficient. 

---

Features : 

1. **Integrated plugins:**
- **Geolocation**: It provides location tracking with very high accuracy. The user is allowed to provide a location from where the volunteer will collect it.
- **Camera**: Shooting the picture of the volunteer so that one may identify him and make the interaction over the network transparent and secure enough.

2. **Platform Compatibility:**
Prepared and tested on both Android and iOS versions, making sure everything is going great.

3. Interactive User Interface:
- **Splash Screen**: It gives a kind of screen display upon opening.
- **App Icons**: Creating icons for each type of platform in order to increase recognizability and appeal.

4. **Build and Test**:
Full test coverage, deploying only fully-tested builds on both emulators and real devices.

5. **Intuitive Design: Smoothen the text, appealing to the sight, comprehensible, and without any mistakes for a perfect user experience. 

6. **Salient Features: 
- **Pick-up Scheduling**: This allows for the scheduling of pickups for recyclable material. 
- **Volunteer Coordination**: Validated volunteers can see the lists of pickups and therefore can coordinate the rosters.

## File Structure

The project is organized to ensure maintainability and modular development. Below is a breakdown of the key directories and their purposes:

```
reconnect-main/
├── android/             # Configuration and resources specific to Android
├── ios/                 # Configuration and resources specific to iOS
├── src/                 # Application source code
│   ├── app/             # Core modules and components
│   │   ├── features/    # Feature modules
│   │   │   ├── add-photo/       # Module for photo uploads
│   │   │   ├── alloted-list/    # Volunteer task list
│   │   │   ├── create-profile/  # User and volunteer profile creation
│   │   │   ├── home/            # Home module
│   │   │   ├── location/        # Location-based services
│   │   │   ├── schedule/        # Schedule management
│   │   │   └── thank-you/       # Confirmation and gratitude module
│   ├── shared/          # Reusable components and services
│   ├── assets/          # Static assets including images and icons
│   ├── environments/    # Environment-specific configuration files
│   └── theme/           # Global theme and style configurations
├── capacitor.config.ts  # Configuration for Capacitor
├── package.json         # Project metadata and dependencies
├── angular.json         # Angular CLI configuration file
└── README.md            # Documentation for the project
```

### Key Highlights of Structure:
- **Features Module**: Contains all the functional modules such as `add-photo`, `location`, and `schedule`.
- **Shared Module**: Houses reusable components and services like buttons, APIs, and utility functions.
- **Platform Folders**: Android and iOS directories are used for platform-specific builds and resources.
- **Assets Folder**: Contains images, icons, and other static resources for the app.

This modular structure ensures scalability, readability, and ease of debugging during development.

---

## Screenshots

Here are some visuals showcasing the app's features:

1. **Home and Navigation**:
   
    ![alt text](https://github.com/anshjamwal15/reconnect/blob/main/assets/screenshots/1.jpeg?raw=true)

3. **Location Access**:

    ![alt text](https://github.com/anshjamwal15/reconnect/blob/main/assets/screenshots/2.jpeg?raw=true)
  

4. **Pickup Details**:

    ![alt text](https://github.com/anshjamwal15/reconnect/blob/main/assets/screenshots/8.jpeg?raw=true)
  

6. **Volunteer Details**:

    ![alt text](https://github.com/anshjamwal15/reconnect/blob/main/assets/screenshots/5.jpeg?raw=true)


8. **List Details**:

    ![alt text](https://github.com/anshjamwal15/reconnect/blob/main/assets/screenshots/7.jpeg?raw=true)

9. **Thank You**:

    ![alt text](https://github.com/anshjamwal15/reconnect/blob/main/assets/screenshots/6.jpeg?raw=true)

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone [<repository_url>](https://github.com/anshjamwal15/reconnect.git)
   cd reconnect-main
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Build the Application**:
   ```bash
   npm run build
   ```

4. **Deploy to Device/Emulator**:
   - Use the Capacitor CLI commands:
     ```bash
     npx cap add android
     npx cap add ios
     npx cap copy
     ```

---

## Usage

### Running the Application
- Serve and test locally with the command:
  ```bash
  ionic serve
  ```

### Platform-Specific Builds
- **For Android**:
  ```bash
  npx cap open android
  ```
- **For iOS**:
  ```bash
  npx cap open ios
  ```

---

## References
1. [Capacitor Documentation](https://capacitorjs.com/docs/)
2. [Ionic Framework Documentation](https://ionicframework.com/docs/)
3. [Angular CLI Documentation](https://angular.io/cli)
4. [Node.js Documentation](https://nodejs.org/)
5. [HTML5, CSS3, and TypeScript Reference](https://developer.mozilla.org/)
6. [Project Structure Best Practices](https://angular.io/guide/styleguide)
7. [Capacitor Plugins Reference](https://capacitorjs.com/docs/apis)
8. [Building Hybrid Apps with Ionic and Capacitor - Medium](https://medium.com/@example/building-hybrid-apps-with-ionic-and-capacitor-12345)
9. [Tips for Structuring Angular Projects - Medium](https://medium.com/@example/tips-for-structuring-angular-projects-67890)
10. [Best Practices for Hybrid Mobile Development - Medium](https://medium.com/@example/best-practices-for-hybrid-mobile-development-11223)
