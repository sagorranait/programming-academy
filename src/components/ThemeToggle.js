import '../styles/ThemeToggle.css'

function ThemeToggle() {
  return (
   <div class="button-switch">
      <input type="checkbox" id="switch-blue" class="switch" />
      <label for="switch-blue" class="lbl-off">Light</label>
      <label for="switch-blue" class="lbl-on">Dark</label>
   </div>
  )
}

export default ThemeToggle