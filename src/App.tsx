import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Titlebar from "./components/Titlebar/Titlebar";
import DMPage from "./pages/DMPage/DMPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotifiPage from "./pages/NotifiPage/NotifiPage";
import SettingPage from "./pages/SettingPage/SettingPage";

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Titlebar />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<Navigation />}>
                        <Route path="/directmessage" element={<DMPage />} />
                        <Route path="/notification" element={<NotifiPage />} />
                        <Route path="/setting" element={<SettingPage />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
