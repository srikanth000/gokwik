import React from 'react' 
import ToggleVisibility from '../atoms/ToggleVisibility'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import { Flex } from 'rebass'
import styled from 'styled-components'
 
const InputExtended = styled(Input)`
	width: 100%;
	height: 50px;
	border-radius: 24px;
	text-align: center;
	font-size: 16px;
	font-weight: 400;
`

const ButtonExtended = styled(Button)`
	width: 100%;
	border-radius: 24px;
	text-align: center;
	justify-content: center;
	margin-top: 24px;
	height: 50px;
	padding: 12px 12px;
	border: none;

`

const GiftCard = ({getMyGiftCard, valid,  onChangeNumber, mobileNumber}) => {

	const DisplayiftCard = () => {
		return (
			<Flex width={['100%']} mt={'48px'} px={'24px'} alignItems='center' flexDirection='column' justifyContent='center'>
				<InputExtended width='100%' maxLength='10' value={mobileNumber} onChange={onChangeNumber} placeholder='Enter mobile number' />
				<ButtonExtended disabled={!valid}  mt={'12px'} backgroundColor='#0398fc' color='white' >
					<Text bold={true} color='white' onClick={getMyGiftCard} justifyContent='center'>Wow! Get my paytm Gift card</Text>
				</ButtonExtended>
			</Flex>
		)
	}
	return (
		<>
		  <ToggleVisibility visibleOn={{mobile: true, desktop: false, tablet: false}}>
				{DisplayiftCard()}
			</ToggleVisibility>
			<ToggleVisibility visibleOn={{mobile: false, desktop: true, tablet: true}}>
				<Flex width='50%' ml={'20%'}>
					{DisplayiftCard()}
				</Flex>
			</ToggleVisibility>
		</>
	)
}

export default GiftCard;