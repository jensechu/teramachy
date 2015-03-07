var Monster = React.createClass({displayName: "Monster",
    propTypes: {
      name: React.PropTypes.string,
      src: React.PropTypes.string
    },
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
        React.createElement("div", {className: "monster"}, 
          React.createElement("img", {src: this.props.src}), 
          React.createElement("h2", null, "My name is ", this.props.name, "!")
        )
      );
    }
});
