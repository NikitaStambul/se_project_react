import "./Profile.css";
import ClothesSection from "components/ClothesSection";
import Sidebar from "components/Sidebar";

function Profile() {
  return (
    <main className="profile">
      <Sidebar className="profile__sidebar" />
      <ClothesSection className="profile__clothes" />
    </main>
  );
}

export default Profile;
