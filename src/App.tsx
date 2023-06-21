import React from 'react';
import { MOCK_DATA, MOCK_USER} from "./static";
import {Comment} from "./components/coment";

import "./style.css"


export const App = () => {
    const [data, setData] = React.useState(MOCK_DATA)
    const [textValue, setTextValue] = React.useState('')

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newComment = {
            body: textValue,
            id: data.length + 1,
            postId: 100,
            user: {
                id: MOCK_USER.id,
                firstName: MOCK_USER.firstName,
                lastName: MOCK_USER.lastName
            },
        }
        setData(prevState => prevState.concat(newComment))
        setTextValue('')
    }

    const handleRemove = (id:number) =>{
        const newComments = data.filter(item => item.id !== id)

        setData(prevState => newComments)
    }

    const disabled = textValue.length === 0

    return (
        <div className={"layout"}>
            <div className={"container"}>
                <div className={"comments_container"}>
                    {data.map((item) => {
                        return <Comment key={item.id} comment={item} onClick={()=>handleRemove(item.id)}/>
                    })}
                </div>

                <form className={"comment_form"} onSubmit={handleSubmit}>
                    <textarea className={"form__textArea"} value={textValue} onChange={handleTextChange}/>
                    <button className={"form__button"} type={"submit"} disabled={disabled}>Send</button>
                </form>

            </div>
        </div>
    );
}


