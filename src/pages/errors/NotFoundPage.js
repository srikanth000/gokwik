import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex } from 'rebass';

const NotFoundPage = () => {
  const { push } = useHistory()
  return (
    <Flex width='100vw' flexDirection='column' justifyContent='center' alignItems='center'>
      <Flex>Page Not Found</Flex>
      {/* <Button onClick={onClick}>
        Contact Us
      </Button> */}
    </Flex>
  )
}

export default NotFoundPage