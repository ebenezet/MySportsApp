import NewSportButton from "@/components/NewSportButton";
import { db } from "@/utils/utilities.js";
import { revalidatePath } from "next/cache";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function NewSport() {
  async function AddASport(formData) {
    "use server";

    const name = formData.get("name");
    const mostfamousperson = formData.get("mostfamousperson");
    const startyear = formData.get("startyear");
    const cover = formData.get("cover");

    // insert the data into the films database
    await db.query(
      `INSERT INTO sports (name, mostfamousperson, startyear, cover) VALUES ($1, $2, $3, $4)`,
      [name, mostfamousperson, startyear, cover]
    );
    console.log("Thank you for adding a sport!");
    revalidatePath("/sports");

    redirect("/sports");
  }

  return (
    <div className=" bg-green-300">
      <form action={AddASport} className="flex flex-col items-center gap-3">
        <div>
          <label
            htmlFor="name"
            className="flex border-1 justify-center border-black border-solid bg-amber-100"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="flex border-1 border-black border-solid bg-white"
          />
        </div>
        <div>
          <label
            htmlFor="mostfamousperson"
            className="flex border-1 justify-center border-black border-solid bg-amber-100"
          >
            Most Famous Person
          </label>
          <input
            id="mostfamousperson"
            name="mostfamousperson"
            type="text"
            required
            className="flex border-1 border-black border-solid bg-white"
          />
        </div>
        <div>
          <label
            htmlFor="startyear"
            className="flex border-1 justify-center border-black border-solid bg-amber-100"
          >
            Start Year
          </label>
          <input
            id="startyear"
            name="startyear"
            type="text"
            required
            className="flex border-1 border-black border-solid bg-white"
          />
        </div>
        <div>
          <label
            htmlFor="cover"
            className="flex border-1 justify-center border-black border-solid bg-amber-100"
          >
            Cover
          </label>
          <input
            id="cover"
            name="cover"
            type="text"
            required
            className="flex border-1 border-black border-solid bg-white"
          />
        </div>
        <button
          type="submit"
          className="flex border-1 border-black border-solid bg-amber-400 hover:bg-green-600"
        >
          {" "}
          Submit
        </button>
      </form>
      <Link href="/sports"></Link>
    </div>
  );
}
