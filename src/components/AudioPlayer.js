import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import musicFile from "../assets/themesong.mp3";

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    }, []);

    const handleToggleMute = () => {
        const audio = audioRef.current;
        setIsMuted(!isMuted);
        audio.muted = !isMuted;
    };

    return (
        <div>
            <audio ref={audioRef} autoPlay loop>
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
