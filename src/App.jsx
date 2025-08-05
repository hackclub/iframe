
import background from './assets/iframe-1920.png';
import backgroundMobile from './assets/iframe-768.png';
import backgroundTablet from './assets/iframe-1280.png';

import { createSignal } from 'solid-js';

function App() {
    const [showPopup, setShowPopup] = createSignal(true);

    const handleGetStarted = () => {
        window.open("https://colab.research.google.com/drive/1yFN0Rat1rGmxzYJ_KCAfhq5m1L3V0mOw?usp=sharing", "_blank");
    };

    const handleSubmit = () => {
        window.open("https://forms.hackclub.com/t/hsoAZB58ZCus", "_blank");
    };

    const togglePopup = () => {
        setShowPopup(!showPopup());
    };

    return (
        <div
            class="app-container"
            style={{
                '--bg-desktop': `url(${background})`,
                '--bg-tablet': `url(${backgroundTablet})`,
                '--bg-mobile': `url(${backgroundMobile})`,
                '--bg-image': `url(${background})`
            }}
        >
            <a href="https://hackclub.com/">
                <img
                    class="flag-wave"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '10px',
                        border: 0,
                        width: '256px',
                        'z-index': 999
                    }}
                    src="https://assets.hackclub.com/flag-orpheus-top.svg"
                    alt="Hack Club"
                />
            </a>
            <button
                class="start-button"
                onClick={handleGetStarted}
            >
                get started
            </button>
            <button
                class="submit-button"
                onClick={handleSubmit}
            >
                submit
            </button>

            <button class="info-button" onClick={togglePopup}>
                ?
            </button>

            {showPopup() && (
                <div class="popup-overlay" onClick={togglePopup}>
                    <div class="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button class="popup-close" onClick={togglePopup}>×</button>
                        <h2 class="popup-hey">HEY! 👋</h2>
                        <div class="popup-message">
                            <p>Create an image using code, submit it, and we'll frame it on our wall at HQ!</p>
                            <p class="popup-highlight">
                                <span class="animated-text">⚡ Submit between now & Friday @ 12:00pm EST, you'll get a custom frame! ⚡</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;