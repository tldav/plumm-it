import React, {useState, useEffect} from 'react';
import UserDialog from './UserDialog';

const LoggedOutBanner = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 520)

  const updateSize = () => setIsDesktop(window.innerWidth > 520)

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  })

  return (
    <div className="logged-out-banner">
      {isDesktop ? (
        <>
          <UserDialog purpose="signup" buttonTheme="no-style-button no-style-button-alt" /> 
          <p> to leave a comment. Already a member? </p>
          <UserDialog purpose="login" buttonTheme="no-style-button no-style-button-alt"/> 
        </>
      ) : <> 
            <UserDialog purpose="signup" buttonTheme="no-style-button no-style-button-alt" /> 
            <p> or </p>
            <UserDialog purpose="login" buttonTheme="no-style-button no-style-button-alt"/> 
            <p> to leave a comment.</p>
          </>
        }     
    </div>
  );
}

export default LoggedOutBanner;