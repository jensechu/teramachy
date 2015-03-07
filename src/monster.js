var Monster = React.createClass({
    propTypes: {
      name: React.PropTypes.string,
      src: React.PropTypes.string
    },
    mixins : [],

    getInitialState: function() {
      return {};
    },
    getDefaultProps: function() {},

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    _parseData : function() {},
    _onSelect : function() {},

    render : function() {
      return (
        <div className='monster'>
          <img src={this.props.src}></img>
          <h2>My name is {this.props.name}!</h2>
        </div>
      );
    }
});
