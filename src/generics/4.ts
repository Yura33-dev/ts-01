type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  const getUser: User = {
    name: "User1",
    surname: "test",
    email: "test@gmail.com",
    password: "somepass",
  };

  return { ...getUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
