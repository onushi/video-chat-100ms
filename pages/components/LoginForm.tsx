import { useHMSActions } from "@100mslive/react-sdk"
import { GetStaticProps, GetStaticPropsResult } from "next"
import { ChangeEvent, FormEvent, useState } from "react"

export default function LoginForm() {
  const hmsActions = useHMSActions()
  const [userName, setUserName] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      hmsActions.join({
        userName: userName,
        authToken: process.env.NEXT_PUBLIC_ROOM_STAGE_TOKEN || ""
      })
    }

  return (
    <div className="grid place-items-center h-screen bg-gray-50">
      <form className="flex flex-col gap-4 w-96 p-8 bg-gray-300 rounded shadow-xl" onSubmit={handleSubmit}>
        <div >
          <label htmlFor="user_name">User Name: </label>
          <input type="text" id="user_name" name="name" placeholder="John Smith" required value={userName} onChange={handleChange} className="px-2 py-1 rounded"></input>
        </div>
        <button type="submit" className="self-center px-4 py-2 text-white bg-gray-700 rounded shadow-lg">Join</button>
      </form>
      <div>
      </div>
    </div>
  )
}
