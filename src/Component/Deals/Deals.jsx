import React from 'react';
import dealbg from '../../assets/Section.png';

const Deals = () => {
    return (
        <div className="mb-10">
            <div
                style={{
                    backgroundImage: `url(${dealbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '600px',
                    
                }}
                className="flex items-center bg-fixed  "
            >
                <div className="bg-white/95 max-w-lg p-8 m-10 ml-50 rounded-2xl shadow-md ">
                    <div className="flex items-center gap-1">
                        <h1 className="font-poppins text-xl font-bold text-primary">35%</h1>
                        <h1 className="text-[12px] font-normal text-[#777777] font-poppins">OFF</h1>
                    </div>

                    <h1 className="font-libre font-bold text-xl text-[#2B2B2D] pb-2">
                        Great deal on organic food.
                    </h1>
                    <p className="text-lg font-normal text-[#777777] font-poppins">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias delectus, quod
                        tempore hic dolorem dicta.
                    </p>


                    <div className='pt-3'>
                        {/* For TSX uncomment the commented types below */}
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 15 } /* as React.CSSProperties */} >15</span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 10 } /* as React.CSSProperties */} >10</span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 24 } /* as React.CSSProperties */} >24</span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 59 } /* as React.CSSProperties */} >59</span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Deals;
