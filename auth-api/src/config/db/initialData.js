import bcrypt from "bcrypt";

import User from "../../modules/user/model/user.js";

export async function createInitialData() {
  try {
    await User.sync({ force: true });

    const password = await bcrypt.hash("123456", 10);

    let firstUser = await User.create({
      name: "User test",
      email: "testuser@gmail.com",
      password: password,
    });

    let secondUser = await User.create({
      name: "User test",
      email: "teste2@gmail.com",
      password: password,
    });
  } catch (e) {
    console.error(e);
  }
}
