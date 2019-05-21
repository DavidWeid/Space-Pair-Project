import React, { Component } from "react";
import "./style.css";

import { SpiritHighlights, OpportunityHighlights, CuriosityHighlights } from "../Highlights";

class RoverHistory extends Component {

  state = {
    highlight: "spirit"
  }

  changeHighlight = e => {
    e.preventDefault();
    this.setState({ highlight: e.target.dataset.highlight })
  }

  render() {
    return (
      <div className="fullArea" >
        <div className="outputArea">
          <div className="redLine"></div>

          <h1 className="pageTitle">Rover Exploration</h1>
          <div className="redLine"></div>
          <img
            className="roverInfoImg floatLeft"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Lowell_Mars_channels.jpg"
            alt="Lowel's drawings of Canals on Mars, 1913"
          />
          <p className="pageInfo">
            Mars has been in the fascination of people ever since they have started looking up at the night sky. Ancient mythology placed it’s wandering path through space as a foreboding of war and conflict. As technology developed, we began to peel back the layers of mystery that surround the planet. Sometimes, as we make progress in understanding, we can go down wrong paths. In 1877, the Italian astronomer Giovanni Schiaparelli observed what he described as channels on Mars. Mistranslation of the italian word “canali” into english fueled speculation of alien-built canals crossing much the planet.
          </p>

          <p className="pageInfo">
            Fast forward to 1976, the Viking spacecrafts land on the surface on Mars. What they find when they get there is a dead planet. There is absolutely no water on the surface. The solar radiation that barrels through the thin Martian atmosphere is strong enough to sterilize anything above ground. The scientific data that came back to Earth were disheartening.
          </p>
          <p className="pageInfo">
            There are interesting problems with landing a spacecraft on Mars. Interesting is not the right word. There are serious problems with landing a spacecraft on Mars. It has more than enough gravity to make pretty dark craters out of landing craft. What it doesn’t have enough of is air. When a spacecraft re-enters Earth’s atmosphere, most of its energy is displaced into the air. Outside of the Space Shuttle, SpaceX, and a military craft or two, most returning spacecraft use parachutes to land safely. Parachutes in Martian air will still leave you traveling faster than the speed of sound. The distance between Earth and Mars is such that communication time between the spacecraft and Earth is measured in minutes, so not only will the spacecraft have to use rockets to land, it will have to do so on it’s own. It might not come as a surprise then that there have been 56 missions to Mars, with only 26 being successful.
          </p>
          <img
            className="roverInfoImg floatRight"
            src="https://imagecache.jpl.nasa.gov/images/640x350/entry-browse-640x350.jpg"
            alt="Mars entry"
          />
          <p className="pageInfo">
            A successful mission is where we continue our exploration of Mars. Pathfinder landed in 1997. It carried with it the first rover to the red planet, Sojourner. The rover was designed to survive 7 Martian days, or sols. It made it to 83. Pathfinder was designed to send back information about Martian geology and climate. It’s main purpose was a proof of concept for what was to come.
          </p>
          <div style={{ clear: "both" }}></div>
          <div className="redLine"></div>
          <h2 className="pageTitle">Spirit and Opportunity</h2>
          <div className="redLine"></div>

          <img
            className="roverInfoImg floatLeft"
            src="http://www.fourth-millennium.net/mission-artwork/mars-multi-scout-orbiter-lander-balloon-airbags.JPG"
            alt="MERS airbag landing system"
          />
          <p className="pageInfo">
            The Spirit and Opportunity rovers launched a little less than a month apart in 2003. They touched down on the Martian surface using the same combination of parachutes, rockets, and airbags that Pathfinder used. They landed on opposite sides of Mars, both near the equator for their solar panels to gather as much sunlight as possible. They had a primary mission length of 90 sols and they were there to find evidence that Mars had water on its surface sometime in its distant past. These rovers would prove to be aptly named.
          </p>

          <p className="pageInfo">
            Spirit landed where scientists believed used to be an ancient lake bed, but when it arrived, there was no evidence that there was water. It landed in the same type of volcanic rocks that Pathfinder and the Viking landers also landed. If Spirit was going to find any evidence of water, it was going to have to drive a long way to find it.
          </p>
          <div style={{ clear: "both" }}></div>
          <p className="pageInfo">
            Opportunity hit a hole in one. The airbag landing system came to rest in a shallow crater. Pictures from its first sol, before the rover had even left the landing platform, captured never before seen Martian bedrock. When Opportunity drove over and inspected the bedrock closer, there were these little tiny spheres all over the place. They turned out to be made of hematite, a mineral which is mainly formed in the presence of water, but can also be related to volcanic conditions like the ones that we know Mars has had in the past. The “clincher” was that these hematite spherules were also found inside of the bedrock, not just in layers on top of it. Sol 48, Opportunity provided compelling evidence that there was once water on the surface of Mars.
          </p>
          <img
            className="roverInfoImg floatRight"
            src="https://www.snopes.com/tachyon/2019/02/marsrover.jpg?resize=865,452"
            alt="Opportunity Rover"
          />
          <p className="pageInfo">
            Spirit’s computer malfunctioned and had to be debugged even before Opportunity landed, The software patch was immediately added to Opportunity. One of Spirits’ wheels broke on sol 779. It had to drag it for the rest of the time it was going anywhere on Mars. It did the best it could, but the area it was in was scientifically uninteresting. Because Spirit had the broken wheel, however, there was a positive side effect. It was digging a very long trench on the Martian surface. On several occasions, churning up the soil brought to the surface different minerals that provided stunning evidence for water on Mars. Scientists believe that hot springs used to be where Spirit was limping across the surface.
          </p>
          <p className="pageInfo">
            These rovers were supposed to have a mission duration of 90 sols. Spirit racked up 2208 sols before communications were lost during a Martian winter. Opportunity kept exploring Mars almost another 3000 sols before its last communication on sol 5111 during a planet-wide dust storm that blocked out most of the sunlight.
          </p>
          <div className="redLine"></div>
          <h2 className="pageTitle">Curiosity</h2>
          <div className="redLine"></div>

          <p className="pageInfo">
            One of the main drawbacks of the Spirit and Opportunity rovers was their dependence on the sun for energy. Solar panels work just fine on the Martian surface. Most of the time. If you are near the equator. If it is not winter. If there is not a planet wide dust storm. Curiosity is a much larger rover, so it would need a lot more power. It ditched the solar panels for a radioisotope thermoelectric generator, RTG. It generates about 4 times the amount of power per day the the solar powers could for Spirit and Opportunity with the added bonus of keeping the rover warm and  freeing up the energy it would take to run as many heaters it would need if it did not have the RTG.
          </p>
          <img
            className="roverInfoImg floatLeft"
            src="https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/import/2013/images/2012/02/PSC0312_MA_103C.jpg?itok=cVrheISv"
            alt="Skycrane landing system"
          />
          <p className="pageInfo">
            Since Curiosity is a much larger rover, it would have to land with a different landing style than the previous rovers. This new system employed the use of a “sky-crane” that was attached to the top of Curiosity. When the right altitude was reached, rockets on the crane would bring the spacecraft to a near hover above the surface. Cables would then lower the rover down. Once the rover was safely on the ground, the cables would separate from Curiosity. The crane would keep firing it’s rockets, launching it far away before smashing into the surface. Some of the first pictures captured by Curiosity were of the sky-crane hitting the ground.
          </p>
          <div style={{ clear: "both" }}></div>
          <p className="pageInfo">
            Landing in 2012, Curiosity is still active today. The data it has sent back to Earth over the course of its mission so far are still being evaluated, but some of the findings are already out. Within the first two years, Curiosity has found evidence of water on ancient Mars and currently deep in the soil, evidence that Mars was habitable, and evidence on how Mars lost most of its atmosphere.
          </p>
          <img
            className="roverInfoImgWide"
            src="https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/marsrover_cc.jpg?itok=3VbZLV7_"
            alt="Curiosity Rover"
          />

          <div className="redLine"></div>
          <h2 className="pageTitle">Highlights</h2>
          <div className="redLine"></div>

          <div className="highlightSelect">
            <div
              className={this.state.highlight ==="spirit" ? "highlightSelectBtn activeHLSelectBtn" : "highlightSelectBtn"}
              data-highlight="spirit"
              onClick={(e) => this.changeHighlight(e)}
            >Spirit</div>
            <div
              className={this.state.highlight ==="opportunity" ? "highlightSelectBtn activeHLSelectBtn" : "highlightSelectBtn"}
              data-highlight="opportunity"
              onClick={(e) => this.changeHighlight(e)}
            >Opportunity</div>
            <div
              className={this.state.highlight ==="curiosity" ? "highlightSelectBtn activeHLSelectBtn" : "highlightSelectBtn"}
              data-highlight="curiosity"
              onClick={(e) => this.changeHighlight(e)}
            >Curiosity</div>
          </div>

          {this.state.highlight === "spirit" ? <SpiritHighlights /> : null}
          {this.state.highlight === "opportunity" ? <OpportunityHighlights /> : null}
          {this.state.highlight === "curiosity" ? <CuriosityHighlights /> : null}





          <div className="redLine"></div>
          <h2 className="pageTitle">The Future</h2>
          <div className="redLine"></div>
          <p className="pageInfo">
            In just the short span of time that humans have had rovers on the surface of Mars, so much has been revealed about the history of the planet. It used to have large liquid oceans, a thick atmosphere. It had these conditions for around a billion years. It would have been habitable for life before Earth was. So far, direct evidence of life on Mars has not been found.
          </p>
          <p className="pageInfo">
            Curiosity is still exploring the red planet, looking for it. What would it mean if we found that life also took hold on Mars? What would it mean if we find all of the conditions that life needs to begin on Mars were there, but cannot find evidence that life ever was? With the help of these rovers, and future ones sent to the planet, we will have a much clearer picture of just how special Mars was, and just how special Earth is.
          </p>
          <p className="pageInfo">
            Perhaps, in the future, there will be actual canals on Mars, crossing the surface, carrying the very water Curiosity found to colonies of people who want to explore.
          </p>
        </div>
      </div>
    )
  }
}

export default RoverHistory;