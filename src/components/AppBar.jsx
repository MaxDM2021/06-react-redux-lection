import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { getClicksValue } from "../redux/userSlice"

export const AppBar = () => {
  const isLoggedIn = useSelector(getClicksValue);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: 12,
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
