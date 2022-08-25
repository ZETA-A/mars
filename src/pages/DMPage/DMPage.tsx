import { useTranslation } from "react-i18next";
import { Languages, languages } from "../../i18n";
import Chatroom from "../../components/Chatroom/Chatroom";
import styles from "./DMPage.module.css";

import newChatIcon from "../../pictures/newChat.svg";
function DMPage() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: "8vw",
                    maxHeight: "30px",
                }}
            >
                <h3
                    style={{
                        fontSize: "clamp(20px, 5vw, 24px)",
                        fontWeight: 700,
                        position: "absolute",
                        top: "6%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    className={styles.noDrag}
                >
                    {t("dm")}
                </h3>
                <img
                    src={newChatIcon}
                    alt="newChat"
                    style={{
                        position: "absolute",
                        top: "6.2%",
                        right: "5%",
                        transform: "translate(-50%, -50%)",
                        minWidth: "18px",
                        width: "5vw",
                        maxWidth: "22px",
                        cursor: "pointer",
                    }}
                />
            </div>
            <div
                style={{
                    width: "80vw",
                    height: "calc(3vh + 76vh)",
                    minHeight: "481px",
                    maxHeight: "632px",
                    margin: "auto",
                    overflow: "auto",
                }}
                className={styles.noScrollbar}
            >
                <Chatroom
                    name="백승범"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
                <Chatroom
                    name="윤현석"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
                <Chatroom
                    name="백현빈"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
                <Chatroom
                    name="정해범"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
                <Chatroom
                    name="노승현"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
                <Chatroom
                    name="윤호민"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
                <Chatroom
                    name="이동현"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
                <Chatroom
                    name="이재서"
                    profileImg="none"
                    lastChatTime="1시간 전"
                    lastChatValue="마지막"
                />
            </div>
        </div>
    );
}

export default DMPage;
