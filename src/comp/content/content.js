import React, { Component } from 'react';
import CardWhatis from '../card/card_whatis'
import CardAdvantage from '../card/card_advantage'
import CardBrowser from '../card/card_browser'
import CardProject from '../card/card_project'
import CardPartner from '../card/card_partner'
import CardContactus from '../card/card_contactus'

class Content extends Component {
    render () {
      return (
        <main>    
          <CardWhatis></CardWhatis>
          <CardAdvantage></CardAdvantage>
          <CardBrowser></CardBrowser>
          <CardProject></CardProject>
          <CardPartner></CardPartner>
          <CardContactus></CardContactus>
        </main>
      )
    }
}

export default Content
  