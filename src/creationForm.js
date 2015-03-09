var CreationForm = React.createClass({
    propTypes: {
      species: React.PropTypes.array
    },

    getDefaultProps: function() {
      return {
        species: ['kitty', 'dog', 'mouse']
      };
    },

    render : function() {
      var species = this.props.species.map(function(species, i) {
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
