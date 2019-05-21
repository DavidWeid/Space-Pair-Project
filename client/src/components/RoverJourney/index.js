import React from "react";
import "./style.css";

const RoverJourney = props => {
  return (
    <div className="fullArea">
      <div className="outputArea">

        <div className="redLine"></div>
        <h1 className="pageTitle">Machines</h1>
        <div className="redLine"></div>



        <div className="roverImgGrid">
          <div className="machineImgDiv">
            <p className="imgDesc">Spitit and Opportunity</p>
            <img className="machineImgMain" alt="Spirit and Opportunity Facts" src="https://mars.jpl.nasa.gov/layout/mer/images/MER_ByTheNumbers_infographic_Feb2019.jpg" />
          </div>

          <div className="machineImgDiv">
            <p className="imgDesc">Curiosity</p>
            <img className="machineImgMain" alt="Curiosity" src="https://thumbs-prod.si-cdn.com/rhFlJcADAUGFcsCKdSJqHhzqdZs=/800x600/filters:no_upscale():focal(273x253:274x254)/https://public-media.si-cdn.com/filer/3c/2c/3c2ce311-b721-412b-948d-e481cdb49a0e/selfie.jpg" />
          </div>
        </div>

        <p className="pageInfo">
          During the course of their missions on Mars, the rovers Spirit, Opportunity, and Curiosity have accomplished many scientific and technological feats. The photos that this website accesses comes from the <a href="https://github.com/chrisccerami/mars-photo-api" target="_blank" rel="noopener noreferrer">Mars-Photos-API</a> that is maintained by <a href="https://github.com/chrisccerami" target="_blank" rel="noopener noreferrer">Chris Cerami</a>. This API has over 500,000 images that can be returned from the rovers, and Curiosity adds to the collection daily. The images tell a story about the journey each rover has taken on the surface or Mars, and what discoveries they have made. A large number of these pictures are of the rovers themselves, and here are a few of the things you can expect to see.
        </p>

        <div className="redLine"></div>
        <h2 className="pageTitle">Spirit and Opportunity</h2>
        <div className="redLine"></div>

        <div className="machineImgDiv floatRight topSpace">
          <p className="imgDesc">Calibration Target</p>
          <img className="machineImg" alt="Calibration Target" src="https://mars.nasa.gov/mer/gallery/all/2/p/040/2P129914320ESF0506P2830L5M1-BR.JPG" />
        </div>

        <p className="pageInfo">
          When you go through some of the sols for these two rovers, you are going to notice a couple of things very quickly. The first question that you might have is what is this thing? That is the Calibration target and sundial. You are going to see a lot of pictures of it. It is how scientists were able to figure out the true color of something, despite the dust in the air and lighting conditions.
        </p>

        <p className="pageInfo">
          Each of the rovers have nine cameras:  Two Front Hazard Avoidance (FHAZ) cameras, two Rear Hazard Avoidance cameras (RHAZ), two Navigational Cameras (NAVCAM), two Panoramic Cameras (PANCAM), and one Miniature Thermal Emission Spectrometer (Mini-TES). The reason that most of the cameras are actually a pair of cameras is to provide stereoscopic images, 3D. This is why, when using the flip book tool in the Data page, many of the images will shift back and forth on the same object.
        </p>

        <p className="pageInfo">
          The Rock Abrasion Tool (RAT) is how these rovers were able to look inside of the rocks they found. The RAT would use grinding, diamond studded teeth to peel away the top layers of rocks and expose what is beneath the weathered surface. The rover would then use the Mini-tes, along with other tools, to get a clearer picture of what made up the rock and what geological conditions they endured.
        </p>

        <p className="pageInfo">
          Each rover had six wheels, specially designed for traversing the Martian surface. The wheel that stopped working 779 sols spun some 13 millions times before breaking.
        </p>

        <div className="machinePicGrid">
          <div className="machineImgDiv">
            <p className="imgDesc">Rock Abrasion Tool</p>
            <img className="machineImg" alt="Rock Abrasion Tool" src="https://mars.nasa.gov/mer/gallery/all/1/p/048/1P132445003ESF05AMP2131L7M1-BR.JPG" />
          </div>

          <div className="machineImgDiv">
            <p className="imgDesc">Sprit's Tracks</p>
            <img className="machineImg" alt="Spirit's Tracks" src="https://mars.nasa.gov/mer/gallery/all/2/r/109/2R136049852EFF3400P1310L0M1-BR.JPG" />
          </div>

          <div className="machineImgDiv">
            <p className="imgDesc">RAT Markings</p>
            <img className="machineImg" alt="RAT Marks" src="https://mars.nasa.gov/mer/gallery/all/1/p/150/1P141508013EFF3192P2575L7M1-BR.JPG" />
          </div>
        </div>

        <div className="redLine"></div>
        <h2 className="pageTitle">Curiosity</h2>
        <div className="redLine"></div>

        <p className="pageInfo">
          The Curiosity Rover has many similarities to Spirit and Opportunity. It has many of the same camera systems. It has the same number of wheels. It even has a similar Calibration Target. It just is a lot bigger and brought a lot more equipment with which to explore Mars. Instead of the RAT, it has a percussion drill. Instead of the PANCAM, it has a beefy Mast Camera (MAST) that has significantly higher resolution and can even capture 720p video at 10 frames per second.
        </p>

        <div className="machinePicGrid">
          <div>
            <p className="imgDesc">Curiosity's Wheels</p>
            <img className="machineImg" alt="Curiosty's Wheels" src="https://mars.jpl.nasa.gov/msl-raw-images/msss/00034/mhli/0034MH0000660010100027E01_DXXX.jpg" />
          </div>

          <div>
            <p className="imgDesc">Radioisotope Thermoelectric Generator</p>
            <img className="machineImg" alt="RTG" src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00010/opgs/edr/ncam/NRA_398381736EDR_F0030000NCAM15000M_.JPG" />
          </div>

          <div>
            <p className="imgDesc">Percussion Drill</p>
            <img className="machineImg" alt="Percussion Drill" src="https://mars.jpl.nasa.gov/msl-raw-images/msss/01536/mcam/1536ML0078720000604513E01_DXXX.jpg" />
          </div>
        </div>

        <p className="pageInfo">
          Curiosity also brought a suite of scientific equipment to help it get a clearer picture of the chemicals that composed the early surface of Mars. Curiosity discovered that Mars had on its surface Sulfur, Phosphorus, Carbon, Nitrogen, Oxygen, and Hydrogen. These are the basic building blocks of life on Earth.
        </p>
        <p className="pageInfo">
          A recent discovery relates to Methane gas. Methane can be produced by nonbiologic means, but it is also a main by-product of microbial life. It also has a short life span, meaning that it does not stay in the atmosphere for very long periods of time. Mars has Methane levels that fluctuate during the seasons. While this does not prove that there is life on Mars, it does prove that Mars is not the dead planet everyone thought it was. There is something very  interesting going on beneath the surface.
        </p>

        <img className="bottomImg" alt="Mars" src="https://cdn.pixabay.com/photo/2015/08/11/15/19/mars-884709_1280.jpg" />
      </div>
    </div>
  )
}

export default RoverJourney;