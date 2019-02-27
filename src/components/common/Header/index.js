import React, { Component } from 'react'
import { Trans } from '@lingui/macro'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import Logo from '../Logo'

class Header extends Component {
  state = {  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <div>
            <Button><Trans>Sign Up</Trans></Button>
            <Button><Trans>Log In</Trans></Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
