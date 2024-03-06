import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,
} from "@mui/icons-material"

import { 
    Box,
    Divider,
    IconButton,
    Typography,
    useTheme
} from  "@mui/material"

import FlexBetween from "components/FlexBetween"
import Friend from "components/Friend"
import WidgetWrapper from "components/WidgetWrapper"


const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments,
}) => {



    const { palette } = useTheme() 
    const main = palette.neutral.main 
    const primary = palette.primary.main

    return (
        <WidgetWrapper m="2rem 0">
            <Friend
                friendId={postUserId}
                name={name}
                subtitle={location}
                userPicturePath={userPicturePath}
            />
            <Typography color={main} sx={{ mt: "1rem"}}>
                {description}
            </Typography>
        </WidgetWrapper>
    )
}

export default PostWidget





