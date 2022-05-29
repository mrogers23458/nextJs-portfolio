import Image from "next/dist/client/image"

export default function ProjectCard (props) {
    const info = props.data
    const imageSrc = info.imageSrc
    const title = info.title 
    const description = info.description
    const link = info.link

    const redirect = function (url) {
        window.location.href = url
    }

    return (
        <div className="project-card">
            <p className="project-card-Title">{title}</p>
            <Image className="project-card-image" src={imageSrc} alt="project card image" onClick={() => redirect(link)}></Image>
            <div className="project-card-body">
                <p className="project-card-text">{description}</p>
                <button className="project-card-btn" onClick={() => redirect(link)}>Check it out</button>
            </div>
        </div>
    )
}