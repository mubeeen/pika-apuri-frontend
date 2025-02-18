
const GeneralProfileLayout = () => {
  // const loggedInRole = useAppSelector((state) => state.auth.accountType);  

  return (
    <div>
      <h1>{true ? 'Buyer Profile' : 'Seller Profile'}</h1>
      <p>Welcome to your profile!</p>
    </div>
  );
};

export default GeneralProfileLayout;
