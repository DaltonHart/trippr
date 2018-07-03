import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'


class Post extends Component {

  render() {
    var divStyle = {
      backgroundImage: `url(http://www.babson.edu/admission/visiting-babson/san-francisco/PublishingImages/san-francisco-cityscape.jpg)`
    };

    return(
      <div>
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-cover" style={divStyle}>
            <div className="blog-author">
              <h3> Author:User Name</h3>
            </div>
          </div>
        </div>

        <div className="blog-body">
          <div className="blog-title">
            <h1>A Trip Though The Mountains</h1>
          </div>
          <div className="blog-summary">
            <p>freegan squid Echo Park cornhole authentic Neutra try-hard vegan church-key bitters fashion axe tofu Pitchfork roof party Shoreditch banh mi messenger bag pour-over Marfa locavore farm-to-table cray jean shorts tousled irony 90's raw denim XOXO small batch asymmetrical kale chips fanny pack chillwave retro stumptown aesthetic Truffaut kitsch PBR&B DIY cliche gastropub Austin master cleanse you probably haven't heard of them 8-bit Schlitz polaroid butcher wolf synth seitan food truck Wes Anderson flannel whatever ugh trust fund yr hoodie kogi Portland fingerstache twee Vice pork belly fap iPhone Banksy pickled paleo mustache Odd Future scenester beard sriracha crucifix mlkshk readymade biodiesel Tonx gentrify blog Helvetica plaid +1 meggings art party forage selfies semiotics ennui direct trade  cardigan actually umami Cosby sweater leggings mumblecore viral mixtape American Apparel keytar dreamcatcher High Life tattooed salvia Carles heirloom gluten-free Pinterest photo booth ethical tote bag disrupt chia skateboard PBR Kickstarter bicycle rights put a bird on it banjo flexitarian letterpress sartorial.</p>
          </div>
        </div>
        <div className="blog-footer">
        </div>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Post)
