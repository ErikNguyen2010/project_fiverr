import React from 'react'
import { Card } from 'antd';
export default function PersonalInfo() {
  return (
    <section className='personal__info'>
        <Card
            title={
                <div>
                    <div className='personal__avatar'>
                        <a>
                            L
                        </a>
                        <div className="personal__camera">
                            <i className="fa-solid fa-camera"></i>
                        </div>
                    </div>
                    <div className="personal__name">
                        <h1>UserName</h1>
                        <a className='personal__icon' href="">
                            <i className="fa-solid fa-pen"></i>
                        </a>
                        <br/>
                        <a className='btn btn-primary' href="">
                            Preview Fiverr Profile
                        </a>
                    </div>
                </div>


            }
            extra={<span className='personal__badge badge badge-pill badge-success'>· Online</span>}
            style={{
                width: "100%"
            }}
            >
            <div className="personal__detail">
                <div className="personal__left">
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        From
                    </span>
                    <br/>
                    <span>
                        <i class="fa-solid fa-user-astronaut"></i>
                        Member since
                    </span>
                </div>
                <div className="personal__right">
                    <span>
                        Vietnam
                    </span>
                    <br/>
                    <span>
                        May 2022
                    </span>
                </div>
            </div>
        </Card>
        <Card className='mt-4 personalinfo__learn'
            title={
                <div className='personal__learn'>
                    <div>
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg" alt="..." />
                    </div>
                    <div className='personallearn__detail'>
                        <div>
                            <img src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/fiverr_learn/enroll-icon.69b770f.svg" alt="..." />
                        </div>
                        <h1>Earn badges and stand out</h1>
                        <br/>
                        <span>Boost your sales, by boosting your expertise.</span>
                        <br/>
                        <a target="_blank" href="https://www.fiverr.com/fiverrlearn/thinkific" className='btn btn-success'>Enroll Now</a>
                    </div>
                   
                </div>


            }
            style={{
                width: "100%"
            }}
            >
            
        </Card>
        <Card className='mt-4 personalinfo__desc'
       
            style={{
                width: "100%"
            }}
            >
            <div className="personal__desc">
                <div className="personal__left">
                    <span>
                         Description
                    </span>
                </div>
                <div className="personal__right">
                    <a href=''>
                        Edit Description
                    </a>
                   
                </div>
                <div className="personal__separator">
                </div>
            </div>
            <div className="personal__desc">
                <div className="personal__left">
                    <span>
                         Description
                    </span>
                </div>
                <div className="personal__right">
                    <a href=''>
                        Edit Description
                    </a>
                   
                </div>
                <div className="personal__separator">
                </div>
            </div>
        </Card>
        
    
    </section>
  )
}
