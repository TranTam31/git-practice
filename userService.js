const getUserById = async (id) => {
  return User.findById(id);
};

const createUser = async (data) => {
  return User.create(data);
};

export default {
  getUserById,
  createUser,
};