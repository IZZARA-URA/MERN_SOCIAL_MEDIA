import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import FlexBetween from "./FlexBetween"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setFriends } from "state"
import UserImage from "./UserImage"


const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispath = useDispatch()
    const navigate = useNavigate() 

    const { _id } = useSelector((state) => state.user)
    const token = useSelector((state) => state.token)
    const friends = useSelector((state) => state.user.friends)

    const { palette } = useTheme() 
    const primaryLight = palette.primary.light
    const primaryDark = palette.primary.dark
    const main = palette.neutral.main 
    const mediun = palette.neutral.mediun

    const isFriend = friends.find((friend) => friend._id === friendId)

    const patchFriend = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${_id}/${friendId}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
        )
        const data = await response.json() 
        dispath(setFriends({ friends: data }))
    }


    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px" />
                <Box>
                    
                </Box>
            </FlexBetween>

        </FlexBetween>
    )
}


export default Friend