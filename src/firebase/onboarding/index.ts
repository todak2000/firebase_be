/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Collection from "../db";
import CRUDOperation from "../functions/CRUDOperation";
import admin from "../admin";
import { emailTemplate } from  "../../helper/emailTemplatesHTML" 
import { sendEmail } from "../../helper/nodeEmail";

const userOperation = new CRUDOperation(Collection.Users);
const otpOperation = new CRUDOperation(Collection.Otps);
export const verifyOTP = async (data: { userId: string; code: string }) => {
  if (!data.userId || !data.code) {
    return {
      status: 400,
      message: "Either or both userId and code is empty/null",
    };
  }

  try {
    const user = await otpOperation.getUserData(data.userId);
    if (user && user.length === 1 && user[0].code === data.code) {
      const verifiedUser = await userOperation.getUserData(data.userId);
      await admin.auth().updateUser(data.userId, { emailVerified: true });
      if (verifiedUser && verifiedUser.length === 1) {
        await otpOperation.delete(data.userId);
        
        const mailData = {
          from: '"Gidillo Team" <info@gidillo.com>',
          to: verifiedUser[0].email as string,
          subject: 'Welcome to GIDILLO: Your Smart Real Estate Partner 🏡',
          html: emailTemplate('welcome', {
            name: verifiedUser[0].displayName
              ? (verifiedUser[0].displayName as string)
              :  'User',
          }),
        };
      await sendEmail(mailData)
        
        return {
          status: 200,
          message: "Email Verified",
          verifiedData: {
            userId: user[0].id,
            email: user[0].email,
          },
        };
      }
    } else {
      return {
        status: 400,
        message: "Oops! you entered the wrong OTP code.",
      };
    }
  } catch (error: any) {
    return {
      status: 500,
      message: `Error with Email verification: ${error.message}`,
    };
  }
};

export const changePassword = async (data: {
  userId: string;
  confirmNewPassword: string;
  newPassword: string;
}) => {
  if (data.confirmNewPassword !== data.newPassword) {
    return {
      status: 400,
      message: "Password does not match!",
    };
  }

  try {
    const userRecord = await admin
      .auth()
      .updateUser(data.userId, { password: data.newPassword });
    if (userRecord) {
      return {
        status: 200,
        message: "Password changed successfully!",
      };
    } else {
      throw new Error("Failed to update user password");
    }
  } catch (error: any) {
    return {
      status: 500,
      message: `Error changing password: ${error.message}`,
    };
  }
};
