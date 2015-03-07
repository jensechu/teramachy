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
        React.createElement("h1", null, "Hello, world!")
      );
    }

});

React.renderComponent(
    React.createElement(Index, null),
    document.querySelector('#example')
);
