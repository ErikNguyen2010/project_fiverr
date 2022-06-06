import React from 'react'
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo'
import PersonalGig from '../../components/PersonalGig/PersonalGig'

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
