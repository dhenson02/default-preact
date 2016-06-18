'use strict';

import { h, Component } from 'preact';
/** @jsx h */

export class Home extends Component {
    constructor ( props ) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps !== this.props;
    }

    componentWillMount () {
        // this.setState({});
    }

    render ({ league }) {
        return (
            <div className="">
                Home Screen
            </div>
        );
    }
}

export class Roster extends Component {
    constructor ( props ) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps !== this.props;
    }

    componentWillMount () {
        // this.setState({});
    }

    render ({ players }) {
        return (
            <div className="">
                Roster
            </div>
        );
    }
}

export class LiveScoring extends Component {
    constructor ( props ) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps !== this.props;
    }

    componentWillMount () {
        // this.setState({});
    }

    render ({ teams, week }) {
        return (
            <div className="">
                Live Scoring
            </div>
        );
    }
}
