import React from 'react'
import Logo from '../wheelchair.svg'
import styled from 'styled-components'
import Banner from '../components/Banner'
const Wrapper = styled.div`
    text-align:center;
    background-color:black;
    height:100vh;
    display:flex;
    @import url('https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap');
    font-family: 'Sulphur Point', sans-serif;
`
const Img=styled.img`
    width:150px;
    height:150px;
    margin-bottom:12px;
    /* align-self:center;
    margin-left : calc(50vw - 3rem); */
    

`
const Start=styled.div`
    color:white;
    align-self:center;
    margin-left : calc(50vw - 3rem);
    font-size:20px; 
`
class Maindisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            id: undefined,
            datas: undefined,
            map: undefined,
            clusterer: undefined,
            value:7019,
            clicked:1,
            subway:undefined,
            markers:[]
            
        })

    }
    render() {
        // this.setState({clicked:this.state.clicked})

        return (
            <Wrapper>
                <Banner Banner bus={false  } click={this.clicked}/>
                
                <Start><Img src={Logo}/><br/>SOV<br/>Save Our Visible</Start>

            </Wrapper>
        )
    }
}
export default Maindisplay