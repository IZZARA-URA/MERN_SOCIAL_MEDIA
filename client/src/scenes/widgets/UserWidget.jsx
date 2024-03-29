
import React from 'react'
import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { prefix } from "../../prefix/index.js";

const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null)
    const token = useSelector((state) => state.token)
    const navigate = useNavigate()

    // THEME
    const { palette } = useTheme();
    const dark = palette.neutral.dark
    const medium = palette.neutral.medium
    const main = palette.neutral.main

    const getUser = async () => {
      const response = await fetch(
        `${prefix}/users/${userId}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
      const data = await response.json()
      setUser(data)
      // console.log(data)
    }

    useEffect(() => {
      getUser()
    }, [])

    if(!user) {
      return null
    }

    const { 
      firstName, 
      lastName, 
      location, 
      occupation,
      viewedProfile,
      impressions,
      friends,
    } = user

  return (
    <WidgetWrapper>
        {/* FIRST ROW */}
        <FlexBetween
            gap="0.5rem"
            pb="1.1rem"
            onClick={() => navigate(`/profile/${userId}`)}
        >
            <FlexBetween gap="1rem">
              <UserImage image={picturePath} />
              <Box>
                <Typography>
                  {firstName} {lastName}
                </Typography>
                <Typography color={medium}>{friends.length} Friends </Typography>
              </Box>
            </FlexBetween>
            <ManageAccountsOutlined />
        </FlexBetween>

        <Divider />

        {/* SECOND ROW */}
        <Box p="1rem 0">
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
            <LocationOnOutlined fontSize='large' sx={{ color: main }} />
            <Typography color={medium}>{location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem" >
            <WorkOutlineOutlined fontSize='large' sx={{ color: main }} />
            <Typography color={medium}>{occupation}</Typography>
          </Box>
        </Box>

        <Divider />

        {/* THIRD  ROW */}
        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography color={medium} > Who's viewed your profile</Typography>
            <Typography color={main} fontWeight="500">
              {viewedProfile}
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography color={medium} > Imresssions of your post</Typography>
            <Typography color={main} fontWeight="500">
              {impressions}
            </Typography>
          </FlexBetween>
        </Box>

        <Divider />


        {/* FORTH ROW */}
        <Box p="1rem 0">
          <Typography>
            Social Profiles
          </Typography>

          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
              <img src='../assets/twitter.png' alt="twitter"/>
              <Box>
                <Typography color={main} fontWeight="500">
                  Twitter
                </Typography>
                <Typography color={medium}> Social Network</Typography>
              </Box>
            </FlexBetween>
            <EditOutlined sx={{ color: main }} />
          </FlexBetween>

          <FlexBetween gap="1rem">
            <FlexBetween gap="1rem">
              <img src='../assets/linkedin.png' alt="likedin"/>
              <Box>
                <Typography color={main} fontWeight="500">
                  Likedin
                </Typography>
                <Typography color={medium}> Network Platform</Typography>
              </Box>
            </FlexBetween>
            <EditOutlined sx={{ color: main }} />
          </FlexBetween>
        </Box>
    </WidgetWrapper>
  )
}

export default UserWidget
