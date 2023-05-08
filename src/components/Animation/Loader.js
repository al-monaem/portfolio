import { motion } from "framer-motion"

const Loader = () => {

    const circleStyle = {
        display: "block",
        width: "5rem",
        height: "5rem",
        border: "0.5rem solid #e9e9e9",
        borderTop: "0.5rem solid #3498db",
        borderRadius: "50%",
        position: "absolute",
        top: 0,
        left: 0,
    };

    const containerStyle = {
        position: "relative",
        border: "none"
    };

    const spinTransition = {
        repeat: Infinity,
        ease: "linear",
        duration: 1,
    }

    return (
        <div style={containerStyle}>
            <motion.span
                style={circleStyle}
                animate={{ rotate: [0, 360] }}
                transition={spinTransition}
            />
        </div>
    )
}

export default Loader