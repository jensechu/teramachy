var Monster = React.createClass({
    propTypes: {
      name: React.PropTypes.string,
      species: React.PropTypes.string,
      hunger: React.PropTypes.number
    },
    mixins : [],

    getInitialState: function() {
      return {
        name: '',
        species: 'egg',
        hunger: 0
      };
    },

    handleCreation: function(e) {
      e.preventDefault();

      this.setState({
        name: this.refs.information.refs.name.getDOMNode().value,
        species: this.refs.information.refs.species.getDOMNode().value
      });
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    _parseData : function() {},
    _onSelect : function() {},

    _formattedImageURL: function(string) {
      return './assets/images/' + string + '.png';
    },

    render : function() {
      return (
        <div className='monster'>
          <img src={this._formattedImageURL(this.state.species)}></img>
          <h2>Name: {this.state.name}</h2>
          <h2>Species: {this.state.species}</h2>

          <Information ref='information' handleCreation={this.handleCreation} />
        </div>
      );
    }
});
