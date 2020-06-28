import React, { Component } from 'react'
import Card from './common/card'
import { connect } from 'react-redux'
import { fetchDataUniversities } from '../actions/actions'


class PartnerUniversity extends  Component  {
    constructor(props) {
        super(props);
    
        this.state = {
          univeristies: null,
          isUniversityLoading: false,
        };
      }

    async componentDidMount() {
        this.setState({
            isUniversityLoading: true
        })

        await this.props.onFetchData()
      }

    renderUniversities(uni) {
        uni.map(u => {
            return(
                <p>{uni.univ_name}</p>
            );
        })
    }

    render(){
        const {universities, isLoading, isUniversityLoading} = this.props;

        console.log(this.props);
        return(
            <div className="partner-wrapper">
                <h2>Partner Universities</h2>
                {/* <div className="subtitle">{isLoading === false? universities : 'loading...'}</div>    */}
                <div>
                  {
                    isUniversityLoading === false ? this.renderUniversities(universities) : 'loading'
                  }
                </div>  
            </div>
        );
    }
    
}



const mapStatetoProps = (state) => {
    return { universities: state.universities, error: state.error, isUniversityLoading: state.isUniversityLoading }
  }
  
  const mapDispatchprops = (dispatch) => {
    return { onFetchData: () => dispatch(fetchDataUniversities()) }
  }
  
  
  export default connect(mapStatetoProps, mapDispatchprops)(PartnerUniversity);