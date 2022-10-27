import { useContext } from 'react';
import { StateContext } from '../StateProvider';
import '../styles/ThemeToggle.css'

function ThemeToggle() {
  const { setdarkMord } = useContext(StateContext);

  const darkModeHandler = (event) => {
    if (event.target.checked === true) {
      setdarkMord('dark-theme');
    }else{
      setdarkMord('');
    }
  }

  return (
   <div className="button-switch">
      <input type="checkbox" id="switch-blue" className="switch" onClick={darkModeHandler} />
      <label htmlFor="switch-blue" className="lbl-off">Light</label>
      <label htmlFor="switch-blue" className="lbl-on">Dark</label>
   </div>
  )
}

export default ThemeToggle