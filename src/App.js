import React, {useEffect, useState} from 'react';
import './App.css';
import data from './data';
import styled from '@emotion/styled'

const StyledLi = styled.li`
  font-size: 23px;
  text-align: initial;
  font-weight: 500;
  margin-left: 15px;
`
const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
`
const StyledInputSearch = styled.input`
  border-radius: 5px;
  border: 2px solid pink;
`

function App() {
    const [search, setSearch] = useState('')
    let searchedList = [];
    let list = [];
useEffect(()=>{

})


    if (search) {
        searchedList = data.map((item, i) =>
            data[i].toLowerCase().includes(search.toLowerCase()) ? <StyledLi key={i}>{item}</StyledLi> : ''
        );
    } else {
        list = data.map((item, i) =>
            <StyledLi key={i}>{item}</StyledLi>
        );
    }

    const setListData = (event) => {
        setSearch(event.target.value);
    }
    console.log('searchedList', searchedList, 'list', list)

    return (
        <div className="App">
            <h1>HELLO</h1>
            <StyledInputSearch type="text" placeholder={'...Search'} value={search} onChange={(event)=>setListData(event)}/>
            <StyledOl>{search.length > 0 ? searchedList : list}</StyledOl>
        </div>
    );
}

export default App;
