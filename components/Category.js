import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Category extends Component {
    render() {
        console.log('this.props.category', this.props);

        return (
            <div>
                <Link className='link-home' to='/'><h4>Home</h4></Link>
                <h2>Category title</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { category: state.category}

}

export default connect(mapStateToProps, null)(Category);