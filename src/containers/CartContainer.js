import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Cart from './../components/Cart'
import * as Message from './../constants/Message'
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions';

function CartContainer(props) {

    var { cart, onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = props


    const showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>

        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                )
            })
        }
        return result
    }

    const showToTalAmount = (cart) => {
        var result = null
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result
    }

    return (
        <Cart>
            {showCartItem(cart)}
            {showToTalAmount(cart)}
        </Cart>
    );
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);