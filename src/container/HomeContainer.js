import Second from '../Component/Second';
import { connect } from 'react-redux';
import { addToCart } from '../Service/actions/action';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Second);