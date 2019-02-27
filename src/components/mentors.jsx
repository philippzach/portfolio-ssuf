import React from 'react';
import Img from 'gatsby-image'

class Mentors extends React.Component {
render() {
    return (
        <div className="panel" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="paddingtabs">
        {console.log(this.props.data)}
          <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor1.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Jeremy Tai Abbett</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor2.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Cem Aydogan</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <Img fluid={this.props.data.mentor3.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Roger Baur</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor4.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Daniel Biene</h3>
                      </div>
                    </article>
            </div>
            <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor5.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Raphael Bienz</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <Img fluid={this.props.data.mentor6.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Adrian Bieri</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <Img fluid={this.props.data.mentor7.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Otto	Bitterli</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor8.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Noel Blessing</h3>
                      </div>
                    </article>
                    </div>
            <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor9.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Christian Brand</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <Img fluid={this.props.data.mentor10.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Nicolas Bürer</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <Img fluid={this.props.data.mentor11.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Alex	Curiger</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor12.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Mohammad<br/>Dastmaltchi</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor13.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Guillaume Dubray</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor14.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Oliver Durrer</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor15.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Frank Edelkraut</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor16.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Kerstin Elsholz</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor18.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Samuel Fricker</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor19.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Sacha D. Gerber</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor20.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Alex	Grechanowski</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor21.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Pascal Gurtner</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor24.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Milko Hensel</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor25.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Markus Herzberg</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor27.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Karim-Alexandre<br/>Koubaa-Olesen</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor28.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">David D.	Laux</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor29.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Thomas Liebe</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor30.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Daniela Maag</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor32.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Daniela Marino</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor33.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Olivia Menzi</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor34.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Tom Morf</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor35.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Cornel Müller</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor36.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Matthias Müller</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor37.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Manuel Nappo</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor38.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Claudio Nessi</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor39.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Stewart Noakes</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor40.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Silas Obrist</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor41.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Corinne Pellerin</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor42.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Paolo Petrolini</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor43.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Lax Poojary</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor44.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Myriam Reinle</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor45.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Ruud Rikhof</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor46.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Miguel Rodriguez</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor47.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Andrea Rutishauser</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor48.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Yusuf Savmaz</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor50.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Marie-Christine<br/>Schindler</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor51.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Andreas Schlenker</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor52.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Michael Schmid</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor53.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Reto Senn</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor54.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Domonique Specht</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor55.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Isa Steiner</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor56.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Rolf	Styger</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor57.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Marc	Sutterlüti</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor59.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Alexander<br/>Von Schirmeister</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor60.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Roger Weber</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={this.props.data.mentor61.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Dimitri Wittwer</h3>
                      </div>
                    </article>
                  </div>
            </div>
        </div>
    )
}
}

export default Mentors;