import background from './assets/background.jpeg';
import Frame1 from './assets/IframeFrames.png';
import picture from './assets/editedIMG.png';
import frame2 from './assets/hackclubHQ.png';
import logo from './assets/logo.png';


function App() {
    return (
        <div
            className="app-container"
            style={{
                // Dynamic background using imported asset
                'background-image': `url(${background})`,
            }}
        >
            {/*
             * Main UI Components
             * Layout uses absolute positioning for precise placement
             * as specified in the corresponding CSS
             */}

            <div className="logo-frame">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <div className="challenge-intro">
                <h2>Hack Club IFrame!</h2>
                <p>Edit an image in Python, and we'll hang it on the Hack Club HQ wall! You even get to pick the perfect spot.</p>
            </div>

            {/* Frame gallery section - contains user image and submission area */}
            <div className="frames-section">
                {/* User's edited image with decorative frame overlay */}
                <div className="frame-item">
                    <img
                        src={picture}
                        alt="framed"
                        className="framed-image"
                    />
                    <div
                        className="frame-overlay"
                        style={{
                            background: `url(${Frame1}) center/contain no-repeat`,
                        }}
                    />
                </div>

                {/* Target frame for HQ wall placement with submit action */}
                <div className="frame-item">
                    <div
                        className="frame-overlay"
                        style={{
                            background: `url(${frame2}) center/contain no-repeat`,
                        }}
                    />
                    {/* Action button container */}
                    <div className="button-container">
                        <button className="real-btn long-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;