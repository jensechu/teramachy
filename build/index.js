var Index = React.createClass({displayName: "Index",
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
        React.createElement("div", null, 
          React.createElement("h1", null, "teramachy"), 

          React.createElement(Monster, {
            name: "Stein", 
            src: "./assets/images/kitty.png"}
          )

        )
      );
    }

});

React.render(
    React.createElement(Index, null),
    document.querySelector('#content')
);
