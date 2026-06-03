const getUserById = async (id) => {
  return User.findById(id);
};

const createUser = async (data) => {
  return User.create(data);
};

const updateUser = async (id, data) => {
  return User.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export default {
  getUserById,
  createUser,
  updateUser,
};