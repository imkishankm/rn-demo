This project is a React Native app that renders 10,000+ randomly generated name strings using SectionList, 
Grouped by the first letter of each name. It showcases a modular, maintainable, and responsive UI with real-time filtering and sorting.

 Features - 

- SectionList with Sticky Headers: Items grouped by the first letter of the name, with sticky section headers.

- Real-Time Filtering: Instantly filter the list by typing into the search input.

- Live Sorting: Sorting of names by A–Z and Z–A.

- Modular and Maintainable Code: Clean separation of logic and UI for scalability.


 Performance Optimizations -

To ensure smooth performance with large datasets (10,000+ items), the following optimizations are implemented:

- initialNumToRender: Controls how many items are rendered initially.

- maxToRenderPerBatch: Limits how many items are rendered in a single batch.

- windowSize: Increases the rendering window for smoother scrolling.

- removeClippedSubviews: Removes off-screen items from the native view hierarchy.

- useMemo: Memoizes expensive operations (grouping/sorting).

- useCallback: Prevents unnecessary re-renders of components.

- React.memo: Optimizes functional components by avoiding re-renders when props haven't changed.


**Note**: To handle large data sets, we can implement pagination to improve initial rendering performance, and load more data as needed. However, in this case, pagination is not being used.

# Getting Started ---------


**Note**: Make sure you have completed Set Up of Environment in your system.


# Step 1: Clone app from repo

```sh
git clone https://github.com/imkishankm/rn-demo.git
cd rn-demo
```

## Step 2: Install node module

after cloning the project install node module using - 

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

✅ Great! The app is now running successfully. You can start using it.