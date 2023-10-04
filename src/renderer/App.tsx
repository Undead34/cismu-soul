import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { v4 as uuid } from "uuid";
import { store } from "./store";

import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import MainViewNavbar from "./components/MainViewNavbar";
import LeftSidebar from "./components/LeftSidebar";
import PlayingBar from "./components/PlayingBar";
import MusicView from "./views/Home";
import { useState } from "react";

export default function App() {
  return (
    <div className="absolute flex h-full w-full flex-col overflow-hidden bg-[#181820]">
      <div className="cismu-skeleton grid h-full w-full bg-[#181820] p-2 text-xs">
        <LeftSidebar />
        <MainViewNavbar />
        <div className="skeleton-main-view m-2 my-0 flex overflow-hidden rounded-lg bg-[#23232d] text-white">
          <div className="relative flex-1">
            <div className="h-full w-full overflow-y-auto p-6">
              <div className="sticky h-16 w-full"></div>
              <Outlet />
            </div>
          </div>
        </div>
        {/* <div className="skeleton-right-sidebar w-58 rounded-lg bg-[#23232d] p-2 text-base text-white">
          right-sidebar
        </div> */}
        <PlayingBar />
      </div>
    </div>
  );
}

function Login() {
  return (
    <div>
      <Link to={"/"}>App</Link>
    </div>
  );
}

function Plugins() {
  const [plugins, setPlugins] = useState([]);

  // if (plugins.length === 0) {
  //   window.api.emit("plugins");
  // }

  // window.api.once("plugins", async (event, plugins) => {
  //   const plugin = await import("C:\\Users\\Undead34\\Documents\\Undead34\\cismu-plugin\\index.js");
  //   const PluginComponent = await plugin.default;
  //   setPlugins([<PluginComponent key={uuid()} />]);
  // });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MusicPlayer>
            <App />
            {plugins}
          </MusicPlayer>
        }
      >
        <Route index element={<MusicView />} />
        <Route path="explore" element={<>Explorar</>} />
        <Route path="library" element={<>library</>} />
        <Route path="search" element={<>search</>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <Plugins />
    </HashRouter>
  </Provider>,
);
