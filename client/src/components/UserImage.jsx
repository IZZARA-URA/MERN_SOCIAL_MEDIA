import { Box } from "@mui/material"

import { prefix } from "prefix";

const UserImage = ({ image, size = "60px"}) => {
    // console.log(image)
    return (
        <Box width={size} height={size}>
            <img
                style={{ objectFit: "cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alt="user"
                src={`${prefix}/assets/${image}`}
            />
         </Box>
    )
}
export default UserImage