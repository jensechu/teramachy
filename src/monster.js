var Monster = React.createClass({
    propTypes: {
      name: React.PropTypes.string,
      species: React.PropTypes.string,
      hunger: React.PropTypes.number,
      showCreationForm: React.PropTypes.bool,
      showHealthMeter: React.PropTypes.bool
    },
    mixins: [SetIntervalMixin],

    getInitialState: function() {
      var data = {
        name: '',
        species: 'egg',
        hunger: 0,
        creationDate: false,
        showCreationForm: true,
        showStats: false
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
        hunger: 50,
        creationDate: new Date(),
        lastUpdated: 0,
        showCreationForm: false,
        showHealthMeter: true
      }

      this.setState(state);
      this._saveCreature(state);
      this.setInterval(this._decreaseStats, 1000);
    },

    _saveCreature: function(state) {
      localStorage.setItem('monster', JSON.stringify(state));
    },

    _decreaseStats: function() {
      var hunger = this.state.hunger;

      if (hunger > 5) {
        hunger = hunger - 5;
      }

      var state = {
        hunger: hunger
      }

      this.setState(state);
      this._saveCreature(this.state);
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
          { this.state.showHealthMeter ? <HealthMeter ref='stats' hunger={this.state.hunger} /> : null }
        </div>
      );
    }
});
