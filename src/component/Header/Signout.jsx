import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import ReactDOM from 'react-dom';

import SignOutIcon from '../../assets/images/sign-out.png';
import { signout } from '../../features/users/usersSlice';

export default function SignOutLink() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignout = () => {
    dispatch(signout());
    navigate('/');
  };

  const [openModalSignOut, setOpenModalSignOut] = useState(false);
  return (
    <>
      <li onClick={() => setOpenModalSignOut(true)}>
        <Link className='menu__item' to='#'>
          <img className='sign-out-icon' src={SignOutIcon} alt='' />
          Sign Out
        </Link>
      </li>
      {openModalSignOut
        ? ReactDOM.createPortal(
            <div
              id='custom-modal'
              className={`custom-modal ${openModalSignOut ? '' : 'modal-hide'}`}
            >
              <div
                id='custom-modal-close'
                onClick={() => setOpenModalSignOut(false)}
                className='custom-modal--bg'
              ></div>
              <div className='custom-modal--container'>
                <div className='custom-modal--content'>
                  <div className='modal-content'>
                    <strong>Are you sure to log out?</strong>
                    <div>
                      <button
                        className='custom-btn mr-1 pl-6 pr-6'
                        onClick={onSignout}
                      >
                        Yes
                      </button>
                      <button
                        className='custom-btn ml-1 pl-6 pr-6'
                        onClick={() => setOpenModalSignOut(false)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.getElementById('portal-root')
          )
        : ''}
    </>
  );
}
