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
        <div className="flex flex-col items-center justify-center h-full">
            <audio ref={audioRef} autoPlay loop muted={isMuted}>
                <source src={musicFile} type="audio/mpeg" />
            </audio>
            <button
                onClick={handleToggleMute}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:py-1 sm:px-2 rounded"
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
