import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './Styles/main.scss'
import Home from './Pages/Home'
import API from './Services/API'
import {connect} from 'react-redux'
import Types from './Models/Types'
import {Helmet} from 'react-helmet'
import {getContact} from './redux/actions'

const App  = ({updateContact, contacts}) => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getContact())
    // API.getContact().then((response) => {
    //   if(contacts.length < 1){
    //     updateContact({type: Types.UPDATE_CONTACT, newData: response})
    //   }else{
        
    //   }
    // })
  })


  return (
    <> 
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact App</title>
        </Helmet>
      <Home />
    </>
  ) 
}

const mapStateToProps = (state) => {
  return {
    contacts : state,
    province : state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       getContact : dispatch(getContact)
//   }
// }

export default connect(mapStateToProps)(App)