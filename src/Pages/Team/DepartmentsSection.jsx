import React from 'react'
import { EFPCard } from "../Home/EFPSection";
import Image from "../../Assets/Images/team-department-card-image.jpg";

export default function DepartmentsSection() {
    return (
        // Using "Home > EFPSection > EFPCard" here
        <section className="team-section efp-section" style={{padding: "70px"}}>
            <div className="title">Our Departments</div>
            <div className="department-card-container">
                <EFPCard Image={Image} Title="All Departments" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/all-departments" />
                <EFPCard Image={Image} Title="Web Development" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/web-development" />
                <EFPCard Image={Image} Title="App Development" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/app-development" />
                <EFPCard Image={Image} Title="Competitive Programming" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/competitive-programming" />
                <EFPCard Image={Image} Title="Design" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/design" />
                <EFPCard Image={Image} Title="Content" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/content" />
                <EFPCard Image={Image} Title="Machine Learning" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/machine-learning" />
                <EFPCard Image={Image} Title="Operations" Content="Lorem ipsum dolor. Adipisci quas vel eum fugiat ad perspiciatis nobis doloribus explicabo odit natus!" To="/team/operations" />
            </div>
        </section>
    )
}
