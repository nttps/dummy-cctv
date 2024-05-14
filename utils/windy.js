let windyInitialized = false;
let windyAPI = null;

const zoom = 9;
const options = {
    // Required: API key
    key: "hsnpVb7cJX8ATE1JRWTOSvbYUi4ErDT3", // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    //verbose: true,

    // Optional: Initial state of the map
    lat: 13.736717,
    lon: 100.523186,
    zoom: zoom,
    timestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,
    hourFormat: "12h",
};

export async function loadWindyAPI() {
    return new Promise((resolve, reject) => {

            clearWindyOff();

            const scriptLeaflet = document.createElement("script");
            scriptLeaflet.src =
                "https://unpkg.com/leaflet@1.4.0/dist/leaflet.js";

            document.head.appendChild(scriptLeaflet);

            const script = document.createElement("script");
            script.src = "https://api.windy.com/assets/libBoot.js";
            script.onload = () => initializeWindy(resolve, reject);
            script.onerror = () =>
                reject(new Error("Failed to load Windy API script"));
            document.head.appendChild(script);
        
    });
}


export async function initializeWindy(resolve, reject) {
        windyInit(options, (api) => {
            windyAPI = api;
            windyInitialized = true;
            resolve(api);
        });
}


export function getWindyAPI() {
    return windyAPI;
}

export function clearWindyOff() {
    window.W = void 0;
    window.wError = void 0;
    window.windyInit = void 0;
    window.windySentErrors = void 0;

    [...document.querySelectorAll('script[src*="leaflet"]')].forEach((el) =>
        el.remove()
    );

    [...document.querySelectorAll('link[href*="windy"]')].forEach((el) =>
        el.remove()
    );

    [...document.querySelectorAll('script[src*="windy"]')].forEach((el) =>
        el.remove()
    );
}
