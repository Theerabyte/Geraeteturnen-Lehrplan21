'use client'

import React from 'react'
import { School, Cake, Users, BookMarked, Origami, Briefcase } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function page() {
    return (
        <div className="column">
            <h2>Heading for Maturarbeit</h2>
            <h4>Subheadings</h4>
            <div className="text-grid">
                <p>Text 1</p>
                <p>Text 2</p>
                <br />
            </div>

            <VerticalTimeline>
                <VerticalTimelineElement contentStyle={{ background: '#b57123', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(181, 113, 35)' }} dateClassName="dat" date="2023 - 2027" iconStyle={{ background: 'rgb(181, 113, 35)', color: '#000' }} icon={<School />}>
                    <h3 style={{ color: '#eea', textAlign: 'center' }}>cvAdam1</h3>
                    <h4 style={{ color: '#fff' }}>cvAdam2</h4>
                    <p>cvAdam3</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='det' date="2014 - 2023" iconStyle={{ background: '#C0811E', color: '#000' }} icon={<School />}>
                    <h3 style={{ color: '#C0811E', textAlign: 'center' }}>cvBravo1</h3>
                    <h4 style={{ color: '#000' }}>cvBravo2</h4>
                    <p style={{ color: '#000' }}>cvBravo3</p>
                    <></>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='dat' date="2021" iconStyle={{ background: '#CA9119', color: '#000' }} icon={<Briefcase />}>
                    <h3 style={{ color: '#CA9119', textAlign: 'center' }}>cvIda1</h3>
                    <h4 style={{ color: '#000' }}>cvIda2</h4>
                    <p style={{ color: '#000' }}>cvIda3</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='det' date="2025 - ?" iconStyle={{ background: '#D09A16', color: '#000' }} icon={<Users />}>
                    <h3 style={{ color: '#D09A16', textAlign: 'center' }}>cvCharlie1</h3>
                    <h4 style={{ color: '#000' }}>cvHarley2</h4>
                    <p style={{ color: '#000' }}>cvHarley3</p>
                    <></>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='dat' date="2013 - 2023" iconStyle={{ background: '#D7A413', color: '#000' }} icon={<Users />}>
                    <h3 style={{ color: '#D7A413', textAlign: 'center' }}>cvCharlie1</h3>
                    <h4 style={{ color: '#000' }}>cvCharlie2</h4>
                    <p style={{ color: '#000' }}>cvCharlie3</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='det' date="2014 - 2015" iconStyle={{ background: '#DFB00F', color: '#000' }} icon={<Origami />}>
                    <h3 style={{ color: '#DFB00F', textAlign: 'center' }}>cvDelta1</h3>
                    <h4 style={{ color: '#000' }}>cvDelta2</h4>
                    <p style={{ color: '#000' }}>cvDelta3</p>
                    <></>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='dat' date="2022 - ?" iconStyle={{ background: '#E5B90C', color: '#000' }} icon={<Origami />}>
                    <h3 style={{ color: '#E5B90C', textAlign: 'center' }}>cvEdward1</h3>
                    <h4 style={{ color: '#000' }}>EC Münchenbuchsee</h4>
                    <p style={{ color: '#000' }}>cvFrank1</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='det' date="2015 - 2017" iconStyle={{ background: '#EFC907', color: '#000' }} icon={<Origami />}>
                    <h3 style={{ color: '#EFC907', textAlign: 'center' }}>cvEdward1</h3>
                    <h4 style={{ color: '#000' }}>EC Burgdorf</h4>
                    <p style={{ color: '#000' }}>cvEdward3</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName='dat' date="2015 - ?" iconStyle={{ background: '#F9D803', color: '#000' }} icon={<BookMarked />}>
                    <h3 style={{ color: '#F9D803', textAlign: 'center' }}>cvGeorge1</h3>
                    <h4 style={{ color: '#000' }}>cvGeorge2</h4>
                    <p style={{ color: '#000' }}>cvGeorge3</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement dateClassName="det" date='01. 2008' iconStyle={{ background: '#ffe100', color: '#000' }} icon={<Cake />} />
            </VerticalTimeline>
        </div>
    )
}

export default page