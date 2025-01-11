//import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api-url.com'; // Replace with actual backend URL

interface OtpResponse {
  success: boolean;
  message?: string;
}

export const sendOtp = async (countryCode: string, phoneNumber: string): Promise<OtpResponse> => {
  try {
    return {success: true};
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, message: 'Failed to send OTP' };
  }
};
