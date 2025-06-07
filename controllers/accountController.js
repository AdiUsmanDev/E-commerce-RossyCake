const User = require('../models/acoount.model');

exports.getProfile = (req, res) => {
  const userId = req.user.id;

  User.getUserById(userId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'DB Error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'User tidak ditemukan' });

    const user = results[0];

    res.json({
      success: true,
      data: {
        id: user.id,
        userName: user.userName,
        phone: user.phone,
        email: user.email,
        role: user.role,
        address: {
          addressLine1: user.addressLine1,
          city: user.city,
          province: user.province,
          postalCode: user.postalCode
        }
      }
    });
  });
};

// PUT update profil
exports.updateProfile = (req, res) => {
  const userId = req.user.id;
  const { fullName, phone } = req.body;

  User.updateUserProfile(userId, fullName, phone, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Gagal update', error: err });

    User.getUserById(userId, (err, results) => {
      if (err) return res.status(500).json({ success: false, message: 'Gagal ambil data', error: err });

      const user = results[0];
      res.json({
        success: true,
        data: {
          id: user.id,
          userName: user.userName,
          phone: user.phone,
          email: user.email,
          role: user.role,
          address: {
            addressLine1: user.addressLine1,
            city: user.city,
            province: user.province,
            postalCode: user.postalCode
          }
        }
      });
    });
  });
};

exports.deleteProfile = (req, res) => {
  const userId = req.user.id;

  User.deleteUserById(userId, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Gagal menghapus akun', error: err });

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Akun tidak ditemukan' });
    }

    res.json({ success: true, message: 'Akun berhasil dihapus' });
  });
};
