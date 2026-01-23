function StudentList({ student }) {
  return (
    <tbody>
      <tr>
        <td>{student.id}</td>
        <td>{student.fullName}</td>
        <td>{student.gender}</td>
        <td>{student.age}</td>
        <td>{student.major}</td>
        <td>
          {student.score < 3 && <p style={{ color: "red" }}>{student.score}</p>}
          {student.score >= 3 && student.score < 6 && (
            <p style={{ color: "orangeyellow    " }}>{student.score}</p>
          )}
          {student.score >= 6 && student.score < 8 && (
            <p style={{ color: "blue" }}>{student.score}</p>
          )}
          {student.score >= 8 && student.score < 9.5 && (
            <p style={{ color: "green" }}>{student.score}</p>
          )}
          {student.score >= 9.5 && (
            <p style={{ color: "purple" }}>{student.score}</p>
          )}
        </td>
        <td>
          {student.score < 3 && <p style={{ color: "red" }}>Yếu</p>}
          {student.score >= 3 && student.score < 6 && (
            <p style={{ color: "yellow" }}>Trung Bình</p>
          )}
          {student.score >= 6 && student.score < 8 && (
            <p style={{ color: "blue" }}>Khá</p>
          )}
          {student.score >= 8 && student.score < 9.5 && (
            <p style={{ color: "green" }}>Giỏi</p>
          )}
          {student.score >= 9.5 && <p style={{ color: "purple" }}>Xuất Sắc</p>}
        </td>
      </tr>
    </tbody>
  );
}
export default StudentList;
