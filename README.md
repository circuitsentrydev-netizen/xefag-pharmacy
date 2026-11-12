# 💊 Xefag Pharmacy Mobile Application

A modern, user-friendly mobile pharmacy application built with React Native and Expo. Xefag Pharmacy provides a clean and intuitive shopping experience, allowing users to explore pharmacy products, view product information, select product durations, adjust quantities, and proceed to the purchasing interface.

---

## 🚀 Key Features

* **Product Display:** Clean product presentation with dedicated product images.
* **Product Information:** Displays product details in an organised layout.
* **Duration Selection:** Allows users to select their preferred product duration.
* **Quantity Selection:** Interactive quantity selector for product orders.
* **Shopping Interface:** Includes a dedicated purchasing button.
* **Reusable Components:** Built with modular React Native components.
* **Responsive Design:** Designed to provide a consistent mobile experience.

---

## 🛠️ Built With

* **Framework:** React Native
* **Development Platform:** Expo
* **Programming Language:** TypeScript
* **Navigation:** Expo Router
* **Styling:** React Native StyleSheet
* **Development Tools:** Node.js and npm

---

## 🏁 Getting Started

Follow these steps to set up the application locally on your machine.

### Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/)
* [Expo Go](https://expo.dev/go) (for testing on a physical mobile device)
* npm (included with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/circuitsentrydev-netizen/xefag-pharmacy.git
   cd xefag-pharmacy
   ```

2. **Install project dependencies:**

   ```bash
   npm install
   ```

3. **Start the Expo development server:**

   ```bash
   npx expo start
   ```

4. **Run the application:**

   * Scan the QR code using Expo Go.
   * Press `a` to launch on an Android emulator.
   * Press `i` to launch on an iOS simulator (macOS required).

---

## 📁 Project Structure

```text
xefag-pharmacy/
│
├── app/
│   ├── index.tsx
│   └── _layout.tsx
│
├── components/
│   ├── Header.tsx
│   ├── ProductTabs.tsx
│   ├── ProductDisplay.tsx
│   ├── ProductDetails.tsx
│   ├── DurationSelector.tsx
│   ├── QuantitySelector.tsx
│   └── BuyButton.tsx
│
├── assets/
│   └── images/
│
├── package.json
└── README.md
```

---

## 🧩 Application Components

### Product Display
* Displays the selected pharmacy product.
* Uses product images stored in the assets directory.
* Maintains image proportions within the display area.

### Duration Selector
* Provides an interactive product duration selection interface.

### Quantity Selector
* Allows users to adjust the quantity of the selected product.

### Product Details
* Presents relevant product information.

### Buy Button
* Provides the purchasing interface for selected products.

---

## ▶️ Development

To start working on the application, open the project in your preferred code editor and modify the components inside the `app` and `components` directories.

Run the following command whenever you want to start the development server:

```bash
npx expo start
```

---

## 👨‍💻 Author

**CircuitSentry Dev**

GitHub: [circuitsentrydev-netizen](https://github.com/circuitsentrydev-netizen)

Project Repository: [Xefag Pharmacy](https://github.com/circuitsentrydev-netizen/xefag-pharmacy)

---

*Built with React Native and Expo.*