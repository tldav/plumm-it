import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { UserContext } from '../context/UserContext';
import "../stylesheets/Banner.css"

const Banner = () => {
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
    <div className="new-thread-banner banner">
      <h3>post as <span style={{fontFamily: '"Montserrat", Arial, Helvetica, sans-serif', fontWeight: "bold"}}>{user.username}</span></h3>
      <div onClick={onNewThreadClick} className="new-thread-button pill-button" title="Create New Thread">
        New Thread
        <AddBoxIcon fontSize="large" />
      </div>
    </div>
  )
  return (
  <div className="logged-out-banner banner">
  {isDesktop ? (
    <>
      <button className="simple-button underline" onClick={() => setIsSignupOpen(true)} title="Sign Up">Sign up</button>
      <p> to contribute. Already a member? </p>
      <button className="simple-button underline" onClick={() => setIsLoginOpen(true)} title="Log In">Log in</button>
    </>
  ) : <> 
      <button className="simple-button underline" onClick={() => setIsSignupOpen(true)} title="Sign Up">Sign up</button>
      <p> or </p>
      <button className="simple-button underline" onClick={() => setIsLoginOpen(true)} title="Log in">Log in</button>
      <p> to contribute.</p>
      </>
    }     
  </div>
  );
}

export default Banner;