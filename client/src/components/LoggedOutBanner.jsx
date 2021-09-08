import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../context/UserContext';

const LoggedOutBanner = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 520)
  const { setIsSignupOpen, setIsLoginOpen, user, isLoggedIn } = useContext(UserContext)

  const updateSize = () => setIsDesktop(window.innerWidth > 520)

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  })

  let history = useHistory()

  const onNewThreadClick = () => {
    history.push(`/p/new`)
  }

  if (user.username && isLoggedIn) return (
    <div>
      <button onClick={onNewThreadClick}>new thread</button>
    </div>
  )
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