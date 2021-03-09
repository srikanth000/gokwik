import React, { useEffect, useState } from 'react' 
import { Flex } from 'rebass'
import GiftCard from '../../src/components/organisms/GiftCard'
import PersistentData from '../utils/LocalStorage'

const HomePage = () => {

  const [state, setState] = useState({mobileNumber: null, valid: false, numberExists: false})



  useEffect(() => {
    const item  =  PersistentData.get('MOBILE_NUMBER')
    if(item){
      setState({...state, mobileNumber: item, numberExists: true})
    }
  }, [])
  const onChangeNumber = (e) => {
    setState({...state, mobileNumber: e.currentTarget.value})
  }

  const getMyGiftCard = () => {
    PersistentData.persist('MOBILE_NUMBER', state.mobileNumber)
    setState({...state, numberExists: true })
  }


  return (
    <Flex flexDirection='column'>
      { !state.numberExists && <GiftCard getMyGiftCard={getMyGiftCard} mobileNumber={state.mobileNumber} valid={state.mobileNumber?.length == 10} onChangeNumber={onChangeNumber} />}
      {state.numberExists && <Flex mt={'24px'} justifyContent='center'>Thank you</Flex>}
    </Flex>
  )
}

export default HomePage;