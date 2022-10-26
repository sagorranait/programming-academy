import '../styles/ThemeToggle.css'

function ThemeToggle() {
  return (
   <div className="button-switch">
      <input type="checkbox" id="switch-blue" className="switch" />
      <label htmlFor="switch-blue" className="lbl-off">Light</label>
      <label htmlFor="switch-blue" className="lbl-on">Dark</label>
   </div>
  )
}

export default ThemeToggle