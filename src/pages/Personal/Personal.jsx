import React from 'react'
import PersonalGig from './PersonalGig/PersonalGig'
import PersonalInfo from './PersonalInfo/PersonalInfo'

export default function Personal() {
  return (
    <section className='personal'>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <PersonalInfo/>
                </div>
                <div className="col-8">
                    <PersonalGig/>
                </div>
            </div>
        </div>
    </section>
  )
}
