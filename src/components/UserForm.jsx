import { db } from "@/utils/utilities"
import {auth} from "@clerk/nextjs/server"


export default async function UserForm() {
   

    
    const {user} = await auth()

    
    async function handleUserInfoSubmit(formData) {
        "use server"
       
        const {username, bio, favouriteathlete} = Object.fromEntries(formData)

        await db.query(`INSERT INTO users (username, bio, favouriteathlete, clerk_id) VALUES ($1, $2, $3, $4)`, [username, bio, favouriteathlete, user])
    }

    return (
        <div className="flex bg-green-300 height={600} flex-col items-center ">
        <form action={handleUserInfoSubmit} className="flex flex-col items-center">
            <div>
            <label htmlFor="username" className="flex border-1 border-black border-solid bg-amber-100">Username</label>
            <input name="username" placeholder="carmelofthewoods" className="flex border-1 border-black border-solid bg-white"/>
            </div>
            <div>
            <label htmlFor="bio" className="flex border-1 border-black border-solid bg-amber-100">Bio</label>
            <textarea name="bio" placeholder="write something brief about you...."  className="flex border-1 border-black border-solid bg-white"/>
            </div>
            <div>
            <label htmlFor="favouriteathlete" className="flex border-1 border-black border-solid bg-amber-100">Favourite Athlete</label>
            <input name="favouriteathlete" placeholder="Mohammed Ali" className="flex border-1 border-black border-solid bg-white"/>
            </div>
            <button type="submit" className="flex border-1 border-black border-solid bg-amber-400 hover:bg-green-600">Submit</button>
        </form>
        </div>
    )
}