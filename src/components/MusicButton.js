import React, { useState, useRef } from "react";
import musicFile from "../assets/themesong.mp3";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    const handleToggleMute = () => {
        const audio = audioRef.current;

        if (audio) {
            audio.muted = !audio.muted;
            setIsMuted(audio.muted);
        }
    };

    return (
        <div>
            <audio ref={audioRef} autoPlay loop muted={isMuted}>
                <source src={musicFile} type="audio/mpeg" />
            </audio>
            <button
  onClick={handleToggleMute}
  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-2.5 rounded"
>
  {isMuted ? (
    <FontAwesomeIcon icon={faVolumeMute} className="mr-1" />
  ) : (
    <FontAwesomeIcon icon={faVolumeUp} className="mr-1" />
  )}
  {isMuted ? "Unmute" : "Mute"}
</button>
        </div>
    );
};

export default AudioPlayer;
