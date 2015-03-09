var HealthMeter = React.createClass({
    render : function() {
      var style = {
        width: this.props.hunger + '%'
      }

      return (
        <div className='hunger meter'>
          <div className='level' style={style} data-level={this.props.hunger}>            
          </div>

          <input type='hidden' value={this.props.hunger} />
        </div>
      );
    }
});
