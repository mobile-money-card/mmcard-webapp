import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Dev from "./pages/Dev/Dev";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import RAgentLogin from "./pages/RAgentLogin/RAgentLogin";
import RAgentRegisterStudent from "./pages/RAgentRegisterStudent/RAgentRegisterStudent";
import SendMoney from "./pages/SendMoney/SendMoney";
import SendMoneyHistory from "./pages/SendMoneyHistory/SendMoneyHistory";

const routeConfig = [
  // {path: "", element: 0}
  { path: "/", element: <Home /> },
  // { path: "/r-agent", element: <RAgentHome /> },
  { path: "r-agent/login", element: <RAgentLogin /> },
  { path: "r-agent/register-student", element: <RAgentRegisterStudent /> },
  { path: "/mm-agent", element: <ComingSoon /> },
  { path: "/mm-agent/login", element: <ComingSoon /> },
  { path: "/send", element: <SendMoney /> },
  { path: "/send/history/", element: <SendMoneyHistory /> },
  // { path: "/send/history/:telephone", element: <SendHistoryItem /> },
  { path: "/dev", element: <Dev /> },
  { path: "*", element: <NotFound /> },
];

export default routeConfig;
