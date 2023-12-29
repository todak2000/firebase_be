class User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  authType: string;
  role: string;

  constructor(
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    authType: string,
    role: string,
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.authType = authType;
    this.role = role;
  }
}

export default User;
