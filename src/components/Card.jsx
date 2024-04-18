/* eslint-disable react/prop-types */
export default function Card({ id, imgSource, title}) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg shadow-slate-950 hover:scale-[101%] transition-all duration-500 border-slate-900">
    <a href={`./anime/${id}`}>
      <img className=" w-full h-80 object-cover" src={imgSource} alt=""/>
      <p className="p-2 text-center font-bold text-white">
        {title}
      </p>
    </a>
    </div>
  )
}