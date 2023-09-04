type User = {
  email: {
    address: string;
    verified: boolean;
  };
  password: string;
  profile: {
    firstName: string;
    lastName: string;
  };
};

export default User;
