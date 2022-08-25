import styles from "./LoginPage.module.css";
import logo from "../../pictures/logo1024.png";
import { useTranslation } from "react-i18next";
import { Languages, languages } from "../../i18n";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function LoginPage() {
    const { t, i18n } = useTranslation();
    i18n.changeLanguage("ko");
    return (
        <div style={{ height: "96vh" }}>
            <div
                style={{
                    width: "60vw",
                    height: "60vw",
                    /*
                    border: "1px solid gray",
                    backgroundColor: "aquamarine",
                    */
                    position: "absolute",
                    top: "15%",
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
                    className={styles.move}
                ></img>
            </div>
            <div className="d-grid gap-2">
                <Link to="/directmessage">
                    <Button
                        style={{
                            /*
                    border: "1px solid gray",
                    backgroundColor: "aquamarine",
                    */
                            position: "absolute",
                            bottom: "17%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "70vw",
                        }}
                        className={`${styles.fadeIn}`}
                    >
                        {t("loginToInsta")}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
export default LoginPage;
