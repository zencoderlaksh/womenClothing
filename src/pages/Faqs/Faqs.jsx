import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Faqs = () => { 
    return (
        <>
            <div className='w-[80%] mx-auto mt-10'>
                <div>
                    <h3 className='font-semibold text-3xl'>FAQs</h3>
                </div>

                <div className='w-[95%] mx-auto flex flex-col gap-4 mt-[3rem] mb-[3rem]'>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>How do I contact your Customer Service?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>When will my order ship?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>Can I cancel or modify my order?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>What are my shipping options?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>What type of payment methods do you offer?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>Which size will fit me best?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                           We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>How do I take care of my modimal pieces?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>Where and how do you manufacture your products?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>How do you find and evaluate your suppliers?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='border-b-1 border-t-1 border-gray-400 rounded-none'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className='font-bold text-xl'>How do your suppliers support their workers?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Faqs
