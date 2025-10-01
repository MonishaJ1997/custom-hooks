import React from "react";
import { useOnlineStatus } from "./useOnlineStatus.js";

const OnlineStatusExample = () => {
  const online = useOnlineStatus();
  return <p>You are {online ? "Online" : "Offline"}</p>;
};

export default OnlineStatusExample;
