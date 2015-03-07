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
        <h1>Hello, world!</h1>
      );
    }

});

React.renderComponent(
    <Index/>,
    document.querySelector('#example')
);
