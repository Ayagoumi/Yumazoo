# Yumazoo

This project is a Chrome extension to provide awesome features to enhance your experience.

## My Observations

Find my observations about the API and UI in [OBSERVATIONS.md](OBSERVATIONS.md).

## Installation

Follow the steps below to build and load the extension to your Google Chrome.

### Building

1. Clone the project

2. Install the dependencies:
    ```
    yarn
    ```

3. You have two options for compiling the project:
    - To compile once:
        ```
        yarn start
        ```

    - To run the development configuration in watch mode:
        ```
        yarn watch
        ```

3. To build a production (minified) version, run:
    ```
    yarn build
    ```

### Loading the Extension to Google Chrome

1. Complete the steps above to build the project.
2. Open Google Chrome.
3. Go to [chrome://extensions](chrome://extensions).
4. Ensure the "Developer mode" checkbox in the top right-hand corner is ticked.
5. Click "Load unpacked extension...".
6. Navigate to the `dist` folder from this repository and select it.

You have now successfully added the Yumazoo extension to your Google Chrome browser. Enjoy!
