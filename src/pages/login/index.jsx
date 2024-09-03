import React, {useState} from 'react';
import ImageLogin from '../../assets/ImageLogin.png';
import SignIn  from '../../components/login/SignIn';
import SignUp from '../../components/login/SignUp';

const Login = () => {
    const [showSignIn, setShowSignIn] = useState(true);

    return (
        <div className="flex flex-row min-h-screen overflow-hidden">
            <div className='flex w-1/2 border-r-[6px] border-[#d6915b] bg-cover' style={{
                backgroundImage: `url(${ImageLogin})`
            }}>
            </div>
            <div className='flex w-1/2 border-l-[10px] border-[#bd1a37] justify-center items-center'>
                {showSignIn ? (
                    <SignIn onSignUpClick={() => setShowSignIn(false)} />
                ) : (
                    <SignUp onSignUpClick={() => setShowSignIn(true)} />
                )}
                </div>
        </div>
     );
}
     export default Login;