function Maxpoint({ students }) {
  const maxScore = Math.max(...students.map((s) => s.score));
  const topStudent = students.filter((s) => s.score === maxScore);
  const name = topStudent.map((s) => s.fullName).join();
  return (
    <div>
      <h3>sinh viên có điểm cao nhất: {name}</h3>
    </div>
  );
}
export default Maxpoint;
