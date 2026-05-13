import User from '../models/User.js';
import otpGenerator from 'otp-generator';
import jwt from 'jsonwebtoken';
import sendMail from '../utils/sendMail.js';

export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    user.otp = otp;

    user.otpExpiry = Date.now() + 5 * 60 * 1000;

    await user.save();

    await sendMail(email, otp);

    res.json({
      message: 'OTP sent successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    if (user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(401).json({
        message: 'Invalid OTP',
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      'secretkey',
      {
        expiresIn: '1d',
      }
    );

    res.json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};