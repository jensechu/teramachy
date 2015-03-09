var CreationForm = React.createClass({
    propTypes: {
      species: React.PropTypes.array
    },

    getDefaultProps: function() {
      return {
        species: ['Cat', 'Dog', 'Bear']
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
          <img src={this.props.speciesImg}></img>
          <div className='form-row'>
            <label>Name:</label>
            <input
              ref='name'
              type='text'
              onChange={this.props.update}
            />
          </div>

          <div className='form-row'>
            <label>Species:</label>
            <select
              ref='species'
              onChange={this.props.update}>
              {species}

            </select>
          </div>

          <button onClick={this.props.handleCreation}>Create</button>
        </form>
      );
    }

});
