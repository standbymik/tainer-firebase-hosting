import { loadDB } from '../components/firestore/db'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import React, { Component } from 'react'

class Home extends Component {

    state = {
        name: ''
    }

    addForum = () => {
        console.log('add')
    }

    render() {
        const { name } = this.state
        return (
            <div>
                <div>
                    <input name="name" value={name} onChange={(e) => { this.setState({ name:e.target.value }) }} />
                    <button onClick={this.addForum}>Add</button>
                </div>
            </div>
        )
    }
}


export default Home
