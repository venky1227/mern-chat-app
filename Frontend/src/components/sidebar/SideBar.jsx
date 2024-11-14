import React from 'react'
import Conversations from '../conversations';
import SearchInput from '../SearchInput';
import LogoutButton from '../LogoutButton';

const SideBar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations />
      <LogoutButton />

    </div>
  )
}

export default SideBar;




// STARTER CODE FOR THIS FILE

// import React from 'react'
// import Conversations from '../conversations';
// import SearchInput from '../SearchInput';
// import LogoutButton from '../LogoutButton';

// const SideBar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//       <SearchInput/>
//       <div className='divider px-3'></div>4
//       <Conversations />
//       <LogoutButton />

//     </div>
//   )
// }

// export default SideBar;
