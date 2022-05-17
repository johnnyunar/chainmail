import createStore from "react-hstore";

export const [useProvider, setProvider, getProvider] = createStore(0);
export const [useCurrentAccount, setCurrentAccount, getCurrentAccount] = createStore(0);
export const [useBlock, setBlock, getBlock] = createStore(0);
export const [useBalance, setBalance, getBalance] = createStore(0);
export const [useInboxMessages, setInboxMessages, getInboxMessages] = createStore([]);
export const [useGreeting, setGreeting, getGreeting] = createStore("");
export const [useCurrentMessageIndex, setCurrentMessageIndex, getCurrentMessageIndex] = createStore(0);
export const [useCurrentView, setCurrentView, getCurrentView] = createStore("inbox");
export const [useSentMessages, setSentMessages, getSentMessages] = createStore(true);
export const [useAutoRefresh, setAutoRefresh, getAutoRefresh] = createStore(true);
