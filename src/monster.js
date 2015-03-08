var Monster = React.createClass({
    propTypes: {
      name: React.PropTypes.string,
      species: React.PropTypes.string,
      hunger: React.PropTypes.number,
      showCreationForm: React.PropTypes.bool
    },
    mixins : [],

    getInitialState: function() {
      var data = {
        name: '',
        species: 'egg',
        hunger: 0,
        showCreationForm: true
      };

      if (localStorage.monster) {
        data = JSON.parse(localStorage.monster);
      }

      return data;
    },

    handleCreation: function(e) {
      e.preventDefault();

      var state = {
        name: this.refs.information.refs.name.getDOMNode().value,
        species: this.refs.information.refs.species.getDOMNode().value,
        showCreationForm: false
      }

      this.setState(state);
      this.saveCreature(state);
    },

    saveCreature: function(state) {
      localStorage.setItem('monster', JSON.stringify(state));
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

          { this.state.showCreationForm ? <CreationForm ref='information' handleCreation={this.handleCreation} /> : null }
        </div>
      );
    }
});
