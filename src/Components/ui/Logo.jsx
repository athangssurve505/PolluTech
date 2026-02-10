import logo from "../../assets/images/pollutechlogo.png"

export default function Logo({classname ,showname,classnameDiv,para}) {
  return (
    <div className={`items-center flex ${classnameDiv}`}>
      <img src={logo} className={`object-contain ${classname}`} alt="logo"/>
      {
        showname &&
        <p className={`text-2xl font-semibold ${para}`}><span className="text-blue-500">Pollu</span><span className="text-emerald-600">Track</span></p>  
      }
    </div>
  )
}
