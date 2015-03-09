var Monster = React.createClass({
    propTypes: {
      name: React.PropTypes.string,
      species: React.PropTypes.string,
      hunger: React.PropTypes.number,
      showCreationForm: React.PropTypes.bool,
      showCreatureInfo: React.PropTypes.bool,
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
        name: this.refs.creationInfo.refs.name.getDOMNode().value,
        species: this.refs.creationInfo.refs.species.getDOMNode().value,
        hunger: 50,
        creationDate: new Date(),
        lastUpdated: 0,
        showCreationForm: false,
        showCreatureInfo: true,
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
        <div>
          { this.state.showCreationForm ? <CreationForm ref='creationInfo' handleCreation={this.handleCreation} speciesImg={this._formattedImageURL(this.state.species)} /> : null }
          { this.state.showCreatureInfo ? <CreatureInfo ref='creatureInfo' name={this.state.name} species={this.state.species} speciesImg={this._formattedImageURL(this.state.species)} /> : null }
          { this.state.showHealthMeter ? <HealthMeter ref='stats' hunger={this.state.hunger} /> : null }
        </div>
      );
    }
});
