import { useAppSelector } from "@store/hooks";

const Account = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      <ul>
        <li>First Name: {user?.firstName}</li>
        <li>Last Name: {user?.lastName}</li>
        <li>Email: {user?.email}</li>
      </ul>
    </div>
  );
};

export default Account;
