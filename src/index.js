var Index = React.createClass({
    propTypes: {},
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
        <div>
          <h1>teramachy</h1>

          <Monster
            name= "Stein"
            src= "./assets/images/kitty.png"
          />
        </div>
      );
    }

});

React.render(
    <Index/>,
    document.querySelector('#content')
);
