import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleStartListening = () => {
        SpeechRecognition.startListening(); // オプションが必要であればここに渡します
    };

    const handleStopListening = () => {
        SpeechRecognition.stopListening();
    };

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={handleStartListening}>Start</button>
            <button onClick={handleStopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    );
};

export default App;
