const API_BASE_URL = 'https://your-backend-api-url.com';

interface OtpResponse {
  success: boolean;
  message?: string;
}

export const sendOtp = async (countryCode: string, phoneNumber: string): Promise<OtpResponse> => {
  try {
    //request
    return {success: true};
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, message: 'Failed to send OTP' };
  }
};

export const sendOtpEmail = async (email: string): Promise<OtpResponse> => {
  try {
    //request
    return {success: true};
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, message: 'Failed to send OTP' };
  }
};

export const verifyOtp = async (otp: string): Promise<OtpResponse> => {
  try {
    //request
    if (otp == "1234"){
      return {success: true};
    }
    return {success: false};
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return { success: false, message: 'Failed to send OTP' };
  }
};
