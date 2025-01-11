import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const GoogleLogin = async () => {
    try{
        await GoogleSignin.hasPlayServices();
	    const userInfo = await GoogleSignin.signIn();
	    return userInfo;
    } catch(err){
        console.log(err)
    }	
};