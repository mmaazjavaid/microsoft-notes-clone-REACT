import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import "../style.css"
import { useState } from "react"
//NoTES SYNCED WITH LOCAL STOARAGE
//Added notes summary title 
export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
