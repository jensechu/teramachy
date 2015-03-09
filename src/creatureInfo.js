var CreatureInfo = React.createClass({
    render : function() {
      return (
        <div className='monster'>
          <img src={this.props.speciesImg}></img>
          <h2>Name: {this.props.name}</h2>
          <h2>Species: {this.props.species}</h2>
        </div>
      );
    }
});
