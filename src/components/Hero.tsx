import { RiGithubFill, RiTwitterFill } from "react-icons/ri"

function Hero() {
    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div>
                <div className="display-3 fw-bold mb-2">Christianto Chen</div>
                <div className="display-6 fw-normal mb-2">Software Engineer</div>
                <div className="d-flex flex-row mb-2">
                    <div className="position-relative me-2">
                        <RiGithubFill size={40} />
                        <a href="https://github.com/christiantochen" className="stretched-link"
                            target="_blank" rel="noreferrer" title="Connect with me on Github" />
                    </div>
                    <div className="position-relative me-2">
                        <RiTwitterFill size={40} />
                        <a href="https://twitter.com/christiantochen" className="stretched-link"
                            target="_blank" rel="noreferrer" title="Connect with me on Twitter" />
                    </div>
                </div>
                <div className="position-relative fw-light">
                    christianto_chen@live.com
                    <a href="mailto:christianto_chen@live.com" className="stretched-link" />
                </div>
            </div>
        </div>
    )
}

export default Hero