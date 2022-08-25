interface ChatData {
    profileImg: string;
    name: string;
    lastChatValue: string;
    lastChatTime: string;
}

function Chatroom({ name, lastChatValue, lastChatTime }: ChatData) {
    return (
        <div
            style={{
                display: "flex",
                width: "80vw",
                alignItems: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
            }}
        >
            <img
                src=""
                alt="profileImg"
                style={{
                    minWidth: "64px",
                    minHeight: "64px",
                    width: "15vw",
                    height: "15vw",
                    maxWidth: "72px",
                    maxHeight: "72px",
                    border: "1px solid black",
                    borderRadius: "50px",
                    marginRight: "10px",
                }}
            />
            <div>
                <p
                    className={`m-0 p-0`}
                    style={{
                        fontSize: "clamp(14px, 4vw, 16px)",
                        fontWeight: "700",
                    }}
                >
                    {name}
                </p>
                <div style={{ display: "flex" }}>
                    <p
                        className={`m-0 p-0`}
                        style={{ fontSize: "clamp(10px, 4vw, 12px)" }}
                    >
                        {lastChatValue}
                    </p>
                    <p
                        className={`m-0 p-0`}
                        style={{ fontSize: "clamp(10px, 4vw, 12px)" }}
                    >
                        ·
                    </p>
                    <p
                        className={`m-0 p-0`}
                        style={{ fontSize: "clamp(10px, 4vw, 12px)" }}
                    >
                        {lastChatTime}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Chatroom;
