import Image from 'next/image';
import React from 'react';
import iPhonePic from '../../public/featureIphone.png';
import headerBg from "../../public/headerBg.png";
import startIcon from "../../public/startIcon.png";

const Features = () => {
    return (
        <section className='container mx-auto relative pb-24 md:pt-10 pt-6'>
            <Image className='absolute top-0 left-0 -z-50 h-full' src={headerBg} alt="" />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className='flex justify-center relative mb-4 md:mb-0'>
                    <Image src={iPhonePic} width="100%" height="100%" quality={100} alt='Feature Image' />
                    <Image className='absolute lg:right-36 md:right-18 right-4 w-8 lg:top-4 top-0' src={startIcon} alt="Icon" />
                    <Image className='absolute md:right-4 left-2 lg:left-24 bottom-20 w-12' src={startIcon} alt="Icon" />
                </div>
                <div>
                    <div className='text-center md:text-start'>
                        <h3 className='uppercase text-xl text-primary font-medium'>Features</h3>
                        <h1 className='md:text-6xl text-4xl font-medium mb-8 '>Crypto premium</h1>
                    </div>
                    <div className='mb-7'>
                        <div className='flex space-x-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 2.00232L10.6984 7.20831C10.4444 8.22417 10.3174 8.7321 10.053 9.14541C9.81903 9.511 9.50855 9.82147 9.14297 10.0554C8.72965 10.3199 8.22173 10.4469 7.20587 10.7008L1.99988 12.0023L7.20587 13.3038C8.22173 13.5578 8.72966 13.6848 9.14297 13.9492C9.50855 14.1832 9.81903 14.4936 10.053 14.8592C10.3174 15.2725 10.4444 15.7805 10.6984 16.7963L11.9999 22.0023L13.3014 16.7963C13.5553 15.7805 13.6823 15.2725 13.9468 14.8592C14.1807 14.4936 14.4912 14.1832 14.8568 13.9492C15.2701 13.6848 15.778 13.5578 16.7939 13.3038L21.9999 12.0023L16.7939 10.7008C15.778 10.4469 15.2701 10.3199 14.8568 10.0554C14.4912 9.82147 14.1807 9.511 13.9468 9.14541C13.6823 8.7321 13.5553 8.22417 13.3014 7.20831L11.9999 2.00232Z" stroke="#C23893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-light text-lg font-medium mb-2'>Budgeting intervals</p>
                        </div>
                        <p className='text-secondary text-lg font-normal'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.</p>
                    </div>
                    <div className='mb-7'>
                        <div className='flex space-x-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 2.50228V12.0023M11.9999 12.0023L20.4999 7.27999M11.9999 12.0023L3.49988 7.27999M11.9999 12.0023V21.5023M20.4999 16.7245L12.7769 12.434C12.4933 12.2764 12.3515 12.1976 12.2013 12.1667C12.0684 12.1394 11.9313 12.1394 11.7984 12.1667C11.6483 12.1976 11.5065 12.2764 11.2229 12.434L3.49988 16.7245M20.9999 16.0608V7.94373C20.9999 7.60108 20.9999 7.42976 20.9494 7.27696C20.9047 7.14179 20.8317 7.01771 20.7352 6.91302C20.6262 6.79468 20.4764 6.71148 20.1769 6.54507L12.7769 2.43396C12.4933 2.27641 12.3515 2.19763 12.2013 2.16674C12.0684 2.13941 11.9313 2.13941 11.7984 2.16674C11.6483 2.19763 11.5065 2.27641 11.2228 2.43396L3.82285 6.54508C3.52333 6.71148 3.37356 6.79468 3.26451 6.91302C3.16804 7.01771 3.09503 7.14179 3.05036 7.27697C2.99988 7.42976 2.99988 7.60109 2.99988 7.94373V16.0608C2.99988 16.4035 2.99988 16.5748 3.05036 16.7276C3.09503 16.8628 3.16804 16.9869 3.26451 17.0915C3.37356 17.2099 3.52333 17.2931 3.82285 17.4595L11.2229 21.5706C11.5065 21.7282 11.6483 21.8069 11.7984 21.8378C11.9313 21.8652 12.0684 21.8652 12.2013 21.8378C12.3515 21.8069 12.4933 21.7282 12.7769 21.5706L20.1769 17.4595C20.4764 17.2931 20.6262 17.2099 20.7352 17.0915C20.8317 16.9869 20.9047 16.8628 20.9494 16.7276C20.9999 16.5748 20.9999 16.4035 20.9999 16.0608Z" stroke="#C23893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-light text-lg font-medium mb-2'>Budgeting intervals</p>
                        </div>
                        <p className='text-secondary text-lg font-normal'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.</p>
                    </div>
                    <div className='mb-7'>
                        <div className='flex space-x-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4999 16.0023H7.99988M7.99988 16.0023V3.50232M7.99988 16.0023L3.49988 20.5023M3.49988 8.00232H15.9999M15.9999 8.00232V20.5023M15.9999 8.00232L20.4999 3.50232M20.9999 15.3396V3.80232C20.9999 3.52229 20.9999 3.38228 20.9454 3.27532C20.8974 3.18124 20.821 3.10475 20.7269 3.05682C20.6199 3.00232 20.4799 3.00232 20.1999 3.00232H8.66262C8.41803 3.00232 8.29573 3.00232 8.18065 3.02995C8.07861 3.05445 7.98107 3.09485 7.89159 3.14968C7.79068 3.21152 7.7042 3.298 7.53125 3.47095L3.46851 7.53369C3.29556 7.70664 3.20908 7.79312 3.14724 7.89403C3.09241 7.98351 3.052 8.08105 3.02751 8.18309C2.99988 8.29817 2.99988 8.42047 2.99988 8.66506V20.2023C2.99988 20.4823 2.99988 20.6224 3.05437 20.7293C3.10231 20.8234 3.1788 20.8999 3.27288 20.9478C3.37984 21.0023 3.51985 21.0023 3.79988 21.0023H15.3371C15.5817 21.0023 15.704 21.0023 15.8191 20.9747C15.9211 20.9502 16.0187 20.9098 16.1082 20.855C16.2091 20.7931 16.2956 20.7066 16.4685 20.5337L20.5312 16.4709C20.7042 16.298 20.7907 16.2115 20.8525 16.1106C20.9073 16.0211 20.9478 15.9236 20.9722 15.8216C20.9999 15.7065 20.9999 15.5842 20.9999 15.3396Z" stroke="#C23893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='text-light text-lg font-medium mb-2'>Budgeting intervals</p>
                        </div>
                        <p className='text-secondary text-lg font-normal'>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;