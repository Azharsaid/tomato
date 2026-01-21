import React from 'react';

const App: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center text-center p-4">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">
                    Updated to
                </h1>
                <a 
                    href="https://tomato-design-787510465613.us-west1.run.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300 break-all"
                >
                    https://tomato-design-787510465613.us-west1.run.app/
                </a>
            </div>
        </div>
    );
};

export default App;
