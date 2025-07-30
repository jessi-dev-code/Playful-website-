import { Container, Typography } from "@mui/material"
import "../App.css"
import "../mediaquery.css"
const Newsletters = () => {
  return (
    <div className="NewsletterSection">
        <Container sx={{
            height:{xs:"60px",md:"41px"}
        }} className=" flex items-center justify-center">
            <Typography variant="body2" className="NewsletterText">Sign up to our newsletter for VIP treatment & 10% off</Typography>
        </Container>
    </div>
  )
}

export default Newsletters