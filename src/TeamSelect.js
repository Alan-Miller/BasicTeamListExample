import React, { Component } from 'react'

export default class TeamSelect extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.select(1)} disabled={this.props.team === 1}>Team 1</button>
                <button onClick={() => this.props.select(2)} disabled={this.props.team === 2}>Team 2</button>
            </div>
        )
    }
}