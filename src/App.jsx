import background from './assets/iframe.png';


function App() {
    const handleGetStarted = () => {
        window.open("https://colab.research.google.com/drive/1yFN0Rat1rGmxzYJ_KCAfhq5m1L3V0mOw?usp=sharing", "_blank");
    };

    const handleSubmit = () => {
        window.open("https://forms.hackclub.com/t/hsoAZB58ZCus", "_blank");
    };


    return (
        <div
            className="app-container"
            style={{
                'background-image': `url(${background})`
            }}
        >
            <a href="https://hackclub.com/"><img className="flag-wave" style={{position: 'absolute', top: 0, border: 0, width: '256px', zIndex: 999}} src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Hack Club"/></a>
            <button className="start-button" onClick={() => handleGetStarted()}>
                get started
            </button>
            <button className="submit-button" onClick={() => handleSubmit()}>
                submit
            </button>
        </div>
    );
}

export default App;