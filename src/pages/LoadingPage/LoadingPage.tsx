import logo from "../../pictures/logo1024.png";
function LoadingPage() {
    return (
        <div
            style={{
                width: "60vw",
                height: "60vw",
                /*
            border: "1px solid gray",
            backgroundColor: "aquamarine",
            */
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <img
                src={logo}
                style={{
                    width: "60vw",
                    height: "60vw",
                }}
                alt="로고"
            ></img>
        </div>
    );
}

export default LoadingPage;
