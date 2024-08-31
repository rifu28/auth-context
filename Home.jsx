import { useContext } from "react";
import { AuthContext } from "./src/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  return (
    <div>
      <h2>Name : {authInfo.name}</h2>
    </div>
  );
};

export default Home;
