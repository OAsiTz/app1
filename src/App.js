import React from 'react';
//import {Content,Footer,Header} from './func-components';
import Calendar from './class-component';
import Banner from './banner'
import { Calculator } from './calculator';
import {EventData2} from './event-data'
import RefsFunc from './refs-func';
import RefsArray from './refs-array';
import MessageBox from './state-func';
import { userContext } from './context';
import Header2 from './context-header2';
import Content2 from './context-content2';


export default function App() {
  let[user,setUser] = React.useState()
  return (
    <userContext.Provider value={[user,setUser]}>
    <Header2/>
    <Content2/>
    
    </userContext.Provider>
  )
   
}