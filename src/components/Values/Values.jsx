import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import './Values.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'

const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left-side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right-side */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give to You</span>
          <span className='secondaryText'>We always ready to help by providijng the best services for you.</span>
          <span className='secondaryText'>We beleive a good blace to live can make your life better</span>

          <Accordion
            className='accordian'
            preExpanded={[0]}
            allowMultipleExpanded={false}
          >
            {
              data.map((item, index) => (
                <AccordionItem
                  className='accordianItem'
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordianButton'>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Values