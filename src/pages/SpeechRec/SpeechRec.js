import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRec = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({continuous:true})
    console.log("listening starts")
  }, [])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech to text recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={(e) => {
        e.preventDefault() 
        SpeechRecognition.stopListening()
        console.log("listening stop")
      }}
      >
        Stop Listening
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRec;
