
const Sidebar = () => {
  return (
    <section className='w-10 flex flex-col items-center gap-2 rounded-full shadow-sidebar p-2 grayscale fixed'>
      <div className='cursor-pointer w-10 h-10 flex items-center justify-center'>
        <img src="/icons/product-icon.svg" alt="icon" />
      </div>
      <div className='cursor-pointer w-10 h-10 flex items-center justify-center'>
        <img src="/icons/product-icon2.svg" alt="icon2" />
      </div>
      <div className='cursor-pointer w-10 h-10 flex items-center justify-center'>
        <img src="/icons/product-icon3.svg" alt="icon3" />
      </div>
      <div className='cursor-pointer w-10 h-10 flex items-center justify-center'>
        <img src="/icons/product-icon4.svg" alt="icon4" />
      </div>
    </section>
  )
}

export default Sidebar