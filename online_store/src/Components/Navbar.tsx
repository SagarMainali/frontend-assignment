import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <div className='flex justify-between items-center p-3 bg-slate-200 rounded-md'>

      {/* company logo and homepage */}
      <NavLink to='/'>
        <img src="/logo.svg" alt="company_logo" />
      </NavLink>

      <div className='flex items-center gap-4'>
        {/* search box */}
        <div className="rounded-lg w-[14rem] h-[34px] overflow-hidden flex">
          <input type="text" placeholder="Search..." className="w-[85%] rounded-l-lg outline-0 border-2 border-slate-300 bg-slate-100 text-primary-dark text-sm caret-bg-primary px-4 placeholder:text-primary-dark placeholder:text-sm" />
          <button className="w-[15%] h-full bg-slate-300" onClick={() => console.log('clicked')}>
            <svg className="w-full md:h-[1.2rem] h-[1rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#001C30">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>

        {/* cart page navigation */}
        <NavLink to='/cart'>
          <div className='border-2 border-primary-dark p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 576 512" fill='#001C30'>
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </div>
        </NavLink>
      </div>

    </div>
  )
}
