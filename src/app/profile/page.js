import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/utilities";
import UserForm from "@/components/UserForm";

export default async function Page() {
  const { user } = await auth();
  console.log(user);

  const res = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [user]);
  const userInfo = res.rows[0];
  const isInDB = res.rows.length > 0;

  if (!isInDB) {
    return (
      <div>
        <UserForm />
      </div>
    );
  }

  const userPostsOnSports = (
    await db.query(`SELECT * FROM sports WHERE user_id = $1`, [userInfo.id])
  ).rows;

  console.log(userPostsOnSports);

  return (
    <div>
      <p>Welcome back {userInfo.username}</p>
      <p>user id: {userInfo.id}</p>
    </div>
  );
}
