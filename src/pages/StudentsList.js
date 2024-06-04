import CrumBar from "../Components/CrumBar";
import NavSideBar from "../Components/NavSideBar";
import StudentCard from "../Components/StudentCards";
import { Appstate } from "../Context/AppProvider";

export default function StudentList() {
  const { studentData } = Appstate();

  return (
    <NavSideBar>
      <div>
        <div>
          <CrumBar />
        </div>
        <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5">
          {studentData.map((stud, ind) => (
            <StudentCard student={stud} key={stud.id} />
          ))}
        </div>
      </div>
    </NavSideBar>
  );
}
