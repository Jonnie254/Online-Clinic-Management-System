import React from 'react'
import {assets} from "../assets/assets.js";

const About = () => {
    return (
        <div>
            <div className={`text-center text-2xl pt-10 text-gray-500`}>
                <p>ABOUT <span className={`text-gray-700 font-medium`}>US</span></p>
            </div>
            <div className={`my-10 flex flex-col md:flex-row gap-12`}>
                <img className={`w-full md:max-w-[360px]`} src={assets.about_image} alt=""/>
                <div className={`flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600`}>
                    <p>We are committed to providing an exceptional healthcare experience through our
                        state-of-the-art Clinic Management System (CMS). Our custom-built web platform is designed
                        to streamline the administrative and clinical operations of our clinic, allowing us to focus
                        on what matters most—delivering high-quality patient care</p>
                    <p>With our secure patient portal, you can access your personal health records anytime,
                        anywhere. This includes past visits, treatment history, lab results, and prescriptions,
                        giving you full control over your healthcare information. It helps us provide personalized
                        care while keeping all your records up to date and in one place.</p>
                    <b className={`text-gray- 800`}>Our Vision</b>
                    <p> Our vision is to create a patient-first healthcare environment where advanced technology
                        meets compassionate care. We strive to revolutionize clinic operations by integrating
                        seamless digital solutions that not only improve clinic efficiency but also enhance patient
                        well-being. </p>
                </div>
            </div>
            <div className={`text-xl my-4`}>
                <p>WHY <span className={`text-gray-700 font-semibold`}>CHOOSE US</span></p>
            </div>
            <div className={`flex flex-col md:flex-row mb-20`}>
                <div
                    className={`border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer`}>
                    <b>EFFICIENCY</b>
                    <p>Streamlined Appointment Schenduling That fits into your Busy lifestyle</p>
                </div>
                <div
                    className={`border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer`}>
                    <b>CONVENCIENCE</b>
                    <p>Access to a network of trusted healthcare proffessional in your area</p>
                </div>
                <div
                    className={`border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer`}>
                    <b>PERSONALIZATION</b>
                    <p>Tailored Reccommendation and remainders To help you stay on top of your health</p>
                </div>
            </div>
        </div>
    )
}

export default About