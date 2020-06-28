import React, { Component } from 'react'
import Card from './common/card'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import seniorIcon from '../images/icon-senior.png'
import freshmanIcon from '../images/icon-freshmen.png'


class FAQ extends  Component  {
    constructor(props) {
        super(props);
    
        this.state = {
          contents: null,
          isLoading: false,
        };
      }

    async componentDidMount() {
        this.setState({
            isLoading: true
        })

        await this.props.onFetchData()
      }

    render(){
        const {contents, error, pending, isLoading} = this.props;


        return(
            <div className="scolarship-wrapper">
                <h2>FAQ</h2>
                <div className="faq-style">
                    <div>{isLoading === false? <div dangerouslySetInnerHTML={{ __html: contents.faq_content }} /> : 'loading...'}</div>  
                </div>
            </div>
        );
    }
    
}



const mapStatetoProps = (state) => {
    return { contents: state.contents, error: state.error, isLoading: state.isLoading }
  }
  
  const mapDispatchprops = (dispatch) => {
    return { onFetchData: () => dispatch(fetchData()) }
  }
  
  
  export default connect(mapStatetoProps, mapDispatchprops)(FAQ);