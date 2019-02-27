import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { I18nProvider } from '@lingui/react'

import catalogEn from '../i18n/en/messages'
import catalogRu from '../i18n/ru/messages'
import catalogUk from '../i18n/uk/messages'

import Routing from './Routing'
import { Header } from './common'

const catalogs = {
  en: catalogEn,
  ru: catalogRu,
  uk: catalogUk
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#ffcad4'
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <I18nProvider language="ru" catalogs={catalogs}>
        <Router>
          <>
            <Header />
            <Routing />
          </>
        </Router>
      </I18nProvider>
    </MuiThemeProvider>
  )
}

export default App
