var CreationForm = React.createClass({
    propTypes: {
      species: React.PropTypes.array
    },
    mixins : [],

    getInitialState: function() {
      return {};
    },
    getDefaultProps: function() {
      return {
        species: ['kitty', 'dog', 'mouse']
      };
    },

    componentWillMount : function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount : function() {},

    _parseData : function() {},
    _onSelect : function() {},

    render : function() {
      var species = this.props.species.map(function(species, i) {
        //Maybe these options should be it's own component?
        return (
          <option>{species}</option>
        );
      }.bind(this))
      return (
        <form name='monsterInformation'>
          <input
            ref='name'
            type='text'
            onChange={this.props.update}
          />

          <select
            ref='species'
            onChange={this.props.update}>
            {species}

          </select>

          <button onClick={this.props.handleCreation}>Create</button>
        </form>
      );
    }

});
