
export default function Language() {
     
  return (
    <div  className='Special flex items-center justify-between mt-4 px-4 py-3  rounded-xl shadow-sm border border-white/10'>
        <span className="MyFont">Select Language</span>
        <div className='flex gap-3'>
            <span className='cursor-pointer transition-all duration-300 hover:scale-95'>Arabic</span>
            <span>|</span>
            <span className='cursor-pointer transition-all duration-300 hover:scale-95'>English</span>
        </div>
    </div>
  )
}
