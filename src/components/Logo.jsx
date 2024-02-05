import AppLogo from "../assets/AppLogo.png";

function Logo({width = '50px'}) {
  return (
    <div>
      <img className=" w-10" src={AppLogo} alt="logo"/>
    </div>
  )
}

export default Logo
