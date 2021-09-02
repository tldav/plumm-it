import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../context/UserContext';

const LoggedOutBanner = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 520)
  const { setIsSignupOpen, setIsLoginOpen } = useContext(UserContext)

  const updateSize = () => setIsDesktop(window.innerWidth > 520)

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  })

  return (

<div className="logged-out-banner">
{isDesktop ? (
  <>
    <button className="simple-button underline" onClick={() => setIsSignupOpen(true)}>Sign up</button>
    <p> to leave a comment. Already a member? </p>
    <button className="simple-button underline" onClick={() => setIsLoginOpen(true)}>Log in</button>
  </>
) : <> 
    <button className="simple-button underline" onClick={() => setIsSignupOpen(true)}>Sign up</button>
    <p> or </p>
    <button className="simple-button underline" onClick={() => setIsLoginOpen(true)}>Log in</button>
    <p> to leave a comment.</p>
    </>
  }     
</div>
  );
}

export default LoggedOutBanner;