import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NevigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'

const Nevigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);
    return (
        <>
            <NevigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>
                        ) : (
                            <NavLink to='/sign-in'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NevigationContainer>
            <Outlet />
        </>
    );
};

export default Nevigation;