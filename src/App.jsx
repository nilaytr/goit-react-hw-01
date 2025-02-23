import userData from "./userData.json";
import Profile from './components/Profile/Profile.jsx';

import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList.jsx";

import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
