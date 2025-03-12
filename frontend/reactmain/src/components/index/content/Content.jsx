import React, { useRef, useState } from 'react'


function Content() {
    const [promptResp, setPromptResp] = useState('')
    const promptInputRef = useRef('null')

    const handlePrompt = async () =>{
        let promptMsg = promptInputRef.current.value
        // console.log(promptMsg);

        const base_url = 'http://localhost:5000'
        try{
          const resp = await fetch(`${base_url}/generate-story`,{
              method : "POST",
              headers : {"Content-Type":"application/json"},
              body : JSON.stringify({ "prompt" : promptMsg})
          })
          const data = await resp.json()
          setPromptResp(data.story)
        }
        catch(err){
            console.error("Error:", error);
            return "Failed to generate story.";
        }
    }
    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg text-gray-100">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="prompt"
            className="text-lg text-left ml-2 font-medium text-indigo-300"
          >
            Enter Your Tale
          </label>
          <textarea
            name="prompt"
            ref={promptInputRef}
            id="prompt"
            cols="60"
            rows="6"
            className="p-4 text-gray-200 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder-gray-500"
            placeholder="Weave your legendary tale here..."
            autoFocus
          ></textarea>
          <button onClick={handlePrompt} type='button' className='text-slate-800 px-2 bg-red-400 py-1 rounded-full'>
             Submit
          </button>
        </div>
        <div className='p-2 mt-2 text-left bg-cyan-900 rounded-md'>
            <h2 className=' text-lg text-red-400 font-medium'>
                Story :
            </h2>
            {promptResp}
        </div>
      </div>
    );
  }

export default Content