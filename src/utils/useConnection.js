import { useEffect, useState } from "react";

const useConnection = () => {
    const [onLineStaus, setOnLineStaus] = useState("online");
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnLineStaus(true);
        });
        window.addEventListener("offline", () => {
            setOnLineStaus(false);
        });
        return () => {
            window.removeEventListener("online", () => {
                setOnLineStaus(true);
            });
            window.removeEventListener("offline", () => {
                setOnLineStaus(false);
            });
        };
    }, []);
    return onLineStaus;
};

export default useConnection;
