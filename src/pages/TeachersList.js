import NavSideBar from "../Components/NavSideBar";
import Tcrumbar from "../Components/Tcrumbar";
import TeacherCard from "../Components/TeacherCard";
import { Appstate } from "../Context/AppProvider";

export default function TeachersList() {
  const { teacherData } = Appstate();

  return (
    <NavSideBar>
      <div>
        <div>
          <Tcrumbar />
        </div>
        <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5">
          {teacherData.map((teach, ind) => (
            <TeacherCard teacher={teach} key={teach.id} />
          ))}
        </div>
      </div>
    </NavSideBar>
  );
}
