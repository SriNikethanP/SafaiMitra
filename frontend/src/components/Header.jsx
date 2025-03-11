import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
  return (
    <div>
      <h1>Welcome, {user.firstName}</h1>
      <UserButton />
    </div>
  );
};

export default Header;
