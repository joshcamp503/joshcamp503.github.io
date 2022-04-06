// STYLES
import './Resume.css'

// DOCS
import ResumePDF from '../../assets/josh-campanella-resume-2022.pdf'

// COMPONENTS
import { saveAs } from 'file-saver'
import { Element } from 'react-scroll/modules'

const Resume = () => {

  return (
    <Element id="resume" name="resume">
      <div className="resume">
        <h1 className="title">RESUME</h1>
        <button className="download" onClick={() => {saveAs(ResumePDF, 'josh-campanella-resume-2022.pdf')}}>DOWNLOAD</button>
        <object data={ResumePDF} type="application/pdf" >Resume not found</object>
        <button className="download" id="button2" onClick={() => {saveAs(ResumePDF, 'josh-campanella-resume-2022.pdf')}}>DOWNLOAD</button>
      </div>
    </Element>
  )
}

export default Resume
