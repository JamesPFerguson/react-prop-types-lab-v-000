// Code Product Component Here

export default class Product extends React.Component {

  render() {
    return (
      <div className="Product">
        <ul>

        <li> {this.props.name}         </li>
        <li> {this.props.producer}     </li>
        <li> {this.props.hasWatermark} </li>
        <li> {this.props.color}        </li>
        <li> {this.props.weight}       </li>


        </ul>
      </div>
    )
  }

  Product.defaultProps = {
    hasWatermark: false
  }

  Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: function(props, weight, product)  {
      if (weight > 300 || weight < 80) {
        return new Error(
          'Invalid prop `' + weight + '` supplied to' +
          ' `' + product + '`. Validation failed.'
        );
      }
    }
  }

  function(props, weight, product)  {
    if (weight > 300 || weight < 80) {
      return new Error(
        'Invalid prop `' + weight + '` supplied to' +
        ' `' + product + '`. Validation failed.'
      );
    }
  }


}
