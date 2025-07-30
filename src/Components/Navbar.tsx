import { ChevronLeft } from "@mui/icons-material"
import {Container, Link, } from "@mui/material"
const Navbar = () => {

  return (
    <Container maxWidth={false} disableGutters className="flex gap-[30px] items-center justify-center pt-5 pb-5 mt-10 navbar">
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font"
      >
        Collections <ChevronLeft className="link-font"  style={{ rotate:"270deg"}}/>
      </Link>
      <Link
        component="button"
        variant="body1"
      className="link-font  link-nav-font"
      >
        Interior <ChevronLeft className="link-font"  style={{ rotate:"270deg"}}/>
      </Link>
      <Link
        component="button"
        variant="body1"
      className="link-font  link-nav-font"
      >
        Play <ChevronLeft className="link-font"  style={{ rotate:"270deg"}}/>
      </Link>
      <Link
        component="button"
        variant="body1"
      className="link-font  link-nav-font"
      >
        wear <ChevronLeft  className="link-font" style={{ rotate:"270deg"}}/>
      </Link>
      <Link
        component="button"
        variant="body1"
      className="link-font  link-nav-font"
      >
       travel <ChevronLeft className="link-font"  style={{ rotate:"270deg"}}/>
      </Link>
      <Link
        component="button"
        variant="body1"
      className="link-font  link-nav-font"
      >
      gifts <ChevronLeft className="link-font"  style={{ rotate:"270deg"}}/>
      </Link>
      <Link
        component="button"
        variant="body1"
      className="link-font  link-nav-font"
      >
        Blog
      </Link>
      <Link
        component="button"
        variant="body1"
     className="link-font  link-nav-font"
      >
        About
      </Link>
      <Link
        component="button"
        variant="body1"
      className="link-font  link-nav-font"
      >
      Contact
      </Link>
    </Container>
  )
}

export default Navbar