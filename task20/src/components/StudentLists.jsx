import { students } from "../../data";
import StudentList from "./StudentList";

function StudentLists() {
  return (
    <table className="studentList " border={1}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Họ và tên</th>
          <th scope="col">Giới tính</th>
          <th scope="col">Tuổi</th>
          <th scope="col">chuyên ngành</th>
          <th scope="col">Điểm trung bình</th>
          <th scope="col">Danh hiệu</th>
        </tr>
      </thead>
      {students.map((item) => (
        <StudentList student={item} />
      ))}
    </table>
  );
}
export default StudentLists;
