import UserInfoCard from "@/components/admin-profile-page/user-info-card";
import UserPasswordCard from "@/components/admin-profile-page/user-password-card";
import UserProfileCard from "@/components/admin-profile-page/user-profile-card";
import { authOptions } from "@/utils/authOptions";
import { NextPage } from "next";
import { getServerSession } from "next-auth";

interface Props {}

const ProfilePage: NextPage<Props> = async () => {
  const session = await getServerSession(authOptions);
  const user = { ...session?.user, _id: session?.user?._id?.toString() };

  return (
    <div className="admin-page-container space-y-10">
      <UserProfileCard user={user} />
      <div className="md:flex gap-6">
        <div className="md:w-1/2 w-full">
          <UserPasswordCard userId={user._id as string} />
        </div>

        <div className="flex-1 md:mt-0 mt-20">
          <UserInfoCard userId={user._id as string} />
        </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default ProfilePage;
