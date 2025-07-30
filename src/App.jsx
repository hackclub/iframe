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
                // Keep background-image here as it's dynamic based on import
                'background-image': `url(${background})`,
            }}
        >
            {/* Call to Action Section - This grouping of logo and intro is conceptual */}
            {/* Based on the screenshot, the logo and challenge-intro are separate absolute elements. */}
            {/* The inline style for the 'div' around them would be removed entirely as they are
          now positioned independently in CSS. */}

            <div className="logo-frame">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <div className="challenge-intro">
                <h2>Hack Club IFrame!</h2>
                <p>Edit an image in Python, and we'll hang it on the Hack Club HQ wall! You even get to pick the perfect spot.</p>
            </div>

            {/* Image Frames Section */}
            <div className="frames-section">
                {/* Frame 1 with image behind */}
                <div className="frame-item">
                    <img
                        src={picture}
                        alt="framed"
                        className="framed-image"
                    />
                    <div
                        className="frame-overlay"
                        style={{
                            // Keep background-image here as it's dynamic based on import
                            background: `url(${Frame1}) center/contain no-repeat`,
                        }}
                    />
                </div>
                {/* Frame 2 (just the frame, no image behind) */}
                <div className="frame-item">
                    <div
                        className="frame-overlay"
                        style={{
                            // Keep background-image here as it's dynamic based on import
                            background: `url(${frame2}) center/contain no-repeat`,
                        }}
                    />
                    {/* Button to submit  */}
                    <div className="button-container">
                        <button className="real-btn long-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;