import "./skills.css"

function Skills() {
    return (
        <div id="skillsDiv">
            <div id="skillTitle">
                <h1>Habilidades Técnicas</h1>
            </div>
            <div id="skillOrg">
                <div id="languagesDiv">
                    <h2 className="languageTitle">Linguagens</h2>
                    <div id="languages" className="simple">
                        <div>
                            <img className="skillIcon" src="/src/assets/html.png" />
                            <p className="languageText">HTML</p>
                        </div>
                        <div>
                            <img className="skillIcon" src="/src/assets/CSS3.png" />
                            <p className="languageText">CSS</p>
                        </div>
                        <div>
                            <img className="skillIcon" src="/src/assets/JavaScrip.png" />
                            <p className="languageText">JavaScript</p>
                        </div>
                    </div>
                    <div className="simple" id="react">
                        <div>
                            <img className="skillIcon" src="/src/assets/react.png" />
                            <p className="languageText">React.JS</p>
                        </div>
                        <div>
                            <img className="skillIcon" src="src/assets/C.png" />
                            <p className="languageText">C (Linguagem)</p>
                        </div>
                    </div>
                </div>
                <div id="toolsDiv">
                    <h2 className="languageTitle">Ferramentas</h2>
                    <div id="tools">
                        <div>
                            <img className="skillIcon" src="/src/assets/github.png" />
                            <p className="languageText">GitHub</p>
                        </div>
                        <div>
                            <img className="skillIcon" src="/src/assets/vscode.png" />
                            <p className="languageText">VSCode</p>
                        </div>
                        <div>
                            <img className="skillIcon" src="/src/assets/figma.png" />
                            <p className="languageText">Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills