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
        <form action={handleUserInfoSubmit}>
            <label htmlFor="username">Username</label>
            <input name="username" placeholder="carmelofthewoods"/>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" placeholder="write something brief about you...."/>
            <label htmlFor="favouriteathlete">Favourite Athlete</label>
            <input name="favouriteathlete" placeholder="Mohammed Ali"/>
            <button type="submit">Submit</button>
        </form>
    )
}