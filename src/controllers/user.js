const login = async (req, res) => {
  const { user, password } = req.body;

  res.status(200).json({
    message: "login successfully",
    data: {
      user,
      password,
    },
  });
};

export default { login };
