import React from 'react'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'

import { Box } from "@mui/material"

import Navbar from 'scenes/navbar'
import UserWidget from 'scenes/widgets/UserWidget'
import MyPostWidget from 'scenes/widgets/MyPostWidget'
import PostsWidget  from 'scenes/widgets/PostWidget'
import FriendListWidget from 'scenes/widgets/FriendListWidget'
import AdvertWidget from 'scenes/widgets/AdvertWidget'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
  const { _id, picturePath } = useSelector((state) => state.user)

  return (
    <Box>
      <Navbar/>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex": "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%": undefined}>
          {/* USER WIDGET */}
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%": undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {/* MY POST WIDGET */}
          <MyPostWidget picturePath={picturePath}/>

          {/* POSTS WIDGET */}
          <PostsWidget   userId={_id}/>

        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* ADVERT WIDGET */}
            <AdvertWidget />
            <Box m="2rem 0"></Box>
            {/* FRIEND LIST WIDGET */}
            {/* <FriendListWidget userId={_id} /> */}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
