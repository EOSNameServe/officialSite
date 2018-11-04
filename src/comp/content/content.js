import React, { Component } from 'react';
import CardWhatis from '../card/card_whatis'
import CardAdvantage from '../card/card_advantage'
import CardBrowser from '../card/card_browser'
import CardProject from '../card/card_project'
import CardPartner from '../card/card_partner'
import CardContactus from '../card/card_contactus'

import './content.css'

class Content extends Component {
    render () {
      return (
        <div>    
          <CardWhatis></CardWhatis>
          <CardAdvantage></CardAdvantage>
          <CardBrowser></CardBrowser>
          <CardProject></CardProject>
          <CardPartner></CardPartner>
          <CardContactus></CardContactus>
        </div>
      )
    }
}

export default Content
  