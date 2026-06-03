const getUserById = async (id) => {
  return User.findById(id);
};

const createUser = async (data) => {
  return User.create(data);
};

const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};

export default {
  getUserById,
  createUser,
  deleteUser,
};