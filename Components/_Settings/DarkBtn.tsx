

export default function DarkBtn() {
  return (
    <div className='Special flex items-center justify-between mt-4 px-4 py-3   rounded-xl shadow-sm border border-white/10'>

      <span className='text-sm MyFont'>Dark Mode </span>

      <div className="w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer  Btn_Dark">
        <div className="w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 Btn_Dark_toggle"></div>
      </div>

    </div>
  )
}
