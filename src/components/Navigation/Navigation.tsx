import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./Navigation.module.css";

/* 아이콘 */
import dmIcon from "../../pictures/navigation/chat/chat.svg";
import dmIconFill from "../../pictures/navigation/chat/chat-fill.svg";
import notifiIcon from "../../pictures/navigation/heart/heart.svg";
import notifiIconFill from "../../pictures/navigation/heart/heart-fill.svg";
import settingIcon from "../../pictures/navigation/gear/gear.svg";
import settingIconFill from "../../pictures/navigation/gear/gear-fill.svg";

function Navigation() {
    const currentPage = window.location.href.split("/")[3];
    const [selectPage, setSelectPage] = useState(currentPage);

    return (
        <div>
            <div
                style={{
                    backgroundColor: "#fff",
                    position: "absolute",
                    borderRadius: "10px",
                    bottom: "0%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "85vw",
                    height: "10vh",
                    maxHeight: "70px",
                    boxShadow: "0px 1px 3px 2px rgba(0, 0, 0, 0.25)",
                }}
            >
                <div className={styles.flexDiv}>
                    <Link
                        to="/directmessage"
                        onClick={() => setSelectPage("directmessage")}
                        draggable={false}
                    >
                        <div className={styles.iconDiv}>
                            <img
                                className={styles.icon}
                                src={
                                    selectPage === "directmessage"
                                        ? dmIconFill
                                        : dmIcon
                                }
                                alt=""
                            />
                        </div>
                    </Link>
                    <Link
                        to="/notification"
                        onClick={() => setSelectPage("notification")}
                        draggable={false}
                    >
                        <div className={styles.iconDiv}>
                            <img
                                className={styles.icon}
                                src={
                                    selectPage === "notification"
                                        ? notifiIconFill
                                        : notifiIcon
                                }
                                alt=""
                            />
                        </div>
                    </Link>
                    <Link
                        to="/setting"
                        onClick={() => setSelectPage("setting")}
                        draggable={false}
                    >
                        <div className={styles.iconDiv}>
                            <img
                                className={styles.icon}
                                src={
                                    selectPage === "setting"
                                        ? settingIconFill
                                        : settingIcon
                                }
                                alt=""
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Navigation;
