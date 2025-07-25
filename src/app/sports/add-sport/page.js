import NewSportButton from "@/components/NewSportButton";
import { db } from "@/utils/utilities.js";

export default function NewSport() {
  async function AddASport(formData) {
    "use server";

    const name = formData.get("name");
    const famousperson = formData.get("famousperson");
    const startyear = formData.get("startyear");
    const cover = formData.get("cover");

    // insert the data into the films database
    await db.query(
      `INSERT INTO films (name, famousperson, startyear, cover) VALUES ($1, $2, $3, $4)`,
      [name, famousperson, startyear, cover]
    );
    console.log("Thank you for adding a sport!");
    revalidatePath("/sports");

    redirect("/sports");
  }

  return (
    <div>
      <form action={AddASport} className="sport-form-container">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="famousperson">Famous Person</label>
        <input id="famousperson" name="famousperson" type="text" required />
        <label htmlFor="startyear">Start Year</label>
        <input id="startyear" name="startyear" type="text" required />
        <label htmlFor="cover">Cover</label>
        <input id="cover" name="cover" type="text" required />
        <button type="submit">Submit</button>
      </form>
      <NewSportButton />
    </div>
  );
}
