import React from "react";
import CounterExample from "./components/useCounter/index.jsx";
import ToggleExample from "./components/useToggle/index.jsx";
import LocalStorageExample from "./components/useLocalStorage/index.jsx";
import FetchExample from "./components/useFetch/index.jsx";
import InputExample from "./components/useInput/index.jsx";
import DebounceExample from "./components/useDebounce/index.jsx";
import PreviousExample from "./components/usePrevious/index.jsx";
import HoverExample from "./components/useHover/index.jsx";
import TitleExample from "./components/useTitle/index.jsx";
import TimeoutExample from "./components/useTimeout/index.jsx";
import ClipboardExample from "./components/useClipboard/index.jsx";
import MediaQueryExample from "./components/useMediaQuery/index.jsx";
import OnlineStatusExample from "./components/useOnlineStatus/index.jsx";
import GeolocationExample from "./components/useGeoLocation/index.jsx";
import ThemeExample from "./components/useTheme/index.jsx";

function App() {
  const sections = [
    { title: "1️⃣ useCounter", Component: CounterExample },
    { title: "2️⃣ useToggle", Component: ToggleExample },
    { title: "3️⃣ useLocalStorage", Component: LocalStorageExample },
    { title: "4️⃣ useFetch", Component: FetchExample },
    { title: "5️⃣ useInput", Component: InputExample },
    { title: "6️⃣ useDebounce", Component: DebounceExample },
    { title: "7️⃣ usePrevious", Component: PreviousExample },
    { title: "8️⃣ useHover", Component: HoverExample },
    { title: "9️⃣ useTitle", Component: TitleExample },
    { title: "🔟 useTimeout", Component: TimeoutExample },
    { title: "11️⃣ useClipboard", Component: ClipboardExample },
    { title: "12️⃣ useMediaQuery", Component: MediaQueryExample },
    { title: "13️⃣ useOnlineStatus", Component: OnlineStatusExample },
    { title: "14️⃣ useGeoLocation", Component: GeolocationExample },
    { title: "15️⃣ useTheme", Component: ThemeExample },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Hooks Demo</h1>
      {sections.map(({ title, Component }, index) => (
        <section key={index} style={{ marginBottom: "40px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>{title}</h2>
          <Component />
        </section>
      ))}
    </div>
  );
}

export default App;
