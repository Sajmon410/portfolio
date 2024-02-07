import React from 'react';
import { motion } from 'framer-motion';
import './aboutme.css';
import {ReactTyped} from "react-typed";
const AboutMe = () => {
  return (
    <div className="container-hero">
        <div className='hero'>
        <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{rotate: 10 , scale: 1.1}}
                transition={5000}
                className="centar"
                animate={{ rotate:0.1 }}>
                <div className='animate__animated animate__backInLeft'>
                <div className="app-container"></div>
                    <h1 className="text-hero">Welcome.</h1>
                    <ReactTyped strings={[`My name is  <span style="color: rgb(0, 0, 0);">Simon</span> Radosavljević.`]} typeSpeed={100} loop />
                </div>
        </motion.div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nibh convallis, mattis erat ut, placerat odio. Morbi non enim vel sapien cursus tempor. Donec id urna est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis et fermentum orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rhoncus rutrum augue, non bibendum purus fermentum eget. Cras elementum dolor purus, in cursus est egestas facilisis. Vestibulum diam nisl, sodales ac dolor a, pharetra porttitor orci. Donec non feugiat tortor, id tristique erat. Praesent sapien purus, hendrerit ac dignissim pharetra, vehicula id orci.

                Vivamus placerat dolor at auctor rutrum. Mauris euismod nibh in urna lacinia, eget sollicitudin justo auctor. Maecenas porttitor sapien eu arcu venenatis interdum. Sed vulputate eu nibh sed bibendum. Vestibulum sodales vehicula est, ut consectetur purus euismod at. Donec eget felis ut mi facilisis dictum a vel nibh. Vivamus nec vehicula augue. Nulla iaculis ac odio non tincidunt. Vivamus in neque vitae enim volutpat venenatis quis id dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu lobortis justo, vel ullamcorper felis. Cras sit amet elementum enim. Aliquam erat volutpat. Aliquam rutrum dignissim ex non aliquet. Nunc posuere urna leo, sed eleifend dolor pellentesque id.</p>
        </div>
    </div>
  );
};

export default AboutMe;
